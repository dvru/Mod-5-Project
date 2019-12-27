exports.seed = async (knex) => {
    await knex('users').del();
    await knex('issues').del();
    await knex('comments').del();
  
    await knex('users').insert([
      { id: 1, username: 'Damini', password: 'Varu', age: 27 },
      { id: 2, username: 'Vidhi', password: 'Sharma', age: 26 },
      { id: 3, username: 'Josephine', password: 'Yao', age: 25 },
      { id: 4, username: 'Fabiola', password: 'Mendoza', age: 30 },
      { id: 5, username: 'Emma', password: 'Smith', age: 22 },
      { id: 6, username: 'Ava', password: 'Johnson', age: 26 },
      { id: 7, username: 'Isabella', password: 'Ramirez', age: 21 },
      { id: 8, username: 'Mia', password: 'lin', age: 32 },
      { id: 9, username: 'Sophia', password: 'Burt', age: 24 },
      { id: 10, username: 'Maria', password: 'Rodriguez', age: 27 },
      { id: 11, username: 'Olivia', password: 'Hamilton', age: 26 },
      { id: 12, username: 'Charlotte', password: 'Garcia', age: 25 }
    ]);
  
    await knex('issues').insert([
      { id: 1, name: 'Gender Pay Gap', description: 'woman will probably earn you a lower salary than a man applying for the exact same position'},
      { id: 2, name: 'Race and Ethnicity', description: 'working woman is still being faced with this subtle discrimination'},
      { id: 3, name: 'Climbing the Career Ladder', description: 'female professionals, who need to work harder than their male peers in order to earn recognition or praise'},
      { id: 4, name: 'Pregnancy Discrimination', description: 'Being a working woman can become extremely difficult when it comes to having a baby. Many women are afraid of starting a family knowing that their career will most likely be affected'},
      { id: 5, name: 'Sexual Harassment', description: 'The tricky topic of workplace sexism and harassment has become even more evident in recent years, with women plucking up the courage to share their horrific stories'},
      { id: 6, name: 'Appearance', description: 'Whether clothing, body frame or makeup related… sometimes the criticism is that women don’t look polished enough, with the general attitude being that the woman doesn’t care about their job if they aren’t wearing makeup or high heels'},
      { id: 7, name: 'Work-Life Imbalance', description: 'women still find themselves in the same dead-end position years later, because they have to leave work on time to pick up their kids from their after-school activities'},
      { id: 8, name: 'Ego Clashes', description: 'Women of power are usually faced with an egotistical man who refuses to take orders from a woman'},
      { id: 9, name: 'Exclusion from the Boy’s Club', description: 'In a male-dominated industry, men stick together in a clique and tend to exclude female employees. They go as far as to mock them or make them feel inadequate. To overcome this childish behaviour, simply ignore them and rise to the top or find another female alibi'},
      { id: 10, name: 'Office Favouritism', description: 'Are you in a male-dominated industry and feel like your manager favours your male co-worker?,They are always sharing banter on the latest football trend or discussing the latest technological discovery but, sadly, you only talk to your boss about work-related issues'},
      { id: 11, name: 'That Time of the Month', description: 'A woman’s ‘time of the month’ is no joking matter. It’s something that’s completely out of a woman’s control; she doesn’t know how her body will react'},
      { id: 12, name: 'Gender Bias', description: 'You’re probably left wondering what your family plans have to do with the skills you can offer to the company. Although the hiring manager might just be asking to get to know you on a personal level, the interview is the wrong place to be doing it. Also, why don’t men get asked the same question? Your personal plans shouldn’t come into discussion as, sadly, it might jeopardise your chances of getting your dream job.'}
    ]);
  
    await knex('comments').insert([
      { id: 1, content: 'Not Fair', user_id: 1, issue_id: 1 },
      { id: 2, content: 'Felt Uncomfortable ', user_id: 2, issue_id: 2 },
      { id: 3, content: 'I work hard for nothing', user_id: 3, issue_id: 3 },
      { id: 4, content: 'Not Fair', user_id: 4, issue_id: 4 },
      { id: 5, content: 'Felt Uncomfortable ', user_id: 5, issue_id: 5 },
      { id: 6, content: 'I work hard for nothing', user_id: 6, issue_id: 6 },
      { id: 7, content: 'Not Fair', user_id: 7, issue_id: 7 },
      { id: 8, content: 'Felt Uncomfortable ', user_id: 8, issue_id: 8 },
      { id: 9, content: 'I work hard for nothing', user_id: 9, issue_id: 9 },
      { id: 10, content: 'Not Fair', user_id: 10, issue_id: 10 },
      { id: 11, content: 'Felt Uncomfortable ', user_id: 11, issue_id: 11 },
      { id: 12, content: 'I work hard for nothing', user_id: 12, issue_id: 12 }
      
    ])
  }
  console.log('SEEDED')