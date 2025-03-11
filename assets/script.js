const noveldata = { 
    "Characters": {
        "Dr. Y/N": {

        },

		"SCP-8182" : {
			"Stare": "assets/sprites/SCP-8182/scp8182_stare.png",
			"Annoyed": "assets/sprites/SCP-8182/scp8182_annoyed.png",
			"Cross": "assets/sprites/SCP-8182/scp8182_cross.png",
			"Embarrass": "assets/sprites/SCP-8182/scp8182_embarrass.png",
			"Sigh": "assets/sprites/SCP-8182/scp8182_sigh.png",
			"Surprise": "assets/sprites/SCP-8182/scp8182_surprise.png",
			"Nod": "assets/sprites/SCP-8182/scp8182_nod.png"
		},

		"D-8182" : {
			"Happy": "assets/sprites/D-8182/d8182_smile.png",
			"Trouble": "assets/sprites/D-8182/d8182_trouble.png",
			"Smile": "assets/sprites/D-8182/d8182_smile.png",
			"RWorry": "assets/sprites/D-8182/d8182_rightworry.png",
			"Shock": "assets/sprites/D-8182/d8182_shock.png",
			"Annoyed": "assets/sprites/D-8182/d8182_annoyed.png",
			"Dismiss": "assets/sprites/D-8182/d8182_dismiss.png",
			"Beam": "assets/sprites/D-8182/d8182_beam.png"
		},

		"???" : {
			"One": "assets/sprites/SCP-6539/scp6539_1.png",
			"Two": "assets/sprites/SCP-6539/scp6539_2.png"
		},

		"Sister?" : {
			"One": "assets/sprites/SCP-6539/scp6539_1.png",
			"Two": "assets/sprites/SCP-6539/scp6539_2.png"
		},

		"Dr. Parker" : {
			"Nod": "assets/sprites/Parker/drparker_nod.png",
			"Relieved": "assets/sprites/Parker/drparker_relieved.png",
			"Sad": "assets/sprites/Parker/drparker_sad.png",
			"Smile": "assets/sprites/Parker/drparker_smile.png"
		},

		"SCP-4092" : {
			"Stare": "assets/sprites/SCP-4092/scp4092_stare.png"
		}

    },
    
    "Scene1": {
    	"Background": "assets/backgrounds/hallway_1.png",
    	"PAGES": {
			"Page0" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Another day, another shift at the foundation."
			},

			"Page1" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "The Site Director gave me the green light to upgrade to B-Class, meaning I have new tasks to do."
			},

			"Page2" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I almost forgot I even submitted that request."
			},

			"Page3" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "..."
			},

			"Page4" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "What do I have to do again today...?",
				"Choices":
				{
					"Go to your desk": {
						"NextPage": "Page5",
						"Score": 4
					},
					"Leave the laboratory": {
						"NextPage": "Page9",
						"Score": -10
					}
				}
			},

			"Page5" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I should probably get my stuff ready."
			},

            "Page6" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Okay, now..."
			},

			"Page7" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Where was my office again?"
			},

			"Page8" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I believe it was on the right.",
				"NextPage": "Scene3"
			},

			"Page9" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "..."
			},

			"Page10" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "....."
			},

			"Page11" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Actually."
			},

			"Page12" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I wanna go home."
			},

			"Page13" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "..."
			},

			"Page14" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Yeah. I'll just..."
			},

			"Page15" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Leave.",
				"NextPage" : "End_Home"
			}
		}
    },

	"End_Home": {
    	"Background": "assets/backgrounds/home.png",
    	"PAGES": {
			"Page0" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "After coming home, you laid in bed and fell asleep for a really REALLY long time."
			},

			"Page1" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "You woke up the next day to find a letter on your doorstep."
			},

			"Page2" : {
				"Character": "Letter",
				"Sprite": " ",
				"StoryText": "Dr. Y/N, you have been dismissed from the SCP Foundation. You have one day to gather your belongings, and after that, you will never come back to Site-28"
			},

			"Page3" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Oh."
			},

			"Page4" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Well."
			},

			"Page5" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I guess I have no job."
			},

			"Page6" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "Ending 0: Leave."
			}
		}
    },

	"Scene3": {
    	"Background": "assets/backgrounds/office.png",
    	"PAGES": {
			"Page0" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Oh, yeah, here."
			},

			"Page1" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Let's see...",
				"NextPage": "PNC_Desk"
			}
		}
    },

	"PNC_Desk": {
    	"Background": "assets/backgrounds/pnc_desk.png",
    	"PAGES": {
			"Page0" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Gotta get my stuff..."
			},

			"Page1" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I need my lab coat, files, glasses, and pen." 
			},

			"Page2" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Alright. I think I got everything."
			},

			"Page3" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I need to get to SCP-8182 for their interview.",
				"NextPage": "Scene4"
			}
		}
    },

	"Scene4": {
    	"Background": "assets/backgrounds/interrogation_2.png",
    	"PAGES": {
			"Page0" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Ahem."
			},

			"Page1" : {
				"Character": "SCP-8182",
				"Sprite": "Stare",
				"StoryText": "..."
			},

			"Page2" : {
				"Character": "D-8182",
				"Sprite": "Trouble",
				"StoryText": "So..."
			},

			"Page3" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Sorry. I had to turn on the recorder."
			},

			"Page4" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Let's begin."
			},

			"Page5" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Please identify yourselves."
			},

			"Page6" : {
				"Character": "SCP-8182",
				"Sprite": "Sigh",
				"StoryText": "..."
			},

			"Page7" : {
				"Character": "D-8182",
				"Sprite": "RWorry",
				"StoryText": "Uhm..."
			},

			"Page8" : {
				"Character": "D-8182",
				"Sprite": "Smile",
				"StoryText": "I'm Saki, or D-8182 as you call me."
			},

			"Page9" : {
				"Character": "D-8182",
				"Sprite": "Smile",
				"StoryText": "And his name, other than SCP-8182, is Shiho."
			},

			"Page10" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Before we begin, are there any comments you'd like to say?"
			},

			"Page11" : {
				"Character": "SCP-8182",
				"Sprite": "Stare",
				"StoryText": "..."
			},

			"Page12" : {
				"Character": "D-8182",
				"Sprite": "RWorry",
				"StoryText": "..."
			},

			"Page13" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I'll take that as a no."
			},

			"Page14" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Anyway, onto our first question.",
				"Choices": 
				{
					"How do you two know each other?": {
						"NextPage": "Page18",
						"Score": 3
					},
					"When did you first start seeing him?": {
						"NextPage": "Page15",
						"Score": -3
					}
				}
			},

			"Page15" : {
				"Character": "D-8182",
				"Sprite": "Shock",
				"StoryText": "Excuse me?"
			},

			"Page16" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Sorry, when did you two meet?"
			},

			"Page17" : {
				"Character": "SCP-8182",
				"Sprite": "Cross",
				"StoryText": "..."
			},

			"Page18" : {
				"Character": "SCP-8182",
				"Sprite": "Sigh",
				"StoryText": "I mean, we've been friends since childhood.",
				"Score": 5
			},

			"Page19" : {
				"Character": "SCP-8182",
				"Sprite": "Stare",
				"StoryText": "I think I was... six and you were..."
			},

			"Page20" : {
				"Character": "D-8182",
				"Sprite": "Happy",
				"StoryText": "Nine."
			},

			"Page21" : {
				"Character": "SCP-8182",
				"Sprite": "Nod",
				"StoryText": "Yeah yeah, so it's been a while"
			},

			"Page22" : {
				"Character": "D-8182",
				"Sprite": "Smile",
				"StoryText": "So it's been 13 years since then?"
			},
			
			"Page23" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I believe so.",
				"Choices":
				{
					"How have you both stayed together for that long?": {
						"NextPage": "Page28",
						"Score": 3
					},
					"How did you haunt someone for that long?": {
						"NextPage": "Page24",
						"Score": -5
					}
				}
			},
			
			"Page24" : {
				"Character": "SCP-8182",
				"Sprite": "Surprise",
				"StoryText": "...?"
			},
			
			"Page25" : {
				"Character": "D-8182",
				"Sprite": "Shock",
				"StoryText": "..."
			},
			
			"Page26" : {
				"Character": "D-8182",
				"Sprite": "Annoyed",
				"StoryText": "Very politely, sir. I would like to ask you to shut up."
			},
			
			"Page27" : {
				"Character": "D-8182",
				"Sprite": "Dismiss",
				"StoryText": "Ahem."
			},
			
			"Page28" : {
				"Character": "D-8182",
				"Sprite": "Happy",
				"StoryText": "I guess by being friendly and making good decisions"
			},
			
			"Page29" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Alright. Last question.",
				"Choices":
				{
					"What do you feel about the fact that others cant see him?": {
						"NextPage": "Page30",
						"Score": 3
					},
					"Have you taken any pills recently?": {
						"NextPage": "Page34",
						"Score": -5
					}
				}
			},
			
			"Page30" : {
				"Character": "D-8182",
				"Sprite": "Beam",
				"StoryText": "Generally it’s ok, it’s just tying dealing with the things he pulls."
			},
			
			"Page31" : {
				"Character": "SCP-8182",
				"Sprite": "Embarrass",
				"StoryText": "It would be worse if others could see me."
			},
			
			"Page32" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I suppose he's right."
			},
			
			"Page33" : {
				"Character": "D-8182",
				"Sprite": "Trouble",
				"StoryText": "Ahah... yeah, he's right.",
				"NextPage": "Page37"
			},
			
			"Page34" : {
				"Character": "SCP-8182",
				"Sprite": "Surprise",
				"StoryText": "..."
			},
			
			"Page35" : {
				"Character": "D-8182",
				"Sprite": "Annoyed",
				"StoryText": "Can we leave?"
			},
			
			"Page36" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "...Fine"
			},
			
			"Page37" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Recording's stopped. You're both dismissed."
			},
			
			"Page38" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Thank you for your time, the team outside will escort you out—"
			},
			
			"Page39" : {
				"Character": "Alert Announcement",
				"Sprite": " ",
				"StoryText": "Containment Breach Alert. An anomaly has escaped containment. Do not panic and continue on your jobs. Please be wary of the Rapid Response Team and the escaped anomaly."
			},
			
			"Page40" : {
				"Character": "D-8182",
				"Sprite": "Shock",
				"StoryText": "!?"
			},
			
			"Page41" : {
				"Character": "SCP-8182",
				"Sprite": "Surprise",
				"StoryText": "..."
			},
			
			"Page42" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "You two, get back to your containment. Now."
			},
			
			"Page43" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "SCP-8182 and D-8182 walk out of the room, following the Security Personnel, most likely back to their containment cells."
			},
			
			"Page44" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Agh. Great. I have to keep working?!",
				"NextPage": "Scene5"
			}
		}
    },

	"Scene5": {
    	"Background": "assets/backgrounds/pnc_closet.png",
    	"PAGES": {
			"Page0" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Ahem."
			},

			"Page1" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I gotta check up on the stuff."
			},
			
			"Page2" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Uhm..."
			},
			
			"Page3" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Wait... This looks different?"
			},
			
			"Page4" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Nevermind that. I need to pick up a few things."
			},

			"Page5" : {
				"Character": "???",
				"Sprite": "One",
				"StoryText": "..."
			},
			
			"Page6" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "What—?",
				"Choices": 
				{
					"Walk closer": {
						"NextPage": "Page7",
						"Score": -5
					},
					"Get out": {
						"NextPage": "Page11",
						"Score": 3
					}
				}
			},

			"Page7" : {
				"Character": "???",
				"Sprite": "One",
				"StoryText": "..."
			},

			"Page8" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Sis?"
			},

			"Page9" : {
				"Character": "Sister?",
				"Sprite": "Two",
				"StoryText": "..."
			},

			"Page10" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "!",
				"NextPage": "End_6539"
			},

			"Page11" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Oh, hell nah..."
			},

			"Page12" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I'm seeing things, I swear!",
				"NextPage": "Scene6"
			}
		}
	},

	"End_6539": {
    	"Background": " ",
    	"PAGES": {
			"Page0" : {
				"Character": "LOG REPORT",
				"Sprite": " ",
				"StoryText": "While on the search for SCP-6539, a Rapid Response Team member had found Dr. Y/N in the South East anomaly closet in Sector-2."
			},

			"Page1" : {
				"Character": "LOG REPORT",
				"Sprite": " ",
				"StoryText": "Dr. Y/N was found already passed by the time the RRT officer walked in, and not too far from him was SCP-6539."
			},

			"Page2" : {
				"Character": "LOG REPORT",
				"Sprite": " ",
				"StoryText": "It was unfortunate news, but it proved that Dr. Y/N must've had some sort of reaction that caused him to collapse."
			},

			"Page3" : {
				"Character": "LOG REPORT",
				"Sprite": " ",
				"StoryText": "Medical personnel suspect of a heart attack from shock as there were no physical (and visible) injuries on Dr. Y/N."
			},

			"Page4" : {
				"Character": "LOG REPORT",
				"Sprite": " ",
				"StoryText": "Let this be a lesson to properly contain SCP-6539."
			},

			"Page5" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "Ending 1: Next of Kin."
			}
		}
	},

	"Scene6": {
    	"Background": "assets/backgrounds/hall_cb.png",
    	"PAGES": {
			"Page0" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Geh..."
			},

			"Page1" : {
				"Character": "Dr. Parker",
				"Sprite": "Nod",
				"StoryText": "Dr. Y/N!"
			},

			"Page2" : {
				"Character": "Dr. Parker",
				"Sprite": "Relieved",
				"StoryText": "There you are."
			},

			"Page3" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Dr. Parker, what's up?"
			},

			"Page4" : {
				"Character": "Dr. Parker",
				"Sprite": "Nod",
				"StoryText": "I need your help with watching over SCP-4092..."
			},

			"Page5" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Really?"
			},

			"Page6" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Oh, man... I don't like that one."
			},

			"Page7" : {
				"Character": "Dr. Parker",
				"Sprite": "Sad",
				"StoryText": "Sorry, I know, but something came up.",
				"Choices": 
				{
					"No, it's fine." : {
						"NextPage": "Page8",
						"Score": 5
					},
					"I'm kinda busy." : {
						"NextPage": "Page11",
						"Score": -3
					}
				}
			},

			"Page8" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "No, it's fine. I'll just head there right now."
			},

			"Page9" : {
				"Character": "Dr. Parker",
				"Sprite": "Smile",
				"StoryText": "Oh, thank you, Dr. Y/N."
			},

			"Page10" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Hey, it's no problem.",
				"NextPage": "Scene8"
			},

			"Page11" : {
				"Character": "Dr. Parker",
				"Sprite": "Sad",
				"StoryText": "Oh, well that's fine... It's okay. Sorry for wasting your time."
			},

			"Page12" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Bye, Dr. Parker!",
				"NextPage": "Scene7"
			}
		}
	},

	"Scene7": {
    	"Background": "assets/backgrounds/office_cb.png",
    	"PAGES": {
			"Page0" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I think... Wait—"
			},

			"Page1" : {
				"Character": "Rapid Response",
				"Sprite": " ",
				"StoryText": "Dr. Y/N. They're initiating an evacuation, stat. Get out."
			},

			"Page2" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "W-Wha?",
				"Choices": 
				{
					"Evacuate": {
						"NextPage": "Page6",
						"Score": 4
					},
					"Stay": {
						"NextPage": "Page3",
						"Score": 5
					}
				}
			},

			"Page3" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I'll head out in a bit— Go help other people."
			},

			"Page4" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "The Rapid Response Team gave a two-fingered salute before running off into another direction."
			},
			
			"Page5" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Okay, whatever, gotta finish up this report.",
				"NextPage": "End_Stay"
			},

			"Page6" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Lead the way.",
				"NextPage": "End_Evacuate"
			}
			
		}
	},

	"End_Evacuate": {
    	"Background": "assets/backgrounds/sector_3.png",
    	"PAGES": {
			"Page0" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "Dr. Y/N decided to be smart and head off to evacuate as the Rapid Response Team told him to."
			},

			"Page1" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "After a while of waiting behind the safety of the closed doors,"
			},
			
			"Page2" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "There was an alert telling them they were able to get back to the lab."
			},
			
			"Page3" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Great. What even was the point of telling us we didn't need to evacuate earlier if we still did now..."
			},
			
			"Page4" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Whatever."
			},
			
			"Page5" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I'm done anyway."
			},

			"Page6" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "Ending 2: Evacuation."
			}
		}
	},

	"Scene8": {
    	"Background": "assets/backgrounds/containment_2.png",
    	"PAGES": {
			"Page0" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Finally made it."
			},

			"Page1" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "This should be the last thing I have to do."
			},

			"Page2" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "So..."
			},

			"Page3" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "\"SCP-4092, Euclid Class.\""
			},

			"Page4" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "\"Appearance: Middle-aged white man...\""
			},

			"Page5" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "..."
			},

			"Page6" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I'm not gonna read the rest."
			},

			"Page7" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Let's see here..."
			},

			"Page8" : {
				"Character": "SCP-4092",
				"Sprite": " ",
				"StoryText": "..."
			},

			"Page9" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I just gotta watch this guy?"
			},

			"Page10" : {
				"Character": "SCP-4092",
				"Sprite": " ",
				"StoryText": "..."
			},

			"Page11" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Easy enough."
			},

			"Page12" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "..."
			},

			"Page13" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I probably should take notes."
			},

			"Page14" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "\"It seems to be sentient, but it isn't doing much other than standing in the middle of it's containment cell.\""
			},

			"Page15" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "..."
			},

			"Page16" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Why do I feel like something's watching me?",
				"Choices":
				{
					"Look up": {
						"NextPage": "Page17",
						"Score": -5
					},
					"Continue writing": {
						"NextPage": "Page24",
						"Score": 3
					}
				}
			},

			"Page17" : {
				"Character": "SCP-4092",
				"Sprite": "Stare",
				"StoryText": "..."
			},

			"Page18" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "...!"
			},

			"Page19" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "What the...",
				"Choices": 
				{
					"Stare back": {
						"NextPage": "Page20",
						"Score": -3
					},
					"Look away": {
						"NextPage": "Page23",
						"Score": 5
					}
				}
			},

			"Page20" : {
				"Character": "SCP-4092",
				"Sprite": "Stare",
				"StoryText": "...",
				"Choices": 
				{
					"Keep staring": {
						"NextPage": "Page21",
						"Score": -3
					},
					"Look away": {
						"NextPage": "Page23",
						"Score": 6
					}
				}
			},

			"Page21" : {
				"Character": "SCP-4092",
				"Sprite": "Stare",
				"StoryText": "...",
				"Choices":
				{
					"Keep staring": {
						"NextPage": "Page22",
						"Score": -5
					},
					"Continue staring": {
						"NextPage": "Page22",
						"Score": -5
					}
				}
			},

			"Page22" : {
				"Character": "SCP-4092",
				"Sprite": "Stare",
				"StoryText": "Y/N...",
				"Choices":
				{
					"KEEP STARING": {
						"NextPage": "Page27",
						"Score": -5
					},
					"LOOK AWAY LOOK AWAY LOOK AWAY": {
						"NextPage": "Page23",
						"Score": -3
					}
				}
			},
			
			"Page23" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Oh good heavens above— No."
			},
			
			"Page24" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "Alright."
			},
			
			"Page25" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I'm done."
			},
			
			"Page26" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I'm out of here.",
				"NextPage": "Scene9"
			},

			"Page27" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "...!",
				"NextPage": "End_4092"
			}
		}
	},

	"End_4092": {
		"Background": "assets/backgrounds/interrogation_2.png",
    	"PAGES": {
			"Page0" : {
				"Character": "Dr. Parker",
				"Sprite": "Sad",
				"StoryText": "What did you see?"
			},

			"Page1" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "..."
			},

			"Page2" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "I..."
			},

			"Page3" : {
				"Character": "SCP-4092",
				"Sprite": "Stare",
				"StoryText": "..."
			},

			"Page4" : {
				"Character": "Dr. Y/N",
				"Sprite": " ",
				"StoryText": "...!"
			},

			"Page5" : {
				"Character": "Dr. Y/N",
				"Sprite": "Sad",
				"StoryText": "S-So much..."
			},

			"Page6" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "Ending 3: Insanity."
			}
		}
	},

	"Scene9": {
    	"Background": " ",
    	"PAGES": {
			"Page0" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "A letter had arrived at your door."
			},
			
			"Page1" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "It was sent by the facility and had the Site Director's signature on it."
			},
			
			"Page2" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "Wonder what's up?",
				"ScoreCheck": 
				{
					"Threshold": 12,
					"Above": "Page3",
					"Below": "Page6"
				}
			},
			
			"Page3" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "Upon opening, you found out you got promoted!"
			},
			
			"Page4" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "The Site Director congratulated you and next shift, you celebrated by having a toast with your co-workers during a break."
			},
			
			"Page5" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "Ending 4: Promotion.",
				"NextPage": "Page5"
			},
			
			"Page6" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "Upon opening, you found out they're going to dismiss you!"
			},
			
			"Page7" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "(Or in normal terms, fire you.)"
			},
			
			"Page8" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "You were absolutely saddened by this news."
			},
			
			"Page9" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "You swear you did your work yesterday..."
			},
			
			"Page10" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "Guess it's too late now though..."
			},
			
			"Page11" : {
				"Character": " ",
				"Sprite": " ",
				"StoryText": "Ending 5: Dismissed.",
				"NextPage": "Page11"
			}
		}
	}
};

