class Github{
  constructor(){
    this.client_id = '1b7f186e11eaf7380579';
    this.client_secret = '113f765e67ac247c1a3f578cccb235bbb3771f4b';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}