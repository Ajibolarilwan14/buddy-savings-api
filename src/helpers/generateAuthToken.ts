import jwt from 'jsonwebtoken';

export const authToken = user => {
    const signedToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    return signedToken;
};