function insertHTML() {
	return `
    	<div id="storybox">
        	<div id="spritebox" class="align-left">
            	<img src="">
        	</div>
        	<div id="dialogbox">
            	<div id="namebox">
                	<span> </span>
	            </div>
    	        <div id="textbox">
        	        <p> </p>
            	    <div id="choicebox"></div>
            	</div>
        	</div>
    	</div>
    `
}

const htmlData = insertHTML();
document.getElementById("visualnovel").insertAdjacentHTML("beforebegin", insertHTML());

const $storybox = document.querySelector("#storybox");
const $textbox = document.querySelector("#textbox p");
const $choicebox = document.querySelector("#choicebox");
const $namebox = document.querySelector("#namebox span");
const $spritebox = document.querySelector("#spritebox img");
const $scoreDisplay = document.querySelector("#scoreDisplay"); // Added score display element

let pageNum = 0;
let currentScene = "Scene1";
let currentPage = Object.keys(noveldata[currentScene].PAGES)[pageNum];
let playerScore = 0;

function initialize() {
    $spritebox.src = "";
    $namebox.innerText = "";
    $textbox.innerText = "";

    let pageData = noveldata[currentScene].PAGES[currentPage];

	checkScoreData(pageData);

    $namebox.innerText = pageData.Character || "Unknown";
    $spritebox.src = noveldata.Characters[pageData.Character]?.[pageData.Sprite] || "";
    $textbox.innerHTML = pageData.StoryText || "";
    $storybox.style.backgroundImage = `url(${noveldata[currentScene].Background})`;

    handleChoices();
}

