const seedSubscribersTable = `
    INSERT INTO subscribers (id, first_name, last_name, email, created_at, updated_at)
    VALUES 
    ('44c06441-6ccc-44bd-8f4b-6bea1ca04fda', 'Alice', 'Smith', 'asmith@example.com', '2024-03-20T18:16:03.009Z', '2024-03-20T18:16:03.009Z'),
    ('f0b8db7d-94e0-4c31-9d03-bb71b9e281df', 'Bob', 'Johnson', 'bjohnson@example.com', '2024-03-21T18:16:03.009Z', '2024-03-21T18:16:03.009Z'),
    ('ee17bc5b-79fd-481a-b4d5-5f43ad1f3b25', 'Charlie', 'Brown', 'cbrown@example.com', '2024-03-22T18:16:03.009Z', '2024-03-22T18:16:03.009Z'),
    ('a502d306-97e7-4b29-90ae-2c0e10d049ab', 'David', 'Davis', 'ddavis@example.com', '2024-03-23T18:16:03.009Z', '2024-03-23T18:16:03.009Z'),
    ('4e13c5a9-dc38-4c8c-a2b3-3b4b03adfdb0', 'Emily', 'Wilson', 'ewilson@example.com', '2024-03-24T18:16:03.009Z', '2024-03-24T18:16:03.009Z'),
    ('8d6fc356-09a3-4e4a-b1e1-cd9225f3dffd', 'Frank', 'Lee', 'flee@example.com', '2024-03-25T18:16:03.009Z', '2024-03-25T18:16:03.009Z'),
    ('51ecfc4d-f6c5-4dab-aed8-988b92c5a774', 'Grace', 'Adams', 'gadams@example.com', '2024-03-26T18:16:03.009Z', '2024-03-26T18:16:03.009Z'),
    ('d8e7399c-78eb-4310-810d-b183ae51a4b4', 'Henry', 'Martin', 'hmartin@example.com', '2024-03-27T18:16:03.009Z', '2024-03-27T18:16:03.009Z'),
    ('0b1c6f05-4709-4d58-90c4-527ab96d5de9', 'Ivy', 'Garcia', 'igarcia@example.com', '2024-03-28T18:16:03.009Z', '2024-03-28T18:16:03.009Z'),
    ('2f44a60a-2498-4379-97b1-9ef897c0f573', 'Jack', 'Martinez', 'jmartinez@example.com', '2024-03-29T18:16:03.009Z', '2024-03-29T18:16:03.009Z'),
    ('3b301349-e29a-4d91-9fcf-ee52d0dc65c4', 'Katherine', 'Robinson', 'krobinson@example.com', '2024-03-30T18:16:03.009Z', '2024-03-30T18:16:03.009Z'),
    ('1d0b0f29-9472-4de8-9712-45e179d58c0f', 'Liam', 'Hernandez', 'lhernandez@example.com', '2024-03-31T18:16:03.009Z', '2024-03-31T18:16:03.009Z'),
    ('7ef960c3-1b0d-4b34-8894-b52ee8fb09e4', 'Mia', 'Lopez', 'mlopez@example.com', '2024-04-01T18:16:03.009Z', '2024-04-01T18:16:03.009Z'),
    ('eb5867ee-545b-4d1f-b9cd-d6806c6b6060', 'Noah', 'Gonzalez', 'ngonzalez@example.com', '2024-04-02T18:16:03.009Z', '2024-04-02T18:16:03.009Z'),
    ('360e9b91-5312-46bc-bff7-5d14f3a6eef0', 'Olivia', 'Perez', 'operez@example.com', '2024-04-03T18:16:03.009Z', '2024-04-03T18:16:03.009Z');
`;

export default seedSubscribersTable;