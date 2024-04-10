#!/usr/bin/env node
import inquirer from "inquirer";


const gussingNo = Math.floor(Math.random()* 6+1);
const user = await inquirer.prompt([
{
   name :"gussing",
   type:"number",
   message:"please guess a no. between 1-6"




}])
if(user.gussing===gussingNo){
    console.log ("you guess a right no.")
}
else{
    console.log("you guess a wrong no.")
}


