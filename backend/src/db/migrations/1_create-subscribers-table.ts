const createSubscribersTable = `
    CREATE TABLE IF NOT EXISTS subscribers (
        id          UUID PRIMARY KEY,
        first_name  VARCHAR(255) NOT NULL,
        last_name   VARCHAR(255) NOT NULL,
        email       VARCHAR(255) UNIQUE NOT NULL,
        created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE OR REPLACE FUNCTION update_updated_at()
    RETURNS TRIGGER AS $$
    BEGIN
        NEW.updated_at = CURRENT_TIMESTAMP;
        RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;

    CREATE OR REPLACE TRIGGER update_subscribers_updated_at
        BEFORE UPDATE 
        ON 
            subscribers
        FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at();
`;

export default createSubscribersTable;