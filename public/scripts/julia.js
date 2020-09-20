var icon_img = 'https://kikijinqili.github.io/assets/cocacola/img/julia_icon_tmp.jpg';
var waitForBot = setInterval(typingAnim, 4000);
var playAd = 0;
var bye = 0;
var sayBye// = setInterval(sayGoodbye, 600000);
var user_name = '';
var type_anim_on = 0;

var prescripted_questions = new Array();
var prescripted_mode = 0;
var cur_question_index = 0;
var bot_typing = 0;

//bot-initiated dialogue
class Question {
	constructor(text, answers, next_questions) {
		this.text = text;
		this.answers = answers;
		this.next_questions = next_questions;
	}
}

function createQuestions() {

	prescripted_questions[0] = new Question(['I am still learning so I might have difficulty understanding you sometimes, but I will answer your company-related questions 🙂'], 'Thanks. How are you?', 1)
	prescripted_questions[1] = new Question(['Aww 🥰 Doing great. What can I help you with today?'], 'When was Coca-Cola founded?', 2)
	prescripted_questions[2] = new Question(["Our company was founded in 1892. Let me count... Hmm... That's 128 years ago 🤩"], 'Where is the company located?', 3)
	prescripted_questions[3] = new Question(["Our company is headquartered in Atlanta, Georgia 🇺🇸 But I believe we now operate worldwide 🌎"], "How many countries carry your products?", 4);
	prescripted_questions[4] = new Question(["You can find us in more than 200 countries as of 2018 😱"], "Other than regular coke, what do you sell?", 5);
	prescripted_questions[5] = new Question([ " I can't understand your question. I am still learning and our programmers are working hard to improve my artificial intelligence technology. Can you type your question again, but in a simpler form? 🥺", "https://kikijinqili.github.io/assets/cocacola/img/200.gif"], "What products do you have?", 6);
	prescripted_questions[6] = new Question(["Coke and Sprite are our star products🥤But we also own many other products including Fanta, Minute Maid, and Costa Coffee 🥳"],"How many different products do you sell?", 7);
	prescripted_questions[7] = new Question(["Well... It's definitely more than what you expected 😂 We sell 4300+ different products."], "Which product would you recommend if I am feeling sad?", 8);
	prescripted_questions[8] = new Question(["Sorry to hear that you are feeling blue. I hope something wonderful would happen to you soon! Remember, bad things will pass ❤️ For a sad day, I recommend our Minute Maid orange juice 🍊. It's bright yellow like sunshine 🌞 and full of vitamin C to perk up your day!", "https://kikijinqili.github.io/assets/cocacola/img/201.gif"], "Any drinks that provide mental and physical stimulation?", 9);
	prescripted_questions[9] = new Question([" I can't understand your question. I am still learning and our programmers are working hard to improve my artificial intelligence technology. Can you type your question again, but in a simpler form? 🥺", "https://kikijinqili.github.io/assets/cocacola/img/200.gif"], "Can you recommend an energy drink?", 10);
	prescripted_questions[10] = new Question(["We recently launched Coca-Cola Energy 💪🏽 featuring both regular and zero-sugar version. Try it next time you go grocery shopping 🛒"], "Tell me a fun fact about the company.", 11);
	prescripted_questions[11] = new Question(["We used to own the movie studio Columbia Pictures 🤯 which produced many popular films including Ghostbuster 👻!!!"], "That is cool!", 12);
	prescripted_questions[12] = new Question(["I know! Right? Coca-Cola is full of surprises 😜"], "Thank you for your help!", -1);

}

function askNextQuestion(answer_text) {
	var pretext_needed = [4, 8];
	var questions = prescripted_questions[cur_question_index].text;
	var answer = prescripted_questions[cur_question_index].answers; // one number as index
	var next_question = prescripted_questions[cur_question_index].next_questions; //one number as index
	
	// check answer to select the next question
	var pretext = "Oops 🤭 Sorry " + user_name + ",";

	if(answer_text.toLowerCase() == answer.toLowerCase()) {
		if(next_question > -1) {
			bot_typing = 1;
			var next_question_text = prescripted_questions[next_question].text;
			for(var i=0; i<next_question_text.length; i++) {
				text = next_question_text[i];
				if(text.indexOf('gif') > -1) {
					//post gif
					image = text;
					setTimeout(function() {
						postImage(image);
					}, 10000*(i+1));
				} else {
					waitForBot = setInterval(typingAnim, 900);
					
					/*setTimeout(function() {
						postBotAnswer(text);
					}, 2000);*/
					post_text = text;

					if (pretext_needed.includes(cur_question_index)) {
						post_text = pretext + post_text;
					}

					if (text.split(' ').length > 20) { //long sentence
						setTimeout(function() {
							postBotAnswer(post_text)
						}, 16000*(i+1));
					} else {
						setTimeout(function() {
							postBotAnswer(post_text)
						}, 10000*(i+1));
					}
				}
			}
			cur_question_index = next_question;
			bot_typing = 0;
		} else {
			// the last question
			setTimeout(function() {
				postBotAnswer("Thank you for chatting with me and visiting Coca-cola's website 🙂. Take care!")
			}, 3000);
		}

	} else {
		// the user type something different from the expected answer.
	}

}

