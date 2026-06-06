const bcrypt = require('bcrypt');
const saltRounds = 10;

export const hashPassword = async (password: string) => {
    try {
        return await bcrypt.hash(password, saltRounds);
    } catch (error) {
        console.error('Error hashing password:', error);
    }
}

export const comparePassword = async (plainPassword: string, hashedPassword: string) => {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
        console.error('Error comparing password:', error);
    }
}