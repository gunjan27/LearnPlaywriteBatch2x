function Test_Data_Generator(input) {
  let answer = [] 
  const roles = ["admin", "editor", "viewer", "tester", "manager"];
  let user_roles;
  let user_ID ;
  let user_name;
  let user_email
  let status

  for (let i=1; i<=input; i++) {
    user_ID = "USR-" + (i).toString().padStart(4, '0');
    user_name = "TestUser_" +(i);
    user_email = "testuser" + (i) + "@example.com";
    status = (i%3 !== 0 ? "ACTIVE" :"INACTIVE" );
    user_roles= roles[(i-1)%roles.length];
    answer.push( user_ID+" | "+ user_name+" | "+user_email+" | "+status+" | "+user_roles );
  }

  return answer;
}

console.log(Test_Data_Generator(6));