function handleChoices() {
    $choicebox.innerHTML = "";

    let pageData = noveldata[currentScene].PAGES[currentPage];

    console.log("Choices found:", pageData.Choices);

    Object.keys(pageData.Choices).forEach(choiceText => {
        const row = document.createElement("div");
        row.innerText = choiceText;
        row.classList.add("choice-option");

        row.addEventListener("click", () => {
            console.log("Choice clicked:", choiceText);

            let choiceData = pageData.Choices[choiceText];

            if (choiceData.Score !== undefined) {
                playerScore += choiceData.Score;
                console.log("Updated Score:", playerScore);
            }

            currentPage = choiceData.NextPage;
            pageNum = Object.keys(noveldata[currentScene].PAGES).indexOf(currentPage);

            if (currentPage === "End") {
                endGame();
                return;
            }

            initialize();
        });

        $choicebox.appendChild(row);
    });

    console.log("Choicebox after update:", $choicebox.innerHTML);
}

function checkPage() {
    let pageData = noveldata[currentScene].PAGES[currentPage];

    if (pageData.hasOwnProperty("Choices")) {
        return false;
    }

    if (pageData.hasOwnProperty("NextPage")) {
        if (pageData.NextPage === "End") {
            endGame();
            return false;
        }
    }

    return true;
}

function checkScoreData(pageData) {
    if (pageData.ScoreCheck) {
        let { Threshold, Above, Below } = pageData.ScoreCheck;

        if (playerScore >= Threshold) {
            currentPage = Above;
        }
		else {
            currentPage = Below;
        }

        initialize();
    }
}

function endGame() {
    $textbox.innerText = "Thanks for playing! Your final score was: " + playerScore;
    window.location.href = "index.html";
}

function resetStory() {
    pageNum = 0;
    currentPage = "Page0";
    currentScene = "Scene1";
    playerScore = 0;

    initialize();
    handleChoices();
}

function continueStory() {
    let pageData = noveldata[currentScene].PAGES[currentPage];

    if (pageData.Choices) {
        return;
    }

    if (pageData.NextPage) {
        if (noveldata[pageData.NextPage]) {
            currentScene = pageData.NextPage;
            currentPage = Object.keys(noveldata[currentScene].PAGES)[0];
        } else {
            currentPage = pageData.NextPage;
        }
    } else {
        let keys = Object.keys(noveldata[currentScene].PAGES);
        let index = keys.indexOf(currentPage);

        if (index + 1 < keys.length) {
            currentPage = keys[index + 1];
        }
    }

    initialize();
}

initialize();
handleChoices();
