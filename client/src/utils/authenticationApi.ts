export function signIn(): Promise<{}> {
  return new Promise(resolve => setTimeout(resolve, 5000));
}

export function signOut(): Promise<{}> {
  return new Promise(resolve => setTimeout(resolve, 100));
}
