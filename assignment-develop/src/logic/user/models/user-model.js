class User {
  constructor(
    id,
    name,
    email,
    password,
    emailVerifiedAt,
    rememberToken,
    createdAt,
    updatedAt,
    role
  ) {
    this.id = id || null;
    this.name = name || '';
    this.email = email || '';
    this.password = password || '';
    this.emailVerifiedAt = emailVerifiedAt || null;
    this.rememberToken = rememberToken || null;
    this.createdAt = createdAt || new Date().toISOString();
    this.updatedAt = updatedAt || new Date().toISOString();
    this.role = role || 'student';
  }

  validatePassword(inputPassword) {
    return this.password === inputPassword;
  }

  updateInfo(newInfo) {
    Object.keys(newInfo).forEach(key => {
      if (this[key] !== undefined) {
        this[key] = newInfo[key];
      }
    });
    this.updatedAt = new Date().toISOString();
  }

  static fromPlainObject(obj) {
    return new User(
      obj._id,
      obj.name,
      obj.email,
      obj.password,
      obj.emailVerifiedAt,
      obj.rememberToken,
      obj.createdAt,
      obj.updatedAt,
      obj.role
    );
  }

  toPlainObject() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      emailVerifiedAt: this.emailVerifiedAt,
      rememberToken: this.rememberToken,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      role: this.role,
    };
  }
}

export default User;
