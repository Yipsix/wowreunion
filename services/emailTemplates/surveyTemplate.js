const { redirectDomain } = require('../../config/keys');


module.exports = (survey) => {


return   `
    <html>
        <body>
            <div style="text-align: center;">
                <h3>I'd like your input</h3>
                <p>Manchester united is awesome right?</p>
                <p>Options: </p>
                <p>${survey.body}</p>
                <div>
                    <a href="${redirectDomain}/api/surveys/thanks"> YES! </a>
                </div>
                <div>
                    <a href="${redirectDomain}/api/surveys/thanks"> VERY AWESOME !!!! </a>
                </div>
            </div>
        </body>
    </html>
`

}