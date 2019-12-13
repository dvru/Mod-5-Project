exports.seed = async (knex) => {
    await knex('users').del();
    await knex('issues').del();
    await knex('comments').del();
  
    await knex('users').insert([
      { id: 1, firstName: 'Damini', lastName: 'Varu', age: 27 },
      { id: 2, firstName: 'Vidhi', lastName: 'Sharma', age: 26 },
      { id: 3, firstName: 'Josephine', lastName: 'Yao', age: 25 }
    ]);
  
    await knex('issues').insert([
      { id: 1, name: 'Gender Pay Gap', description: 'woman will probably earn you a lower salary than a man applying for the exact same position', user_id: 1 },
      { id: 2, name: 'Race and Ethnicity', description: 'working woman is still being faced with this subtle discrimination', user_id: 2 },
      { id: 3, name: 'Climbing the Career Ladder', description: 'female professionals, who need to work harder than their male peers in order to earn recognition or praise', user_id: 3 }
    ]);
  
    await knex('comments').insert([
      { id: 1, content: 'Not Fair', issue_id: 1 },
      { id: 2, content: 'Felt Uncomfortable ', issue_id: 2 },
      { id: 3, content: 'I work hard for nothing', issue_id: 3 }
    ])
  }
  console.log('SEEDED')