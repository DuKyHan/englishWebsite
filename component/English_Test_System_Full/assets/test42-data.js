const TEST = {
  id: "test42",
  grade: "Grade 7 — Global Success",
  unit: "Unit 3: Community service",
  title: "Grade 7 · Unit 3: Community service · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test42.html",
  instructions: [
    "Bài kiểm tra gồm 40 câu, chia thành 7 phần (I → VII), tổng 10 điểm.",
    "Bấm chọn đáp án A/B/C/D cho câu trắc nghiệm, hoặc gõ câu trả lời vào ô trống cho câu điền từ / viết lại câu.",
    "Em có thể dùng nút Previous / Next hoặc bấm số câu ở bảng điều hướng để di chuyển giữa các câu.",
    "Khi hết giờ, bài làm sẽ tự động được nộp.",
    "Sau khi nộp bài, em sẽ thấy điểm số, đáp án đúng và giải thích chi tiết cho từng câu."
  ],
  sections: [
    { id: "I", title: "Choose the word / phrase / sentence (A, B, C or D) that best fits the space or best answers the question given in each sentence.", points: "3.5 pts", range: [1, 14] },
    { id: "II", title: "Look at the sign or the notice. Choose the best answer (A, B, C or D).", points: "0.5 pt", range: [15, 16] },
    { id: "III", title: "Choose the word (A, B, C or D) that best fits each space in the following passage.", points: "1.5 pts", range: [17, 22] },
    { id: "IV", title: "Read the passage. Decide True/False (23–26) and choose the best answer (27–28).", points: "1.5 pts", range: [23, 28] },
    { id: "V", title: "Use the correct form of the word given in each sentence.", points: "1.5 pts", range: [29, 34] },
    { id: "VI", title: "Look at the dictionary entry of “service”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    americaVolunteerCloze: "It's not uncommon in America for a person to (17) ________ to some kind of volunteer group. Donating one's time and services is very much a part of the American way of life. Most charitable activities are organized by churches and groups around the nation and (18) ________ encouraged by the government. The helping hand is (19) ________ to the poor, the homeless and the disabled. Some people work to teach youngsters how to read, (20) ________ open up soup kitchens to feed the homeless. Volunteers also take care of the (21) ________ by making reading tapes for the blind and working in orphanages to help children (22) ________ parents.",
    goodPeopleReading: "Each country has many good people who take care of others. For example, some of students in the United States often spend many hours as volunteers in hospitals, orphanages or homes for the elderly. They read books to the people in these places, or they just visit them and play games with them or listen to their problems. Other young volunteers go and work in the homes of people who are sick or old. They paint, clean up, or repair their houses, do the shopping. For boys who don't have fathers, there is an organization called Big Brothers. College students and other men take these boys to basketball games or on fishing trips and help them to get to know things those boys usually learn from their fathers. Each city has a number of clubs where boys and girls can go and play games. Some of these clubs show movies or hold short trips to the mountains, the beaches, museums, or other places of interest. Most of these clubs use a lot of students as volunteers because they are young enough to understand the problems of younger boys and girls.",
    serviceEntry: {
      word: "service", ipa: "/ˈsɜːrvɪs/", pos: "noun",
      def: "1. [countable] a system that provides something that the public needs, organized by the government or a private company. 2. [countable, uncountable] a business whose work involves doing something for customers; the work that such a business does.",
      examples: [
        "The ambulance <b>service</b> arrived at the scene within five minutes.",
        "The government aims to improve <b>public services</b>, especially education.",
        "The bus <b>service</b> runs every ten minutes.",
        "We aim to <b>provide a service</b> that is of high quality.",
        "This local restaurant is famous for its excellent service.",
        "The bank offers a broad range of <b>financial services</b>."
      ]
    }
  },
  images: {
    signNoOvernightParking: "assets/images/sign_no_overnight_parking.jpg",
    noticeSilencePhones: "assets/images/notice_silence_phones.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "tutor", B: "student", C: "university", D: "discuss" },
      correct: "D",
      explanation: "Phần gạch chân là chữ cái \"u\". \"tutor\" /ˈtuːtər/, \"student\" /ˈstuːdnt/, \"university\" /ˌjuːnɪˈvɜːrsəti/ đều có \"u\" phát âm là <b>/uː/ hoặc /juː/</b>. Riêng \"discuss\" /dɪˈskʌs/ có \"u\" phát âm là <b>/ʌ/</b> → khác biệt, đáp án D."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "finished", B: "amazed", C: "raised", D: "pleased" },
      correct: "A",
      explanation: "Phần gạch chân là \"-ed\". \"amazed\" /əˈmeɪzd/, \"raised\" /reɪzd/, \"pleased\" /pliːzd/ đều có \"-ed\" phát âm là <b>/d/</b>. Riêng \"finished\" /ˈfɪnɪʃt/ có \"-ed\" phát âm là <b>/t/</b> → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "different", B: "personal", C: "popular", D: "electric" },
      correct: "D",
      explanation: "\"different\" /ˈdɪfrənt/, \"personal\" /ˈpɜːrsənl/, \"popular\" /ˈpɒpjələr/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"electric\" /ɪˈlektrɪk/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "plastic", B: "bottle", C: "playground", D: "exchange" },
      correct: "D",
      explanation: "\"plastic\" /ˈplæstɪk/, \"bottle\" /ˈbɒtl/, \"playground\" /ˈpleɪɡraʊnd/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"exchange\" /ɪksˈtʃeɪndʒ/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"Did your mother go to the office today?\"",
      prompt: "Anna: \"No, my mother __________ to work this morning.\"",
      display: { A: "wasn't go", B: "doesn't go", C: "didn't go", D: "not went" },
      correct: "C",
      explanation: "Câu phủ định ở thì quá khứ đơn (\"this morning\" đã qua) cần \"didn't + V nguyên thể\". <b>didn't go</b>."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Jane: \"I want to help people around our neighborhood.\"",
      prompt: "Mark: \"You should think of __________ the volunteer activities in your community.\"",
      display: { A: "taking part in", B: "taking in", C: "participating", D: "making" },
      correct: "A",
      explanation: "\"<b>take part in</b> + N\" (tham gia vào) là cụm cố định, phù hợp sau \"think of + V-ing\"."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Luke: \"Why do you love doing volunteer work so much?\"",
      prompt: "Mia: \"Volunteering is special __________ me because I can help others.\"",
      display: { A: "with", B: "at", C: "for", D: "to" },
      correct: "D",
      explanation: "\"special <b>to</b> sb\" (đặc biệt/có ý nghĩa đối với ai) là cụm cố định."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Nam: \"What does your charity group usually do?\"",
      prompt: "Long: \"We sometimes raise money to help people in __________.\"",
      display: { A: "need", B: "needy", C: "necessity", D: "necessary" },
      correct: "A",
      explanation: "\"people in <b>need</b>\" (những người gặp khó khăn, cần giúp đỡ) là cụm cố định."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Teacher: \"What can we get from doing community service?\"",
      prompt: "Student: \"If we volunteer, we can gain __________ experience and skills.\"",
      display: { A: "invalid", B: "valuable", C: "value", D: "valuably" },
      correct: "B",
      explanation: "Cần tính từ trước \"experience\". <b>valuable</b> (adj) = quý giá, có giá trị."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Mary: \"Did the students visit the grandpas and grandmas last week?\"",
      prompt: "Ben: \"Yes. They __________ old people in the nursing home two days ago.\"",
      display: { A: "was help", B: "were helped", C: "helped", D: "helpped" },
      correct: "C",
      explanation: "Câu chủ động ở thì quá khứ đơn, chủ ngữ \"They\" thực hiện hành động \"help\". <b>helped</b> (quá khứ đơn, chủ động)."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Hoa: \"Why are the teenagers gathering on the street?\"",
      prompt: "Minh: \"They have decided to clean up the neighborhood __________ it is full of rubbish.\"",
      display: { A: "because", B: "so", C: "but", D: "although" },
      correct: "A",
      explanation: "\"<b>because</b>\" giới thiệu lý do (khu phố đầy rác → cần dọn dẹp)."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Peter: \"Do you help street children?\"",
      prompt: "Jack: \"__________\"",
      display: { A: "No, I think they should help themselves.", B: "I ignore them because they are not my problem.", C: "Yes, I give them support, food, and clothes.", D: "I tell them to go away from the street." },
      correct: "C",
      explanation: "\"<b>Yes, I give them support, food, and clothes.</b>\" là câu trả lời khẳng định và phù hợp nhất với câu hỏi \"Do you help street children?\"."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Tom: \"I'm joining a community clean-up on Saturday. We're cleaning the park near my house.\"",
      prompt: "Anna: \"That sounds great! I've never done that before. Can I join too?\" Tom: \"Of course! We start at 8 a.m. Just bring gloves and a trash bag.\" Anna: \"__________\"",
      display: { A: "Oh no! That's too early.", B: "Yes, I'd love to.", C: "Ok. I want to help. It's important to keep our neighborhood clean.", D: "No, I don't have gloves and a trash bag." },
      correct: "C",
      explanation: "\"<b>Ok. I want to help. It's important to keep our neighborhood clean.</b>\" là phản hồi tự nhiên và tích cực nhất, thể hiện sự đồng ý tham gia dọn dẹp."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Laura: \"I think doing community service only wastes our time.\"",
      prompt: "Chris: \"__________. There are many benefits of participating in community service.\"",
      display: { A: "I agree with you", B: "That's a great idea", C: "I don't think so", D: "You are absolutely right" },
      correct: "C",
      explanation: "\"<b>I don't think so</b>\" thể hiện sự không đồng ý với ý kiến của Laura, phù hợp với câu tiếp theo nêu ra lợi ích của công tác cộng đồng."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoOvernightParking",
      prompt: "What does this sign tell you?",
      display: {
        A: "You must park your car here before dark.",
        B: "Overnight parking here is free for everyone.",
        C: "Only employees can park here all night.",
        D: "Overnight parking is not allowed here."
      },
      correct: "D",
      explanation: "Biển \"NOTICE: NO OVERNIGHT PARKING\" nghĩa là cấm đỗ xe qua đêm tại đây → \"<b>Overnight parking is not allowed here.</b>\", đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "noticeSilencePhones",
      prompt: "What should you do according to this notice in the cinema?",
      display: {
        A: "Keep your phone ringtone as loud as possible.",
        B: "Use your phone to call friends during the movie.",
        C: "Leave your mobile phone at home.",
        D: "Turn off your phone while the movie is playing."
      },
      correct: "D",
      explanation: "Thông báo \"SILENCE: PLEASE TURN OFF YOUR MOBILE PHONES\" nghĩa là phải tắt điện thoại khi xem phim → \"<b>Turn off your phone while the movie is playing.</b>\", đáp án D."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "americaVolunteerCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "enter", B: "participate", C: "join", D: "belong" },
      correct: "D",
      explanation: "\"<b>belong</b> to some kind of volunteer group\" (thuộc về, là thành viên của) là cụm cố định với giới từ \"to\"."
    },
    { id: 18, section: "III", type: "mcq", passage: "americaVolunteerCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "even", B: "just", C: "ever", D: "already" },
      correct: "A",
      explanation: "\"<b>even</b> encouraged by the government\" nhấn mạnh mức độ (thậm chí còn được chính phủ khuyến khích)."
    },
    { id: 19, section: "III", type: "mcq", passage: "americaVolunteerCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "expanded", B: "given", C: "opened", D: "extended" },
      correct: "D",
      explanation: "\"the helping hand is <b>extended</b> to the poor\" (bàn tay giúp đỡ được chìa ra/mở rộng tới người nghèo) là cách diễn đạt phù hợp."
    },
    { id: 20, section: "III", type: "mcq", passage: "americaVolunteerCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "others", B: "the other", C: "other", D: "another" },
      correct: "A",
      explanation: "\"<b>others</b>\" (đại từ, những người khác) đứng độc lập làm chủ ngữ cho vế câu thứ hai."
    },
    { id: 21, section: "III", type: "mcq", passage: "americaVolunteerCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "blind", B: "poor", C: "disabled", D: "injured" },
      correct: "C",
      explanation: "\"take care of the <b>disabled</b>\" (người khuyết tật) phù hợp với ngữ cảnh chung, đi kèm với việc chăm sóc người mù và trẻ mồ côi ở câu sau."
    },
    { id: 22, section: "III", type: "mcq", passage: "americaVolunteerCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "against", B: "besides", C: "without", D: "except" },
      correct: "C",
      explanation: "\"children <b>without</b> parents\" (trẻ em không có cha mẹ) — \"without\" nghĩa là không có."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "goodPeopleReading",
      prompt: "Students in the United States volunteer in places like orphanages and nursing homes.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"students in the United States often spend many hours as volunteers in hospitals, orphanages or homes for the elderly.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "goodPeopleReading",
      prompt: "Volunteers only help the elderly by reading books and never do manual work like cleaning.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"They paint, clean up, or repair their houses, do the shopping.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "goodPeopleReading",
      prompt: "The \"Big Brothers\" organization is designed to support boys who do not have fathers.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"For boys who don't have fathers, there is an organization called Big Brothers.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "goodPeopleReading",
      prompt: "Most youth clubs prefer not to use student volunteers because they are too young.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Most of these clubs use a lot of students as volunteers because they are young enough to understand the problems of younger boys and girls.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "goodPeopleReading",
      prompt: "What do volunteers in the \"Big Brothers\" organization do for the boys?",
      display: { A: "They take the boys to sports games or fishing trips.", B: "They give the boys money to buy school supplies.", C: "They teach the boys how to paint and repair houses professionally.", D: "They stay at the boys' houses and do the shopping for them." },
      correct: "A",
      explanation: "Bài đọc: \"College students and other men take these boys to basketball games or on fishing trips.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "goodPeopleReading",
      prompt: "Why do many clubs for children use student volunteers?",
      display: { A: "Because their age helps them understand the problems of younger children.", B: "Because students have more free time than older people.", C: "Because students are the only ones who know how to play basketball.", D: "Because students are required by their colleges to work in these clubs." },
      correct: "A",
      explanation: "Bài đọc: \"they are young enough to understand the problems of younger boys and girls.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Many teenagers love joining _____________ activities during the summer break.",
      wordGiven: "VOLUNTEER", accepted: ["voluntary"], correct: "voluntary",
      explanation: "Cần tính từ trước \"activities\". <b>volunteer</b> (n) → <b>voluntary</b> (adj, tự nguyện)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The local youth club organized a successful neighborhood _____________ last Sunday.",
      wordGiven: "CLEAN", accepted: ["clean-up"], correct: "clean-up",
      explanation: "Cần danh từ ghép sau \"neighborhood\". <b>clean</b> (v) → <b>clean-up</b> (n, việc dọn dẹp)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The students gave a _____________ presentation about helping the poor.",
      wordGiven: "WONDER", accepted: ["wonderful"], correct: "wonderful",
      explanation: "Cần tính từ trước \"presentation\". <b>wonder</b> (n/v) → <b>wonderful</b> (adj, +ful, tuyệt vời)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Doing charity work helps school children build up their _____________.",
      wordGiven: "CONFIDENT", accepted: ["confidence"], correct: "confidence",
      explanation: "Cần danh từ sau \"their\". <b>confident</b> (adj) → <b>confidence</b> (n, sự tự tin)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "_____________, many people donated books and clothes to the flood victims.",
      wordGiven: "SURPRISE", accepted: ["surprisingly"], correct: "surprisingly",
      explanation: "Cần trạng từ đứng đầu câu bổ nghĩa cho cả câu. <b>surprise</b> (n/v) → <b>surprisingly</b> (adv, +ly)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "We should _____________ old textbooks and warm clothes to children in remote areas.",
      wordGiven: "DONATION", accepted: ["donate"], correct: "donate",
      explanation: "Cần động từ nguyên thể sau \"should\". <b>donation</b> (n) → <b>donate</b> (v, quyên góp)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "serviceEntry",
      prompt: "Our company wants to _____________________ for busy parents by delivering fresh meals to their homes.",
      accepted: ["provide a service"], correct: "provide a service",
      explanation: "Từ điển cho ví dụ \"We aim to <b>provide a service</b> that is of high quality.\" — khớp với ngữ cảnh công ty muốn cung cấp dịch vụ."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "serviceEntry",
      prompt: "The city has decided to invest more money to improve local _____________________ like schools and hospitals.",
      accepted: ["public services"], correct: "public services",
      explanation: "Từ điển cho ví dụ \"The government aims to improve <b>public services</b>, especially education.\" — khớp với ngữ cảnh đầu tư cải thiện trường học, bệnh viện."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Paula knew how to cook well when she was eleven.",
      starter: "Paula could",
      accepted: ["paula could cook well when she was eleven"],
      correct: "Paula could cook well when she was eleven.",
      explanation: "\"knew how to + V\" (biết cách làm gì) có thể viết lại bằng \"<b>could + V</b>\" (có thể làm gì, diễn tả khả năng trong quá khứ), giữ nguyên nghĩa.<br>→ <i>Paula could cook well when she was eleven.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Tutoring younger children sounds very exciting to me.",
      starter: "It's very",
      accepted: ["it's very exciting to tutor younger children"],
      correct: "It's very exciting to tutor younger children.",
      explanation: "\"V-ing... sounds + adj\" (nghe có vẻ như thế nào) có thể viết lại bằng \"<b>It's + adj + to V</b>\", giữ nguyên nghĩa.<br>→ <i>It's very exciting to tutor younger children.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Our campaign attracted over 1000 volunteers all over the world last year.",
      starter: "Over 1000 volunteers",
      accepted: ["over 1000 volunteers all over the world were attracted by our campaign last year"],
      correct: "Over 1000 volunteers all over the world were attracted by our campaign last year.",
      explanation: "Câu chủ động \"S + attracted + O\" có thể viết lại thành câu bị động \"<b>O + were attracted by + S</b>\", giữ nguyên nghĩa.<br>→ <i>Over 1000 volunteers all over the world were attracted by our campaign last year.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "How can we help the elderly?",
      starter: "Do you think",
      accepted: ["do you think how we can help the elderly"],
      correct: "Do you think how we can help the elderly?",
      explanation: "Câu hỏi trực tiếp \"How can we + V?\" có thể lồng vào câu hỏi gián tiếp \"<b>Do you think + how + S + can + V?</b>\", giữ nguyên trật tự từ như câu hỏi gốc theo đề bài.<br>→ <i>Do you think how we can help the elderly?</i>"
    }
  ]
};
