import { isAuthentificated, isOwner } from '../middlewares';
import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
import express from 'express';
export default (router: express.Router) => {
    router.get('/users',isAuthentificated,getAllUsers);
    router.delete('/users/:id',isAuthentificated,isOwner,deleteUser);
    router.patch('/users/:id',isAuthentificated,isOwner,updateUser);
}