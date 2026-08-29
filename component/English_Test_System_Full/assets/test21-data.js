const TEST = {
  id: "test21",
  grade: "Grade 9 — Global Success",
  unit: "Unit 5: Our experiences",
  title: "Grade 9 · Unit 5: Our experiences · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test21.html",
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
    { id: "VI", title: "Look at the dictionary entry of “experience”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    hanoiCloze: "I lived alone in Hanoi for a while, and this experience (17) ________ me many valuable lessons about independence. During this time, I learned how to take care of myself. Creating a good living plan helped me stay healthy, (18) ________ is important for studying and working. Living alone in the city means I need to be very careful. I have become more cautious (19) ________ trusting people. Although there are many good people in society, there are also some bad ones who might take (20) ________ of your trust for their gain. So, you need to be very careful when deciding to trust someone. I also learned how to manage my spending. When you live alone, if you don't control your money well, you can easily get into debt and (21) ________ problems. Thanks to this alone time, I totally felt (22) ________ and able to handle any situation.",
    alexReading: "Alex was a 13-year-old boy. Last year, he went on an exchange programme in a foreign country. He couldn't wait to experience new cultures and he aimed mostly at making international friends. Little did he know, his journey would be filled with hilarious moments. Instead of asking for directions to the nearest museum, he ended up asking for directions to the nearest ice cream parlour! During a group outing, Alex mistook a sheep for a friendly dog and tried to pet it. Much to his surprise, the sheep bleated loudly and startled him. His classmates burst into laughter, and Alex blushed in embarrassment. In a cooking class, Alex attempted to make a traditional dish, but instead of putting in some sugar, he accidentally added way too much salt. The taste was so unbearable that even the chef couldn't help but laugh at his reaction. Despite these funny mishaps, Alex's exchange programme was a memorable experience. He made friends from around the world and learned to embrace unexpected moments with a sense of humour.",
    experienceEntry: {
      word: "experience", ipa: "/ɪkˈspɪəriəns/", pos: "noun",
      def: "1. [uncountable] Knowledge/Skill: knowledge or skill that you get from doing a job or activity. 2. [countable] Something that happens: an event or activity that affects you.",
      examples: [
        "Do you have any <b>previous experience</b> of this type of work?",
        "The position requires at least three years of <b>practical experience</b>.",
        "She has <b>extensive experience</b> in the field of public relations.",
        "Traveling alone was a <b>rewarding experience</b> for her.",
        "It was a <b>frightening experience</b>, but luckily no one was hurt.",
        "I had a <b>bad experience</b> with that airline last year."
      ]
    }
  },
  images: {
    signNoSwimming: "assets/images/sign_no_swimming.jpg",
    signShowerBeforePool: "assets/images/sign_shower_before_pool.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "union", B: "unpleasant", C: "under", D: "umbrella" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"u\". \"unpleasant\" /ʌnˈplezənt/, \"under\" /ˈʌndər/, \"umbrella\" /ʌmˈbrelə/ đều có \"u\" phát âm là <b>/ʌ/</b>. Riêng \"union\" /ˈjuːniən/ có \"u\" phát âm là <b>/juː/</b> → khác biệt, đáp án A."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "watermelon", B: "wind", C: "swing", D: "brown" },
      correct: "D",
      explanation: "Phần gạch chân là chữ cái \"w\". \"watermelon\" /w/, \"wind\" /w/, \"swing\" /w/ đều có \"w\" phát âm là phụ âm <b>/w/</b>. Riêng \"brown\" /braʊn/ có \"w\" nằm trong tổ hợp nguyên âm đôi \"ow\" (/aʊ/), không phát âm riêng thành /w/ → khác biệt, đáp án D."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "evening", B: "mountainous", C: "amazing", D: "actually" },
      correct: "C",
      explanation: "\"evening\" /ˈiːvnɪŋ/, \"mountainous\" /ˈmaʊntənəs/, \"actually\" /ˈæktʃuəli/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"amazing\" /əˈmeɪzɪŋ/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "global", B: "local", C: "travel", D: "arrive" },
      correct: "D",
      explanation: "\"global\" /ˈɡloʊbl/, \"local\" /ˈloʊkl/, \"travel\" /ˈtrævl/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"arrive\" /əˈraɪv/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"We apologize for the late delivery, Sir.\"",
      prompt: "Customer: \"________ Will you give us a discount as compensation?\"",
      display: { A: "I'd love to.", B: "Oh, that's alright.", C: "I'm sorry.", D: "Your mistake." },
      correct: "B",
      explanation: "\"<b>Oh, that's alright.</b>\" là cách đáp lại lời xin lỗi một cách nhẹ nhàng, đồng thời khách hàng vẫn tiếp tục hỏi thêm về việc giảm giá."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Student A: \"________ the students ________ all their assignments yet?\"",
      prompt: "Student B: \"I think most of them have already finished.\"",
      display: { A: "Has / finished", B: "Have / finished", C: "Has / doing", D: "Have / begun" },
      correct: "B",
      explanation: "Chủ ngữ \"the students\" là số nhiều, và có \"yet\" (đã... chưa) → dùng <b>thì hiện tại hoàn thành</b>: \"<b>Have</b> the students <b>finished</b> all their assignments yet?\""
    },
    { id: 7, section: "I", type: "mcq",
      context: "Lan: \"Why is she so confused in the kitchen?\"",
      prompt: "Nam: \"She ________ for herself before, so she isn't sure what to do first.\"",
      display: { A: "hasn't cooked", B: "is cooking", C: "has been cooked", D: "cooked" },
      correct: "A",
      explanation: "Hành động chưa từng xảy ra tính đến hiện tại, có \"before\" → dùng <b>hiện tại hoàn thành phủ định</b>: \"She <b>hasn't cooked</b> for herself before.\""
    },
    { id: 8, section: "I", type: "mcq",
      context: "Teacher: \"Time is up! How did you feel about the maths problem?\"",
      prompt: "Minh: \"I couldn't solve it, and I felt so ________ at that time.\"",
      display: { A: "happy", B: "helpless", C: "pleasant", D: "helpful" },
      correct: "B",
      explanation: "\"felt so <b>helpless</b>\" (cảm thấy bất lực) phù hợp với việc không giải được bài toán."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Anna: \"Did he understand the lesson well?\"",
      prompt: "Bill: \"No, the student learnt ________, so he couldn't answer your question.\"",
      display: { A: "by heart", B: "by mind", C: "by rote", D: "by thought" },
      correct: "C",
      explanation: "\"learnt <b>by rote</b>\" (học vẹt, học thuộc lòng máy móc) giải thích vì sao học sinh không hiểu bài để trả lời câu hỏi."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Tourist: \"What is that tall thing in the yard of the communal house?\"",
      prompt: "Local: \"It's a ________. We put it up to welcome Tet.\"",
      display: { A: "barrier", B: "fight", C: "bamboo pole", D: "tent" },
      correct: "C",
      explanation: "\"<b>bamboo pole</b>\" (cây nêu) là vật được dựng lên vào dịp Tết ở sân đình làng Việt Nam."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Jane: \"Only after the bus ________ for a few miles did I realize I was on the wrong route.\"",
      prompt: "Driver: \"Don't worry, you can get off at the next stop.\"",
      display: { A: "has run", B: "was running", C: "had run", D: "runs" },
      correct: "C",
      explanation: "Cấu trúc đảo ngữ \"Only after + S + had + V3\" diễn tả hành động xảy ra trước một hành động khác trong quá khứ (nhận ra mình đi nhầm đường): \"Only after the bus <b>had run</b> for a few miles did I realize...\""
    },
    { id: 12, section: "I", type: "mcq",
      context: "Son: \"What did you see while diving in the ocean?\"",
      prompt: "Dad: \"The ________ was a large coral reef teeming with marine life.\"",
      display: { A: "seabed", B: "snorkel", C: "underwater", D: "campsite" },
      correct: "A",
      explanation: "\"The <b>seabed</b>\" (đáy biển) là nơi có rạn san hô lớn với nhiều sinh vật biển."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Mark: \"Have you ever shared your travel adventures online?\"",
      prompt: "Sarah: \"Yes, I ________ some photos and tips on a travel website recently.\"",
      display: { A: "have posted", B: "was posting", C: "post", D: "am posting" },
      correct: "A",
      explanation: "\"recently\" đi kèm hành động vừa mới xảy ra, liên quan đến hiện tại → dùng <b>hiện tại hoàn thành</b>: \"I <b>have posted</b> some photos and tips recently.\""
    },
    { id: 14, section: "I", type: "mcq",
      context: "Peter: \"I had a great time at the park yesterday.\"",
      prompt: "Mary: \"________\"",
      display: { A: "What did you do there?", B: "How do you go to school?", C: "It's cheap to travel.", D: "Can you see the bus stop?" },
      correct: "A",
      explanation: "\"<b>What did you do there?</b>\" là câu hỏi tự nhiên nhất để tiếp tục hỏi thêm về trải nghiệm ở công viên của Peter."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoSwimming",
      prompt: "What does this sign say?",
      display: {
        A: "Swimming is not allowed here.",
        B: "The shallow water is only for children.",
        C: "Diving is allowed here, so you should dive.",
        D: "Do not dive here."
      },
      correct: "A",
      explanation: "Biển ghi \"NO SWIMMING\" → cấm bơi ở khu vực này, đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signShowerBeforePool",
      prompt: "What does this notice tell you?",
      display: {
        A: "There will be a new shower at the pool.",
        B: "The pool is closed on October 1st.",
        C: "You need to wash before you swim.",
        D: "You must dry off before entering the pool."
      },
      correct: "C",
      explanation: "Biển ghi \"PLEASE SHOWER BEFORE ENTERING THE POOL\" → cần tắm trước khi vào bể bơi, đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "hanoiCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "learned", B: "taught", C: "studied", D: "guided" },
      correct: "B",
      explanation: "\"this experience <b>taught</b> me many valuable lessons\" — cấu trúc \"teach sb sth\" (dạy cho ai điều gì) phù hợp với chủ ngữ \"experience\"."
    },
    { id: 18, section: "III", type: "mcq", passage: "hanoiCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "which", B: "who", C: "that", D: "what" },
      correct: "A",
      explanation: "\"..., <b>which</b> is important for studying and working\" — đại từ quan hệ \"which\" đứng sau dấu phẩy, thay thế cho cả mệnh đề trước đó (mệnh đề quan hệ không xác định)."
    },
    { id: 19, section: "III", type: "mcq", passage: "hanoiCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "for", B: "about", C: "with", D: "in" },
      correct: "B",
      explanation: "\"cautious <b>about</b> trusting people\" — cụm cố định \"cautious about + V-ing\" (thận trọng về việc gì)."
    },
    { id: 20, section: "III", type: "mcq", passage: "hanoiCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "benefit", B: "chance", C: "advantage", D: "use" },
      correct: "C",
      explanation: "\"take <b>advantage</b> of your trust\" — cụm cố định \"take advantage of\" (lợi dụng)."
    },
    { id: 21, section: "III", type: "mcq", passage: "hanoiCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "face", B: "meet", C: "create", D: "suffer" },
      correct: "A",
      explanation: "\"get into debt and <b>face</b> problems\" — \"face problems\" (đối mặt với vấn đề) là cách diễn đạt tự nhiên nhất."
    },
    { id: 22, section: "III", type: "mcq", passage: "hanoiCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "traditional", B: "professional", C: "convenient", D: "confident" },
      correct: "D",
      explanation: "\"I totally felt <b>confident</b> and able to handle any situation\" — \"confident\" (tự tin) phù hợp với việc có thể xử lý mọi tình huống."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "alexReading",
      prompt: "Alex's primary goal during the exchange programme was to visit as many museums as possible.",
      correct: "False",
      explanation: "Sai. Bài đọc: Alex \"aimed mostly at <b>making international friends</b>\", không phải đi thăm bảo tàng."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "alexReading",
      prompt: "Alex felt embarrassed when his classmates laughed at his mistake with the sheep.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"His classmates burst into laughter, and Alex <b>blushed in embarrassment</b>.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "alexReading",
      prompt: "The cooking chef got angry because Alex ruined the traditional dish by adding too much salt.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"even the chef couldn't help but <b>laugh</b> at his reaction\" — thầy bếp cười chứ không tức giận."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "alexReading",
      prompt: "In the end, Alex successfully made international friends despite his funny mistakes.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"He <b>made friends from around the world</b> and learned to embrace unexpected moments with a sense of humour.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "alexReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The difficulties of learning how to cook and speak a foreign language abroad.",
        B: "A young boy's funny experiences and positive outcomes during an exchange programme.",
        C: "Why exchange programmes are too difficult and embarrassing for 13-year-old students.",
        D: "The dangerous encounters with local animals during a school trip to a foreign country."
      },
      correct: "B",
      explanation: "Bài đọc kể về những trải nghiệm hài hước và kết quả tích cực của Alex trong chương trình trao đổi → đáp án B bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "alexReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Alex went to a foreign country on an exchange programme when he was 12 years old.",
        B: "Alex accidentally asked for directions to an ice cream shop instead of a museum.",
        C: "Alex tried to pet a sheep because he thought it was a friendly dog.",
        D: "The dish Alex made in the cooking class tasted terrible because it had too much salt."
      },
      correct: "A",
      explanation: "Bài đọc nói Alex là \"a <b>13</b>-year-old boy\", không phải 12 tuổi → câu A SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The experience of living alone was very ______________ for him.",
      wordGiven: "value", accepted: ["valuable"], correct: "valuable",
      explanation: "Cần tính từ làm bổ ngữ sau \"was very\". <b>value</b> (n/v) → <b>valuable</b> (adj, +able, quý giá, bổ ích)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "I couldn't solve the problem, and I felt ______________ when time was up.",
      wordGiven: "help", accepted: ["helpless"], correct: "helpless",
      explanation: "Cần tính từ làm bổ ngữ sau \"felt\". <b>help</b> (n/v) → <b>helpless</b> (adj, +less, bất lực)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "We had an ______________ trip to the mountainous area last summer.",
      wordGiven: "amaze", accepted: ["amazing"], correct: "amazing",
      explanation: "Cần tính từ đứng trước danh từ \"trip\". <b>amaze</b> (v) → <b>amazing</b> (adj, +ing, tuyệt vời, đáng kinh ngạc)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "______________, he realized he was on the wrong bus route.",
      wordGiven: "luck", accepted: ["unluckily"], correct: "Unluckily",
      explanation: "Cần trạng từ đứng đầu câu bổ nghĩa cho cả câu. <b>luck</b> (n) → <b>unluckily</b> (adv, un-...-ly, thật không may)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "The ______________ of the traditional Tet pole is a common sight in villages.",
      wordGiven: "erect", accepted: ["erection"], correct: "erection",
      explanation: "Cần danh từ làm chủ ngữ của câu. <b>erect</b> (v) → <b>erection</b> (n, +ion, việc dựng lên)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "Teenagers need to seek diverse ______________ to shape their character.",
      wordGiven: "experiential", accepted: ["experiences"], correct: "experiences",
      explanation: "Cần danh từ số nhiều làm tân ngữ của động từ \"seek\". <b>experiential</b> (adj) → <b>experiences</b> (n, trải nghiệm)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "experienceEntry",
      prompt: "The company is looking for a candidate who has some ___________________ in teaching children.",
      accepted: ["previous experience", "practical experience"], correct: "previous experience / practical experience",
      explanation: "Từ điển cho ví dụ \"Do you have any <b>previous experience</b> of this type of work?\" và \"...at least three years of <b>practical experience</b>.\" — cả hai cụm đều khớp với ngữ cảnh có kinh nghiệm dạy trẻ em."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "experienceEntry",
      prompt: "Living in a different country can be a very ___________________ as you learn about new cultures.",
      accepted: ["rewarding experience"], correct: "rewarding experience",
      explanation: "Từ điển cho ví dụ \"Traveling alone was a <b>rewarding experience</b> for her.\" — khớp với ngữ cảnh sống ở một đất nước khác và học hỏi về văn hóa mới."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "An started doing yoga at 6 o'clock.",
      starter: "An has",
      accepted: ["an has been doing yoga since 6 o'clock"],
      correct: "An has been doing yoga since 6 o'clock.",
      explanation: "Hành động bắt đầu trong quá khứ và vẫn tiếp diễn đến hiện tại được diễn đạt bằng <b>hiện tại hoàn thành tiếp diễn + since + mốc thời gian</b>.<br>→ <i>An has been doing yoga since 6 o'clock.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "It's the first time her little son has tried Indian food.",
      starter: "Her little son",
      accepted: ["her little son has never tried indian food before"],
      correct: "Her little son has never tried Indian food before.",
      explanation: "\"It's the first time + S + has/have + V3\" có nghĩa tương đương với \"<b>S + have/has never + V3 + before</b>\" (chưa từng làm gì trước đây).<br>→ <i>Her little son has never tried Indian food before.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "They haven't met each other for two years.",
      starter: "The last time",
      accepted: ["the last time they met each other was two years ago"],
      correct: "The last time they met each other was two years ago.",
      explanation: "\"S + haven't/hasn't + V3 + for + khoảng thời gian\" có thể viết lại bằng \"<b>The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago</b>\".<br>→ <i>The last time they met each other was two years ago.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "I have joined the English club and worked as a tutor for a semester.",
      starter: "I have been",
      accepted: ["i have been a member of the english club and a tutor for a semester"],
      correct: "I have been a member of the English club and a tutor for a semester.",
      explanation: "\"join the club\" (tham gia câu lạc bộ) có thể diễn đạt lại bằng \"<b>be a member of the club</b>\" (là thành viên của câu lạc bộ), giữ nguyên thì hiện tại hoàn thành.<br>→ <i>I have been a member of the English club and a tutor for a semester.</i>"
    }
  ]
};
