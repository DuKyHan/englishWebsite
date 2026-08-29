const TEST = {
  id: "test22",
  grade: "Grade 9 — Global Success",
  unit: "Unit 5: Our experiences",
  title: "Grade 9 · Unit 5: Our experiences · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test22.html",
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
    { id: "VI", title: "Look at the dictionary entry of “common”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    bullyingCloze: "Secondary school was not a fun time for me due to my terrible experience of being bullied. It started with some teasing and name-calling, but then it got more (17) ________ with physical violence. There were a few times when I tried to fight back the bullies, but I always ended up getting hurt because they were bigger and stronger than me. The worst part was that none of my peers ever stepped (18) ________ to help me, which made me feel so alone and helpless. After a long time of suffering alone and keeping silent, I (19) ________ sought help from my parents. It took a lot of courage for me to tell them what was going on, but I'm glad I did. They immediately contacted the school and demanded that they take (20) ________ against the bullies. Finally, something was done, and the bullying stopped. Looking back, I just (21) ________ I had spoken up sooner. I also think the school could have done a better job of (22) ________ with the issue. Nowadays, there are more methods available for addressing bullying, and I hope that no one else has to go through what I went through.",
    experiencesReading: "Experiences are the things we do and feel in our lives. They help us understand ourselves and the world better. Reflecting on these experiences helps us grow. One of my favorite experiences is traveling. Every trip brings new adventures. For example, when I visited a small village, I got to taste local foods and take part in their traditions. Riding horses and snorkeling were exciting. Watching a tribal dance and seeing beautiful coral reefs made me appreciate the diversity of our world. Traveling teaches us a lot. It helps us learn about different cultures and ways of life. Meeting new people and exploring new places make us more open-minded and understanding. Another key part of my experiences is dealing with challenges. I remember a difficult school project that required a lot of work and teamwork. It was hard, but finishing it made me feel proud. This experience taught me to keep trying, even when things are tough, and gave me confidence to face new challenges. Even small daily activities are important experiences. Working on group projects, helping others, and talking with friends all teach us something. For example, attending workshops on communication and teamwork has made me better at working with others and more confident. In conclusion, our experiences shape who we are. They help us grow, understand ourselves, and connect with others. Every experience, big or small, makes our lives richer.",
    commonEntry: {
      word: "common", ipa: "/ˈkɒmən/", pos: "adjective",
      def: "happening often; existing in large numbers or in many places",
      examples: [
        "It's <b>common practice</b> in many companies to give employees a bonus at Christmas.",
        "Jackson is a very <b>common name</b> in this part of the country.",
        "Back pain is a <b>common problem</b> for office workers.",
        "These birds are a <b>common sight</b> in our garden during the summer.",
        "They found <b>common ground</b> on the need for better education."
      ]
    }
  },
  images: {
    signHygieneNotice: "assets/images/sign_hygiene_notice.jpg",
    signBogoIcecream: "assets/images/sign_bogo_icecream.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "where", B: "website", C: "answer", D: "away" },
      correct: "C",
      explanation: "Phần gạch chân là chữ cái \"w\". \"where\" /w/, \"website\" /w/, \"away\" /w/ đều có \"w\" phát âm là phụ âm <b>/w/</b>. Riêng \"answer\" /ˈænsər/ có \"w\" <b>câm</b>, không phát âm → khác biệt, đáp án C."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "beauty", B: "entry", C: "easy", D: "supply" },
      correct: "D",
      explanation: "Phần gạch chân là chữ cái \"y\" ở cuối từ. \"beauty\" /ˈbjuːti/, \"entry\" /ˈentri/, \"easy\" /ˈiːzi/ đều có \"y\" phát âm là <b>/i/</b>. Riêng \"supply\" /səˈplaɪ/ có \"y\" phát âm là <b>/aɪ/</b> (có trọng âm) → khác biệt, đáp án D."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "begin", B: "answer", C: "common", D: "message" },
      correct: "A",
      explanation: "\"answer\" /ˈænsər/, \"common\" /ˈkɒmən/, \"message\" /ˈmesɪdʒ/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"begin\" /bɪˈɡɪn/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "invention", B: "traveller", C: "exciting", D: "relaxing" },
      correct: "B",
      explanation: "\"invention\" /ɪnˈvenʃn/, \"exciting\" /ɪkˈsaɪtɪŋ/, \"relaxing\" /rɪˈlæksɪŋ/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"traveller\" /ˈtrævələr/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Nick: \"I'm very sorry. I didn't know this is your seat.\"",
      prompt: "Mi: \"________\"",
      display: { A: "Give it back", B: "That's very careless", C: "That's okay. I'll sit in another one", D: "You can go" },
      correct: "C",
      explanation: "\"<b>That's okay. I'll sit in another one</b>\" là cách đáp lại lời xin lỗi một cách lịch sự và nhẹ nhàng, thể hiện sự thông cảm."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Nam: \"What was the most thrilling part of your trip to the coast?\"",
      prompt: "Lan: \"Definitely the ________! We saw so many colorful fish and coral reefs.\"",
      display: { A: "stream", B: "snorkeling", C: "campsite", D: "yearbook" },
      correct: "B",
      explanation: "\"<b>snorkeling</b>\" (lặn ống thở) là hoạt động giúp nhìn thấy cá và rạn san hô đầy màu sắc."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Teacher: \"Have you ever researched ________ cultures, Class?\"",
      prompt: "Student: \"Yes, we are studying how people lived thousands of years ago.\"",
      display: { A: "army", B: "amazing", C: "soft skill", D: "prehistoric" },
      correct: "D",
      explanation: "\"<b>prehistoric</b> cultures\" (các nền văn hóa tiền sử) phù hợp với việc nghiên cứu cách con người sống hàng nghìn năm trước."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Peter: \"How did you feel when you couldn't help your friend with his project?\"",
      prompt: "Tom: \"I felt quite ________. I really wanted to do something for him.\"",
      display: { A: "thrilling", B: "aware", C: "helpless", D: "ethnic" },
      correct: "C",
      explanation: "\"felt quite <b>helpless</b>\" (cảm thấy bất lực) phù hợp với việc không thể giúp đỡ bạn mình."
    },
    { id: 9, section: "I", type: "mcq",
      context: "An: \"Have you ________ your homework for the 'Our Experiences' unit yet?\"",
      prompt: "Ba: \"Yes, I finished it just in time for dinner.\"",
      display: { A: "have finished", B: "finished", C: "finishes", D: "has finished" },
      correct: "B",
      explanation: "Đây là dạng rút gọn động từ trong câu hỏi \"Have you ________...\", cần động từ nguyên mẫu ở dạng quá khứ phân từ để hoàn thành thì hiện tại hoàn thành: \"Have you <b>finished</b> your homework...yet?\""
    },
    { id: 10, section: "I", type: "mcq",
      context: "Mom: \"You look happy! Have you heard from your cousins lately?\"",
      prompt: "Hoa: \"Yes, I ________ them several times since the beginning of the year.\"",
      display: { A: "visits", B: "has visited", C: "visited", D: "have visited" },
      correct: "D",
      explanation: "\"since the beginning of the year\" (mốc thời gian bắt đầu) đi với chủ ngữ \"I\" → dùng <b>hiện tại hoàn thành</b>: \"I <b>have visited</b> them several times since...\""
    },
    { id: 11, section: "I", type: "mcq",
      context: "Lan: \"Why was the house so quiet when you arrived?\"",
      prompt: "Minh: \"The children ________ to bed before their parents came home.\"",
      display: { A: "have all gone", B: "were all going", C: "all went", D: "had all gone" },
      correct: "D",
      explanation: "Hành động xảy ra trước một hành động khác trong quá khứ (\"came home\") → dùng <b>quá khứ hoàn thành</b>: \"The children <b>had all gone</b> to bed before their parents came home.\""
    },
    { id: 12, section: "I", type: "mcq",
      context: "Guide: \"How did you find the ________ of the ancient city we visited yesterday?\"",
      prompt: "Tourist: \"It was incredible! The old buildings and atmosphere were so special.\"",
      display: { A: "atmosphere", B: "unpleasant", C: "activity", D: "special" },
      correct: "A",
      explanation: "\"the <b>atmosphere</b> of the ancient city\" (bầu không khí của thành phố cổ) là cách diễn đạt tự nhiên nhất, khớp với câu trả lời sau đó."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Linh: \"I'm a bit nervous about the team-building activities tomorrow.\"",
      prompt: "Mai: \"________ you participate actively, you'll find them very fun.\"",
      display: { A: "Unless", B: "Although", C: "Despite", D: "If" },
      correct: "D",
      explanation: "\"<b>If</b> you participate actively, you'll find them very fun\" — mệnh đề điều kiện loại 1, diễn tả điều kiện có thể xảy ra ở hiện tại/tương lai."
    },
    { id: 14, section: "I", type: "mcq",
      context: "John: \"Look! This notice says there's a talk by a career expert on November 5th.\"",
      prompt: "Mary: \"Great! I hope the ________ will share some helpful tips for our future.\"",
      display: { A: "greatly", B: "greatness", C: "great", D: "speaker" },
      correct: "D",
      explanation: "Cần danh từ chỉ người làm chủ ngữ của \"will share\". \"the <b>speaker</b>\" (diễn giả) là người sẽ chia sẻ về buổi nói chuyện."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signHygieneNotice",
      prompt: "What does this sign tell you?",
      display: {
        A: "Wash your hands only if they look dirty before eating.",
        B: "Wash your hands before you eat to keep everything clean and safe.",
        C: "It is fine to eat without washing your hands first.",
        D: "Wash your hands after eating, not before you start."
      },
      correct: "B",
      explanation: "Biển ghi \"WASH YOUR HANDS BEFORE EATING. KEEP EVERYTHING CLEAN AND SAFE.\" → rửa tay trước khi ăn để giữ mọi thứ sạch sẽ và an toàn, đáp án B."
    },
    { id: 16, section: "II", type: "mcq", image: "signBogoIcecream",
      prompt: "What does this notice mean?",
      display: {
        A: "The ice cream shop is open for only 2 hours.",
        B: "You can get free ice cream all afternoon without buying anything.",
        C: "Two ice creams will cost the same as one during this afternoon.",
        D: "You can buy all the ice creams with no cost."
      },
      correct: "C",
      explanation: "Biển ghi \"BUY 1 GET 1 FREE ON ALL ICE CREAMS — THIS AFTERNOON ONLY\" → mua 1 tặng 1, nghĩa là mua hai que kem chỉ trả tiền như một, đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "bullyingCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "heavy", B: "serious", C: "hard", D: "strict" },
      correct: "B",
      explanation: "\"it got more <b>serious</b> with physical violence\" — \"serious\" (nghiêm trọng) phù hợp với việc tình trạng bắt nạt leo thang."
    },
    { id: 18, section: "III", type: "mcq", passage: "bullyingCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "up", B: "down", C: "out", D: "back" },
      correct: "A",
      explanation: "\"stepped <b>up</b> to help me\" — cụm động từ cố định \"step up\" (đứng ra, hành động để giúp đỡ)."
    },
    { id: 19, section: "III", type: "mcq", passage: "bullyingCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "final", B: "finally", C: "finalise", D: "finalised" },
      correct: "B",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"sought\". <b>final</b> (adj) → <b>finally</b> (adv, cuối cùng)."
    },
    { id: 20, section: "III", type: "mcq", passage: "bullyingCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "action", B: "control", C: "care", D: "attention" },
      correct: "A",
      explanation: "\"take <b>action</b> against the bullies\" — cụm cố định \"take action against\" (có biện pháp/hành động chống lại)."
    },
    { id: 21, section: "III", type: "mcq", passage: "bullyingCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "hope", B: "want", C: "wish", D: "expect" },
      correct: "C",
      explanation: "\"I just <b>wish</b> I had spoken up sooner\" — \"wish + had + V3\" diễn tả sự tiếc nuối về quá khứ."
    },
    { id: 22, section: "III", type: "mcq", passage: "bullyingCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "solving", B: "treating", C: "facing", D: "dealing" },
      correct: "D",
      explanation: "\"a better job of <b>dealing</b> with the issue\" — cụm cố định \"deal with\" (xử lý, đối phó với)."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "experiencesReading",
      prompt: "Traveling allows people to learn about different traditions and cultures.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Traveling teaches us a lot. It helps us learn about <b>different cultures and ways of life</b>.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "experiencesReading",
      prompt: "The author thinks that only big, unusual events can be considered important experiences.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"<b>Even small daily activities</b> are important experiences\" — trải nghiệm nhỏ hằng ngày cũng quan trọng."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "experiencesReading",
      prompt: "The author felt proud after successfully finishing a difficult school project.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"It was hard, but finishing it <b>made me feel proud</b>.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "experiencesReading",
      prompt: "Attending workshops made the author feel less confident when interacting with others.",
      correct: "False",
      explanation: "Sai. Bài đọc: attending workshops \"has made me better at working with others and <b>more confident</b>\" — tự tin hơn, không phải kém tự tin hơn."
    },
    { id: 27, section: "IV", type: "mcq", passage: "experiencesReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "Traveling is the only way for people to become more open-minded.",
        B: "School projects and workshops are the most important parts of education.",
        C: "All experiences, from big adventures to daily activities, help us grow and shape who we are.",
        D: "Overcoming professional challenges is necessary to build self-confidence."
      },
      correct: "C",
      explanation: "Bài đọc kết luận: \"our experiences shape who we are... Every experience, big or small, makes our lives richer\" → đáp án C bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "experiencesReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "The author tried snorkeling and horse riding during a trip.",
        B: "The author believes that thinking back on what we experience helps us grow.",
        C: "Meeting new people helps us understand different ways of life.",
        D: "The author gave up on a difficult school project because it required too much teamwork."
      },
      correct: "D",
      explanation: "Bài đọc nói ngược lại: tác giả đã <b>hoàn thành</b> dự án khó khăn đó (\"finishing it made me feel proud\"), không hề bỏ cuộc → câu D SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "My trip to the national park was an ______________ experience.",
      wordGiven: "amaze", accepted: ["amazing"], correct: "amazing",
      explanation: "Cần tính từ đứng trước danh từ \"experience\". <b>amaze</b> (v) → <b>amazing</b> (adj, +ing, tuyệt vời)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The students participated in a ______________ activity to improve their teamwork.",
      wordGiven: "build", accepted: ["building"], correct: "building",
      explanation: "Cần tính từ/danh động từ đứng trước danh từ \"activity\". <b>build</b> (v) → <b>building</b> (dùng như tính từ trong \"team-building activity\")."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "We felt very ______________ after a long day of hiking in the mountains.",
      wordGiven: "relax", accepted: ["relaxed"], correct: "relaxed",
      explanation: "Cần tính từ làm bổ ngữ sau \"felt\". <b>relax</b> (v) → <b>relaxed</b> (adj, +ed, cảm thấy thư giãn)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The ______________ of the new communication tool has changed how we share experiences.",
      wordGiven: "invent", accepted: ["invention"], correct: "invention",
      explanation: "Cần danh từ làm chủ ngữ của câu. <b>invent</b> (v) → <b>invention</b> (n, +ion, sự phát minh)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "She gave an ______________ speech about her journey to Africa.",
      wordGiven: "excite", accepted: ["exciting"], correct: "exciting",
      explanation: "Cần tính từ đứng trước danh từ \"speech\". <b>excite</b> (v) → <b>exciting</b> (adj, +ing, thú vị, hào hứng)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The teacher provided a lot of ______________ for the students to speak up.",
      wordGiven: "encourage", accepted: ["encouragement"], correct: "encouragement",
      explanation: "Cần danh từ làm tân ngữ của \"provided\". <b>encourage</b> (v) → <b>encouragement</b> (n, +ment, sự khích lệ)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "commonEntry",
      prompt: "\"Smith\" is such a ___________________ that it can be difficult to find the right person in the phone book.",
      accepted: ["common name"], correct: "common name",
      explanation: "Từ điển cho ví dụ \"Jackson is a very <b>common name</b> in this part of the country.\" — khớp với ngữ cảnh tên phổ biến, khó tìm đúng người."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "commonEntry",
      prompt: "In this coastal town, seeing fishing boats return in the evening is a ___________________.",
      accepted: ["common sight"], correct: "common sight",
      explanation: "Từ điển cho ví dụ \"These birds are a <b>common sight</b> in our garden during the summer.\" — khớp với ngữ cảnh hình ảnh quen thuộc, thường thấy."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "The last time Mai travelled to Europe was two years ago.",
      starter: "It has been",
      accepted: ["it has been two years since mai last travelled to europe"],
      correct: "It has been two years since Mai last travelled to Europe.",
      explanation: "\"The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago\" có thể viết lại bằng \"<b>It has been + khoảng thời gian + since + S + last + V(quá khứ đơn)</b>\".<br>→ <i>It has been two years since Mai last travelled to Europe.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "George and his friends haven't phoned each other since last night.",
      starter: "George and his friends last",
      accepted: ["george and his friends last phoned each other last night"],
      correct: "George and his friends last phoned each other last night.",
      explanation: "\"S + haven't/hasn't + V3 + since + mốc thời gian\" có thể viết lại bằng \"<b>S + last + V(quá khứ đơn) + mốc thời gian</b>\".<br>→ <i>George and his friends last phoned each other last night.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "At first, they were unable to speak or write a full simple sentence.",
      starter: "At first, they couldn't",
      accepted: ["at first, they couldn't speak or write a full simple sentence", "at first they couldn't speak or write a full simple sentence"],
      correct: "At first, they couldn't speak or write a full simple sentence.",
      explanation: "\"be unable to + V\" có nghĩa tương đương với \"<b>couldn't + V</b>\" (không thể làm gì) ở thì quá khứ.<br>→ <i>At first, they couldn't speak or write a full simple sentence.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "I asked them to revise every unit of their textbook.",
      starter: "I suggested that",
      accepted: ["i suggested that they should revise every unit of their textbook", "i suggested that they revise every unit of their textbook"],
      correct: "I suggested that they (should) revise every unit of their textbook.",
      explanation: "\"ask sb to V\" (yêu cầu ai làm gì) có thể viết lại bằng cấu trúc câu đề nghị \"<b>suggest that + S + (should) + V(nguyên mẫu)</b>\".<br>→ <i>I suggested that they (should) revise every unit of their textbook.</i>"
    }
  ]
};
