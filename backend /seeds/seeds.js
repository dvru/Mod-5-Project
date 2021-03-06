exports.seed = async (knex) => {
    await knex('users').del();
    await knex('issues').del();
    await knex('comments').del();
  
   
    await knex('users').insert([
      { id: 1, firstName: 'Damini', lastName: 'Varu', username: 'DV', age: 27, email: 'damvaru@gmail.com', password: '1234'},
      { id: 2, firstName: 'Vidhi', lastName: 'Sharma', username: 'VS', age: 26, email: 'vidhisharma@gmail.com', password: '1245'},
      { id: 3, firstName: 'Josephine', lastName: 'Yao', username: 'JY', age: 25, email: 'josieyao@gmail.com', password: '1235'},
      { id: 4, firstName: 'Fabiola', lastName: 'Mendoza', username: 'FM', age: 30, email: 'fabdoza@gmail.com', password: '1256'},
      { id: 5, firstName: 'Emma', lastName: 'Smith', username: 'ES', age: 22, email: 'emsmith@gmail.com', password: '1247'},
      { id: 6, firstName: 'Ava', lastName: 'Johnson', username: 'AJ', age: 26, email: 'avjohnson@gmail.com', password: '1234'},
      { id: 7, firstName: 'Isabella', lastName: 'Ramirez', username: 'IR', age: 21, email: 'isaramirez@gmail.com', password: '1246'},
      { id: 8, firstName: 'Mia', lastName: 'Lin', username: 'ML', age: 32, email: 'mialin@gmail.com', password: '1234' },
      { id: 9, firstName: 'Sophia', lastName: 'Burt', username: 'SB', age: 24, email: 'sophiabu@gmail.com', password: '1255'},
      { id: 10, firstName: 'Maria', lastName: 'Rodriguez',username: 'MR', age: 27, email: 'mariarod@gmail.com', password: '1237'},
      { id: 11, firstName: 'Olivia', lastName: 'Hamilton', username: 'OH',age: 26, email: 'olivhamil@gmail.com', password: '1249'},
      { id: 12, firstName: 'Charlotte', lastName: 'Garcia',username: 'CG', age: 25, email: 'chargar@gmail.com', password: '1224'}
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