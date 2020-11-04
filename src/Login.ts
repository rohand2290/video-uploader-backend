class Login {
  private username: String;
  private password: String;
  private uuid: String;

  public getUsername(): String {
    return this.username;
  }

  public setUsername(value: String) {
    this.username = value;
  }

  public getPassword(): String {
    return this.password;
  }

  public setPassword(value: String) {
    this.password = value;
  }

  public getUuid(): String {
    return this.uuid;
  }

  public setUuid(value: String) {
    this.uuid = value;
  }

  constructor($username: String, $password: String, $uuid: String) {
    this.username = $username;
    this.password = $password;
    this.uuid = $uuid;
  }
}

export default Login;