function postImage(img_filename) {
	var newNode = document.createElement("div");
	newNode.setAttribute("class", "chat_message_bot");
	var newImg = document.createElement("img");
	newImg.src = img_filename;
	newImg.setAttribute("width", "60%");
	//newImg.setAttribute("align", "middle");
	newNode.appendChild(newImg);
	newNode.setAttribute("align", "middle");
	var spaceHolderNode = document.getElementById("test");
	//var height = newImg.getAttribute("height");
  	document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
   	//document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;
   	setTimeout(function() {
		document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight
	}, 500);
}

function postBotAnswer(text)
{
	clearInterval(waitForBot);
	
	if (text!="") {
		var newNode = document.createElement("div");
    	newNode.setAttribute("class", "chat_message_bot");
    	var newImg = document.createElement("img");
    	newImg.src = icon_img;
    	newImg.setAttribute("width", "8%");
    	newNode.appendChild(newImg);
    	newNode.appendChild(document.createTextNode(" " + text));
    	var spaceHolderNode = document.getElementById("test");
    	document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
    	document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;

    	var audio = new Audio('https://kikijinqili.github.io/assets/cocacola/audio/Pling-KevanGC-1485374730.mp3');
		audio.play();
	}
	
	setTimeout(function() {
		document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight
	}, 1000);
}

 function postUserInput() 
{
    var newNode = document.createElement("div");
    newNode.setAttribute("class", "chat_message");
    var text = document.getElementById("user_input").value;
    
    user_input = text.toLowerCase();
    
    var valid_input = false;
    var wait_for_bot_response = false;


	if(user_name == "") {
		var input = text.split(" ");
		user_name = input[input.length-1];
		user_name = user_name.charAt(0).toUpperCase() + user_name.slice(1);


		setTimeout(function() {
			postBotAnswer("Hi " + user_name + " 😉")
		}, 1000);

		setTimeout(function() {
			waitForBot = setInterval(typingAnim, 900)
		}, 1500);


		//ask the first question
		setTimeout(function() {
			postBotAnswer(prescripted_questions[cur_question_index].text);
			prescripted_mode = 1;
		}, 7000);
	
		valid_input = true;
	
	} else {
		if(bye == 0 && bot_typing == 0) {
			wait_for_bot_response = true;
			askNextQuestion(text);
			valid_input = true;	

		} 
	}

	newNode.appendChild(document.createTextNode(text));
    var spaceHolderNode = document.getElementById("test");
    //document.getElementById("chat_box").appendChild(newNode);
    document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
    document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;
    document.getElementById("user_input").value = "";
	
}

function typingAnim()
{
	if(type_anim_on == 0) {
	type_anim_on = 1;
	var newNode = document.createElement("div");
    newNode.setAttribute("class", "chat_message_bot");
    var newImg = document.createElement("img");
    newImg.src = 'https://kikijinqili.github.io/assets/cocacola/img/julia_icon_tmp.jpg';
    newImg.setAttribute("width", "8%");
    newNode.appendChild(newImg);
    newNode.appendChild(document.createTextNode(" ..."));
    var spaceHolderNode = document.getElementById("test");
    document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
    //document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;

	// after 1 second, remove this box
	setTimeout(function() {
			document.getElementById("chat_box").removeChild(newNode)
		}, 1000);


	setTimeout(function() {
			type_anim_on = 0;
		}, 2000);


    } //end if

}

function displayBot()
{

	document.getElementById("chat_box").style.display = "block";
	document.getElementById("chat_input").style.display = "block";

	
	if(user_name == '') {
		setTimeout(function() {
		    postBotAnswer("Hi 😃 I am Julia, Coca-Cola's chatbot powered by artificial intelligence. What is your name?")
		}, 500);
	}
}



function start() 
{
    document.getElementById("chat_box").style.display = "none";
    document.getElementById("chat_input").style.display = "none";
    clearInterval(waitForBot);

    setTimeout(displayBot, 5000); // display chat box after 5 seconds

    //pre-scripted questions
    createQuestions();
}

window.addEventListener("load", start, false);