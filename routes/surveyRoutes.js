const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Mailer = require('../services/Mailer');
const Survey = mongoose.model('surveys');

module.exports = (app) => {
    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thanks for voting!');
    })


    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;
        const recipientArray = recipients.split(',').map(email => ({ email: email.trim() }));
        const maxRecipient = recipientArray.length;
        const answaredYes = randomIntFromInterval(0, maxRecipient);


        const survey = new Survey({
            title, // title : title because IE6
            subject,
            body,
            recipients: recipientArray, //email => {return { email : email}} because IE6
            _user: req.user.id,
            dateSent: Date.now(),
            LastResponded: Date.now(),
            yes: answaredYes,
            no: maxRecipient - answaredYes
        });

        try {
            const mailer = new Mailer(survey, surveyTemplate(survey));
            //await mailer.send(); // TODO FAILS auth problem 
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();


            res.send(user);
        } catch (err) {
            console.error(err);
        }

    });

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey
            .find({ _user: req.user.id })
            .select({ recipients: false })

        res.send(surveys);

    })

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};