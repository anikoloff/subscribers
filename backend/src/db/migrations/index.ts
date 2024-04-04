import db from '../index';
import createSubscribersTable from './1_create-subscribers-table';
import seedSubscribersTable from './2_seed-subscribers-table';

const runDbMigrations = async () => {
    const client = await db.connect();

    try {
        await client.query('BEGIN');

        await client.query(createSubscribersTable);
        await client.query(seedSubscribersTable);

        await client.query('COMMIT');
        console.log('Database migration completed.');
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Database migration failed.', error);
        throw error
    } finally {
        client.release()
    }
}
export default runDbMigrations;