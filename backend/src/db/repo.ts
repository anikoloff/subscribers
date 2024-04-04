import { QueryResult } from 'pg';
import { Subscriber } from './models';
import db from './index';
import {v4 as uuidv4} from 'uuid';

export const create = async (data: Subscriber): Promise<Subscriber | null> => {
    try {
        const id = uuidv4();

        const query = `
            INSERT INTO
                subscribers (id, first_name, last_name, email)
            VALUES
                ($1, $2, $3, $4)
            RETURNING *
        ;`;
    
        const result: QueryResult = await db.query(query, [id, data.firstName, data.lastName, data.email]);
    
        return result.rows[0];

    } catch (error) {
        console.error('Error creating a subscriber:', error);
        throw error;
    }
}

export const findAll = async (offset: number, limit: number): Promise<Subscriber[]> => {
    try {
        const query = `
        SELECT * FROM
            subscribers
        OFFSET $1
        LIMIT $2
    ;`;

    const result: QueryResult = await db.query(query, [offset, limit]);

    return result.rows;

    } catch (error) {
        console.error('Error finding all subscribers:', error);
        throw error;
    }
}

export const findByEmail = async (email: string): Promise<Subscriber | null> => {
    try {
        const query = `
            SELECT * FROM 
                subscribers 
            WHERE email = $1
        ;`;
        
        const result: QueryResult = await db.query(query, [email]);

        if (result.rows.length > 0) {
            return result.rows[0] as Subscriber;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error finding a subscriber by email:', error);
        throw error;
    }
};