enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
};

const esteban: User = {
  username: 'EstebanAdmin',
  role: ROLES.ADMIN,
};

const maria: User = {
  username: 'MariaCustomer',
  role: ROLES.CUSTOMER,
};
function isUserAnAdmin(user: User): boolean {
  return user.role === ROLES.ADMIN;
}
console.log('Is Esteban an admin? ', isUserAnAdmin(esteban));
console.log('Is Maria an admin? ', isUserAnAdmin(maria));
