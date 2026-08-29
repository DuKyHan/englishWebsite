const TEST = {
  id: "test06",
  grade: "Grade 8 — Global Success",
  unit: "Unit 6: Lifestyles",
  title: "Grade 8 · Unit 6: Lifestyles · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test06.html",
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
    { id: "VI", title: "Look at the dictionary entry of “addiction”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    disasterCloze: "Nowadays, with the high-speed Internet connection, people can quickly update the latest news on the coming natural disasters in their neighborhood. For example, last year many flood victims in Da Nang (17) ________ rescued from deep flooded areas thanks to the short videos and images of where they got stuck (18) ________ posted on social networks like Facebook or TikTok. In addition, the collaborative work on storm and flood prevention between departments goes (19) ________ because they can have video conferences to guide and evacuate locals from dangerous areas. In the future, the communication (20) ________ people and the rescue teams might be much more (21) ________ when telepathy technology (22) ________ a breakthrough.",
    bigCityReading: "Life in the big city is fast-paced, fun and exciting. There are countless job opportunities and activities to occupy your time. However, with the good, there also comes the bad. Although the big city has more job opportunities; there are also more people competing for a single job. This can make your job search frustrating. Oddly enough, you will see hundreds, if not thousands of jobs available each week, but you still might remain unemployed, especially when the economy is down. In addition, the cost of living is typically higher in big cities, and it can cost you an arm and a leg for a small apartment in a decent area of the city, not to mention other costs to fulfill your basic demands.<br><br>Diversity is a good thing, but the number of people can be a bit overwhelming if you are not accustomed to it. There will always be crowds and always be people around. Moreover, traffic can be a nightmare in the big city. It can get so bad that it can turn you into an evil person. If you hate driving in traffic, then the big city life is not for you. Heavy traffic also contributes to pollution, which is one of the biggest disadvantages of living in the city. Obviously, health is affected most by certain diseases relating to the respiratory system and other body parts. A lot of premature deaths are supposed to be the result of long-term exposure to small particles. Most importantly, there is always more crime in a big city, causing you to second-guess your decision for living in a big city. You are much more likely to be a victim of a crime living in a big city than in a small town.",
    addictionEntry: {
      word: "addiction", ipa: "/əˈdɪkʃn/", pos: "noun",
      def: "1. the condition of being unable to stop taking a harmful drug &nbsp; 2. the state of being unable to stop doing something as a habit",
      examples: [
        "He fell into a life of <b>heroin addiction</b>.",
        "The center helps people fight their <b>drug addiction</b>.",
        "She has a serious <b>addiction to social media</b>.",
        "His <b>gambling addiction</b> cost him his marriage.",
        "Many teenagers develop an <b>addiction to video games</b>."
      ]
    }
  },
  images: {
    signSilenceExam: "assets/images/sign_silence_exam.jpg",
    signGreenWeek: "assets/images/sign_green_week.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "fable", B: "tale", C: "brave", D: "dragon" },
      correct: "D",
      explanation: "Chữ \"a\" trong \"fable\" /ˈfeɪbl/, \"tale\" /teɪl/, \"brave\" /breɪv/ đều phát âm là <b>/eɪ/</b>. Riêng \"dragon\" /ˈdræɡən/ có \"a\" phát âm là <b>/æ/</b> → khác biệt, đáp án D."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "beloved", B: "confused", C: "wicked", D: "naked" },
      correct: "B",
      explanation: "Đuôi \"-ed\" trong \"beloved\" /bɪˈlʌvɪd/, \"wicked\" /ˈwɪkɪd/, \"naked\" /ˈneɪkɪd/ đều phát âm là <b>/ɪd/</b> (vì đây là tính từ có -ed đặc biệt). Riêng \"confused\" /kənˈfjuːzd/ có đuôi \"-ed\" phát âm là <b>/d/</b> → khác biệt, đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "intention", B: "character", C: "collection", D: "solution" },
      correct: "B",
      explanation: "\"intention\" /ɪnˈtenʃn/, \"collection\" /kəˈlekʃn/, \"solution\" /səˈluːʃn/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"character\" /ˈkærəktər/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "polite", B: "native", C: "famous", D: "healthy" },
      correct: "A",
      explanation: "\"native\" /ˈneɪtɪv/, \"famous\" /ˈfeɪməs/, \"healthy\" /ˈhelθi/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"polite\" /pəˈlaɪt/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"What shall we do today, Mary?\"",
      prompt: "Mary: \"I think I ______ to the beach while the sun is out!\"",
      display: { A: "am going", B: "will go", C: "gone", D: "go" },
      correct: "B",
      explanation: "Đây là một <b>quyết định tức thời</b> được đưa ra ngay tại thời điểm nói (\"I think I...\") → dùng <b>will + V</b>: <b>will go</b>."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Peter: \"Can you come to my birthday dinner tonight?\"",
      prompt: "Jane: \"I'm sorry but I can't. I ______ my work at 8 p.m., so I won't arrive on time.\"",
      display: { A: "finished", B: "finish", C: "will finish", D: "finishes" },
      correct: "C",
      explanation: "Diễn tả một <b>dự đoán/sự việc trong tương lai</b> (thời điểm cụ thể 8 p.m.) → dùng <b>will + V</b>: <b>will finish</b>."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Linda: \"Please don't tell anyone what I just said.\"",
      prompt: "Chris: \"If you tell me your secret, I promise I ______ anyone!\"",
      display: { A: "told", B: "am not telling", C: "am telling", D: "won't tell" },
      correct: "D",
      explanation: "Đây là một <b>lời hứa</b> ở tương lai (\"I promise...\") → dùng <b>will/won't + V</b>: <b>won't tell</b>."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Kevin: \"Scientists say global warming is getting worse.\"",
      prompt: "Mark: \"Yes, I think the Earth ______ a lot warmer in 50 years.\"",
      display: { A: "is becoming", B: "was becoming", C: "will become", D: "becomes" },
      correct: "C",
      explanation: "\"I think...\" diễn tả một <b>dự đoán về tương lai</b> (50 năm nữa) → dùng <b>will + V</b>: <b>will become</b>."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Susan: \"Your daughter is growing up so fast.\"",
      prompt: "Anna: \"Yes, she is becoming more ______ and likes to do things on her own.\"",
      display: { A: "depend", B: "independent", C: "dependence", D: "dependent" },
      correct: "B",
      explanation: "\"likes to do things on her own\" (thích tự làm mọi việc) → \"becoming more <b>independent</b>\" (trở nên độc lập hơn) là tính từ phù hợp."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Paul: \"Why do you like painting and drawing so much?\"",
      prompt: "Lucy: \"Art is a great form of ______ creatively and allows people to express themselves.\"",
      display: { A: "expressive", B: "expression", C: "expresses", D: "express" },
      correct: "B",
      explanation: "Cần danh từ đứng sau \"a great form of\". <b>express</b> (v) → <b>expression</b> (n, +ion): sự thể hiện, diễn đạt."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Doctor: \"How can I help you today?\"",
      prompt: "Patient: \"If I ______ well tomorrow, I will come back to see you again.\"",
      display: { A: "doesn't feel", B: "feels", C: "feel", D: "don't feel" },
      correct: "D",
      explanation: "Câu điều kiện loại 1: \"If + S + <b>don't/doesn't + V</b>, S + will + V\" — chủ ngữ \"I\" cần trợ động từ <b>don't</b>: <b>don't feel</b>."
    },
    { id: 12, section: "I", type: "mcq",
      context: "David: \"Do you and Jack have the same hobbies?\"",
      prompt: "Sam: \"Yes, we share a ______ interest in photography and travel.\"",
      display: { A: "different", B: "nomadic", C: "independent", D: "common" },
      correct: "D",
      explanation: "\"share a <b>common</b> interest\" (có chung một mối quan tâm) là cụm cố định, phù hợp với việc hai người có cùng sở thích."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Alice: \"Be on time! The water puppet show starts at 7 p.m. sharp.\"",
      prompt: "Tom: \"______\"",
      display: { A: "Yes, the show is around 7 p.m.", B: "I've no idea.", C: "Don't worry, I will be there exactly at 7.", D: "What's happening?" },
      correct: "C",
      explanation: "\"<b>Don't worry, I will be there exactly at 7.</b>\" là lời đáp phù hợp, trấn an Alice rằng Tom sẽ đến đúng giờ như được nhắc nhở."
    },
    { id: 14, section: "I", type: "mcq",
      context: "John: \"You're kidding! His current job is too good for him to quit.\"",
      prompt: "Mary: \"______\"\nJohn: \"Wow, I really thought he was going to leave the company.\"",
      display: {
        A: "No, I'm serious! He just resigned today.",
        B: "You're joking! It's an amazing job.",
        C: "What a boring job!",
        D: "I agree, he shouldn't quit it."
      },
      correct: "D",
      explanation: "Câu trả lời của John (\"Wow, I really thought he was going to leave...\") cho thấy Mary vừa nói điều gì đó ĐỒNG TÌNH rằng anh ấy không nên nghỉ việc → đáp án D \"I agree, he shouldn't quit it.\" phù hợp nhất, khiến John ngạc nhiên vì đã nghĩ khác."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signSilenceExam",
      prompt: "What does this sign tell you?",
      display: {
        A: "You should talk loudly to help the students.",
        B: "You can enter the room and talk to the examiner.",
        C: "You must keep quiet because people are taking an exam here.",
        D: "You are not allowed to talk anywhere in the building."
      },
      correct: "C",
      explanation: "Biển ghi \"SILENCE — EXAM IN PROGRESS\" (Im lặng — đang thi) → phải giữ yên lặng vì có người đang thi ở đây, đáp án C."
    },
    { id: 16, section: "II", type: "mcq", image: "signGreenWeek",
      prompt: "What does this notice mean?",
      display: {
        A: "The environment event will start at 4 p.m. tomorrow.",
        B: "The \"Green Week\" event will take place in the school gym tomorrow at 3 p.m.",
        C: "Students will have a break all week to plant trees.",
        D: "Only teachers can attend the green project in the school gym."
      },
      correct: "B",
      explanation: "Thông báo ghi \"GREEN WEEK CAMPAIGN — SCHOOL GYM — TOMORROW AT 3 PM\" → sự kiện \"Tuần lễ Xanh\" sẽ diễn ra ở nhà thể chất trường vào 3 giờ chiều ngày mai, đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "disasterCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "was", B: "were", C: "have", D: "are" },
      correct: "B",
      explanation: "Câu bị động ở <b>quá khứ</b> (\"last year\") với chủ ngữ số nhiều \"many flood victims\" → dùng <b>were</b>: \"were rescued\"."
    },
    { id: 18, section: "III", type: "mcq", passage: "disasterCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "who", B: "they", C: "whose", D: "which" },
      correct: "D",
      explanation: "Cần đại từ quan hệ thay cho danh từ chỉ vật \"videos and images\" làm chủ ngữ cho mệnh đề bị động \"________ posted on social networks\" → dùng <b>which</b>."
    },
    { id: 19, section: "III", type: "mcq", passage: "disasterCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "smoothly", B: "difficulty", C: "heavily", D: "loudly" },
      correct: "A",
      explanation: "\"goes <b>smoothly</b>\" (diễn ra suôn sẻ) — cần trạng từ phù hợp với việc công tác phối hợp phòng chống bão lũ diễn ra thuận lợi nhờ có công nghệ."
    },
    { id: 20, section: "III", type: "mcq", passage: "disasterCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "on", B: "between", C: "among", D: "at" },
      correct: "B",
      explanation: "\"communication <b>between</b> A and B\" (giao tiếp GIỮA hai bên — người dân và đội cứu hộ) là cụm giới từ cố định dùng cho hai đối tượng."
    },
    { id: 21, section: "III", type: "mcq", passage: "disasterCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "dangerous", B: "expensive", C: "convenient", D: "traditional" },
      correct: "C",
      explanation: "Công nghệ thần giao cách cảm (telepathy) trong tương lai sẽ giúp giao tiếp trở nên <b>thuận tiện (convenient)</b> hơn."
    },
    { id: 22, section: "III", type: "mcq", passage: "disasterCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "holds", B: "makes", C: "has", D: "does" },
      correct: "B",
      explanation: "\"<b>make</b> a breakthrough\" (tạo ra một bước đột phá) là cụm cố định."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "bigCityReading",
      prompt: "Job hunting in a big city can be stressful because of the high number of competitors.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"there are also more people competing for a single job. This can make your job search <b>frustrating</b>.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "bigCityReading",
      prompt: "Accommodation in a good area of a big city is usually cheap and affordable.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"the cost of living is typically <b>higher</b> in big cities, and it can cost you an arm and a leg for a small apartment in a decent area\" — nhà ở khu tốt rất đắt đỏ, không rẻ."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "bigCityReading",
      prompt: "Long-term exposure to small particles in polluted city air can lead to early deaths.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"A lot of premature deaths are supposed to be the result of <b>long-term exposure to small particles</b>.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "bigCityReading",
      prompt: "Big cities generally have a lower rate of crime compared to small towns.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"there is always <b>more crime</b> in a big city... You are much more likely to be a victim of a crime living in a big city than in a small town\" — tội phạm ở thành phố lớn NHIỀU hơn, không phải ít hơn."
    },
    { id: 27, section: "IV", type: "mcq", passage: "bigCityReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "Both the positive and negative aspects of living in a large city.",
        B: "The best ways to find a job and an apartment in a big city.",
        C: "The reasons why everyone should move from small towns to big cities.",
        D: "The serious health problems caused by air pollution in urban areas."
      },
      correct: "A",
      explanation: "Bài đọc nêu cả mặt tốt (\"fast-paced, fun and exciting\", nhiều cơ hội việc làm) lẫn mặt xấu (khó tìm việc, chi phí cao, đông đúc, kẹt xe, ô nhiễm, tội phạm) của cuộc sống thành phố lớn → đáp án A bao quát toàn bài."
    },
    { id: 28, section: "IV", type: "mcq", passage: "bigCityReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Big cities are safer to live in than small towns.",
        B: "Big cities offer many jobs, but finding one can still be difficult.",
        C: "Traffic jams in the city can make people feel very angry and stressed.",
        D: "People who are not used to large crowds might find the city overwhelming."
      },
      correct: "A",
      explanation: "Bài đọc nói thành phố lớn có NHIỀU tội phạm hơn và người sống ở đó \"much more likely to be a victim of a crime... than in a small town\" → câu A nói thành phố lớn AN TOÀN HƠN thị trấn nhỏ là SAI so với bài đọc."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Nowadays, high-speed Internet ______________ allows people to update news quickly.",
      wordGiven: "connect", accepted: ["connection"], correct: "connection",
      explanation: "Cần danh từ làm chủ ngữ của câu, đứng sau \"Internet\". <b>connect</b> (v) → <b>connection</b> (n, +ion): kết nối."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Thanks to social media, residents can get the ______________ reports on natural disasters.",
      wordGiven: "late", accepted: ["latest"], correct: "latest",
      explanation: "Cần tính từ so sánh nhất đứng sau \"the\" và trước \"reports\". <b>late</b> (adj) → <b>latest</b> (so sánh nhất): mới nhất."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The rescue team worked ______________ to evacuate people from the dangerous flood areas.",
      wordGiven: "smooth", accepted: ["smoothly"], correct: "smoothly",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"worked\". <b>smooth</b> (adj) → <b>smoothly</b> (adv, +ly): một cách suôn sẻ."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Technology has ______________ the attention of many young people around the world.",
      wordGiven: "attraction", accepted: ["attracted"], correct: "attracted",
      explanation: "Cần động từ chia ở thì hiện tại hoàn thành (has + V3/-ed) làm vị ngữ chính của câu. <b>attraction</b> (n) → <b>attract</b> (v) → <b>attracted</b> (quá khứ phân từ)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Many teenagers are addicted to electronic ______________ like smartphones and tablets.",
      wordGiven: "device", accepted: ["devices"], correct: "devices",
      explanation: "Cần danh từ số nhiều đứng sau tính từ \"electronic\" (vì liệt kê nhiều loại: smartphones and tablets). <b>device</b> (n) → <b>devices</b> (số nhiều): thiết bị."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "Excessive use of technology can have ______________ effects on students' mental health.",
      wordGiven: "negation", accepted: ["negative"], correct: "negative",
      explanation: "Cần tính từ đứng trước danh từ \"effects\". <b>negation</b> (n) → <b>negative</b> (adj): tiêu cực."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "addictionEntry",
      prompt: "Spending too many hours on smartphones can easily lead to a dangerous ____________________.",
      accepted: ["addiction to social media"], correct: "addiction to social media",
      explanation: "Từ điển cho ví dụ \"She has a serious <b>addiction to social media</b>.\" — rất khớp với việc dùng điện thoại thông minh quá nhiều giờ."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "addictionEntry",
      prompt: "The new support group aims to help individuals overcome their ____________________ and rebuild their lives.",
      accepted: ["drug addiction", "heroin addiction"], correct: "drug addiction / heroin addiction",
      explanation: "Từ điển cho ví dụ \"The center helps people fight their <b>drug addiction</b>.\" và \"He fell into a life of <b>heroin addiction</b>.\" — cả hai đều phù hợp với ngữ cảnh nhóm hỗ trợ giúp người nghiện làm lại cuộc đời."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Our community intends to improve public services this year.",
      starter: "Our community is trying",
      accepted: ["our community is trying to improve public services this year"],
      correct: "Our community is trying to improve public services this year.",
      explanation: "\"intend to + V\" (dự định/có ý định làm gì) có thể diễn đạt lại bằng \"<b>be trying to + V</b>\" (đang cố gắng làm gì) — cùng mang nghĩa hướng tới việc thực hiện một mục tiêu.<br>→ <i>Our community is trying to improve public services this year.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Local residents joined a clean-up campaign last month.",
      starter: "A clean-up campaign",
      accepted: ["a clean-up campaign was joined by local residents last month"],
      correct: "A clean-up campaign was joined by local residents last month.",
      explanation: "Chuyển câu chủ động sang bị động: \"Local residents joined\" → \"A clean-up campaign <b>was joined by</b> local residents\" (thì quá khứ đơn, bị động).<br>→ <i>A clean-up campaign was joined by local residents last month.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "It is important for residents to support vital public services.",
      starter: "Residents",
      accepted: ["residents should support vital public services"],
      correct: "Residents should support vital public services.",
      explanation: "\"It is important for + O + to V\" (điều gì đó quan trọng đối với ai) có thể chuyển thành \"<b>S + should + V</b>\" (ai đó nên làm gì) — cùng diễn tả một điều nên được thực hiện.<br>→ <i>Residents should support vital public services.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Technology has both negative and positive impacts on people's lives.",
      starter: "Technology not only",
      accepted: ["technology not only has negative but also positive impacts on people's lives", "technology not only has negative impacts but also positive impacts on people's lives"],
      correct: "Technology not only has negative but also positive impacts on people's lives.",
      explanation: "Cấu trúc \"both A and B\" (cả A và B) có thể chuyển thành \"<b>not only A but also B</b>\" (không những A mà còn B) — cùng diễn tả hai điều cùng đúng.<br>→ <i>Technology not only has negative but also positive impacts on people's lives.</i>"
    }
  ]
};
