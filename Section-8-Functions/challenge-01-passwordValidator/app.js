// isValidPassword function
// accepts 2 arguments: username and password
// Password requirements
// - at least 8 characters
// - NO spaces
// - CanNOT contain the username
// returns true if all requirements are met, otherwise return false

function isValidPassword (password, username) {
  if (password < 8) {
    return false;
  }
  if (password.indexOf(' ') !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}
isValidPassword ('emmalin123', 'emmalin'); // false
isValidPassword ('emmalin123', 'isCool'); // true

// condition variation 2

function isValidPassword (password, username) {
  if (password < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}
isValidPassword('coolYeah123', 'coolYeah'); // false
isValidPassword('coolYeah123', 'haha'); // true

// condition variation 3

function isValidPassword (password, username) {
  const tooShort = password < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;

  if ( tooShort || hasSpace || tooSimilar ) {
    return false;
  }
  return true;
}
isValidPassword('hoyota123', 'hoyota') // false
isValidPassword('hoyota123', 'hotayako') // true

// condition variation 4

function isValidPassword (password, username) {
  const tooShort = password < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;

  return !tooShort && !hasSpace && !tooSimilar;
}
isValidPassword('yamaha123', 'yamaha') // false
isValidPassword('yamaha123', 'kobiyama') // true