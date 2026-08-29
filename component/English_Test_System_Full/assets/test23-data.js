const TEST = {
  id: "test23",
  grade: "Grade 9 — Global Success",
  unit: "Unit 6: Vietnamese lifestyle: then and now",
  title: "Grade 9 · Unit 6: Vietnamese lifestyle: then and now · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test23.html",
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
    { id: "VI", title: "Look at the dictionary entry of “lifestyle”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    materialsCloze: "Vietnamese people used to rely (17) ________ natural materials for their daily lives and farming tools. Items made of bamboo or wood were common and were often passed down in families. These traditional farming tools helped with planting and harvesting crops. (18) ________, modern technology has changed this way of life. Today, farmers use (19) ________ machines that make their work easier and faster. Because of these machines, they can grow more food in less time. (20) ________, many homes are now built with concrete and bricks instead of wood, (21) ________ can be stronger but may also harm the environment. Although these changes have improved (22) ________, they also raise questions about sustainability and the loss of traditional skills.",
    lifestyleReading: "Traditional and Modern Lifestyles of Vietnamese People\n\nThe lifestyle of Vietnamese people has undergone significant changes from the past to the present. In the past, many families relied on traditional agriculture, using simple farming tools and often riding buffaloes to help their parents in the fields. Family values were highly emphasized, with extended families living together and supporting one another.\n\nToday, life has become more modern with the advent of electronic devices. Students now have more opportunities to learn and connect through the internet, allowing for greater independence in their lives. However, Vietnamese people still maintain healthy eating habits and often enjoy outdoor activities to stay fit. Although lifestyles have changed, family values and strong connections remain vital aspects of Vietnamese culture.",
    lifestyleEntry: {
      word: "lifestyle", ipa: "/ˈlaɪfstaɪl/", pos: "noun",
      def: "the way in which a person or a group of people lives and works",
      examples: [
        "Regular exercise and a balanced diet are key to a <b>healthy lifestyle</b>.",
        "Office workers are often at risk of developing a <b>sedentary lifestyle</b>.",
        "She enjoys an <b>active lifestyle</b>, spending her weekends hiking and swimming.",
        "Stress is a common problem in our fast-paced <b>modern lifestyle</b>.",
        "The doctor advised him to <b>change his lifestyle</b> after the heart scare."
      ]
    }
  },
  images: {
    signNoPets: "assets/images/sign_no_pets.jpg",
    signMovieNight: "assets/images/sign_movie_night_special.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "feature", B: "culture", C: "tradition", D: "statue" },
      correct: "C",
      explanation: "Phần gạch chân là chữ \"t\" trong tổ hợp \"t + u/i\". \"feature\" /ˈfiːtʃər/, \"culture\" /ˈkʌltʃər/, \"statue\" /ˈstætʃuː/ đều có \"t\" phát âm là <b>/tʃ/</b>. Riêng \"tradition\" /trəˈdɪʃn/ có \"t\" (trong \"ti\") phát âm là <b>/ʃ/</b> (không có âm /t/ đi kèm) → khác biệt, đáp án C."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "sculpture", B: "structure", C: "measure", D: "plumber" },
      correct: "C",
      explanation: "Phần gạch chân là chữ \"u\". \"sculpture\" /ˈskʌlptʃər/, \"structure\" /ˈstrʌktʃər/, \"plumber\" /ˈplʌmər/ đều có \"u\" phát âm là <b>/ʌ/</b>. Riêng \"measure\" /ˈmeʒər/ có \"u\" không tạo thành âm riêng biệt mà hòa vào tổ hợp \"-sure\" (/ʒər/) → khác biệt, đáp án C."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "extended", B: "amazing", C: "dependent", D: "memorize" },
      correct: "D",
      explanation: "\"extended\" /ɪkˈstendɪd/, \"amazing\" /əˈmeɪzɪŋ/, \"dependent\" /dɪˈpendənt/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"memorize\" /ˈmeməraɪz/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án D."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "lifestyle", B: "freedom", C: "western", D: "pursue" },
      correct: "D",
      explanation: "\"lifestyle\" /ˈlaɪfstaɪl/, \"freedom\" /ˈfriːdəm/, \"western\" /ˈwestərn/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"pursue\" /pərˈsuː/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"What did the teacher say about our project?\"",
      prompt: "Lan: \"He suggested ________ our learning style to improve our grades.\"",
      display: { A: "to changing", B: "change", C: "changing", D: "to change" },
      correct: "C",
      explanation: "Cấu trúc \"suggest + V-ing\" (đề nghị làm gì): \"He suggested <b>changing</b> our learning style.\""
    },
    { id: 6, section: "I", type: "mcq",
      context: "Father: \"Why are the kids so tired today?\"",
      prompt: "Mother: \"I suggested the children ________ to bed early, but they stayed up late.\"",
      display: { A: "should go", B: "going", C: "to go", D: "to going" },
      correct: "A",
      explanation: "Cấu trúc \"suggest + (that) + S + (should) + V (nguyên mẫu)\": \"I suggested the children <b>should go</b> to bed early.\""
    },
    { id: 7, section: "I", type: "mcq",
      context: "Minh: \"Is your brother enjoying living alone in the city?\"",
      prompt: "An: \"Yes, he agreed ________ more independent after moving out.\"",
      display: { A: "to become", B: "becoming", C: "become", D: "to becoming" },
      correct: "A",
      explanation: "Cấu trúc \"agree + to V\" (đồng ý làm gì): \"he agreed <b>to become</b> more independent.\""
    },
    { id: 8, section: "I", type: "mcq",
      context: "Stranger: \"Does this school have good equipment for science?\"",
      prompt: "Student: \"Yes, our school has modern ________ like computer labs and science rooms.\"",
      display: { A: "family values", B: "professional trainings", C: "learning facilities", D: "eating habits" },
      correct: "C",
      explanation: "\"modern <b>learning facilities</b>\" (cơ sở vật chất học tập hiện đại) phù hợp với \"computer labs and science rooms\"."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Long: \"What do you usually do with your friends during Tet?\"",
      prompt: "Hoa: \"We often play ________ games like tug-of-war.\"",
      display: { A: "various", B: "traditional", C: "different", D: "family" },
      correct: "B",
      explanation: "\"<b>traditional</b> games like tug-of-war\" (trò chơi truyền thống như kéo co) phù hợp với ngữ cảnh chơi vào dịp Tết."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Guide: \"Why is this museum tour important for teenagers?\"",
      prompt: "Staff: \"It is necessary for young people ________ about our history.\"",
      display: { A: "known", B: "knowing", C: "know", D: "to know" },
      correct: "D",
      explanation: "Cấu trúc \"it is necessary for sb + to V\" (cần thiết cho ai làm gì): \"It is necessary for young people <b>to know</b> about our history.\""
    },
    { id: 11, section: "I", type: "mcq",
      context: "Nam: \"My grandpa still likes reading paper news, but I only use TikTok.\"",
      prompt: "Ba: \"That's a clear example of a ________ in your family.\"",
      display: { A: "attitude", B: "generation gap", C: "mass communication", D: "conflict" },
      correct: "B",
      explanation: "\"a <b>generation gap</b>\" (khoảng cách thế hệ) phù hợp với sự khác biệt về thói quen giữa ông và cháu."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Teacher: \"You forgot your textbook again, Adam.\"",
      prompt: "Adam: \"I'm sorry. I promise not to leave my textbook at home again.\" — Teacher: \"________\"",
      display: { A: "You have to remember.", B: "Why do you do?", C: "Great! I appreciate it.", D: "No, you won't forget it." },
      correct: "A",
      explanation: "\"<b>You have to remember.</b>\" là lời nhắc nhở tự nhiên của giáo viên sau lời hứa của học sinh, nhấn mạnh việc cần ghi nhớ."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Chris: \"Happy New Year, Nam! Have a great time with your family!\"",
      prompt: "Nam: \"________\"",
      display: { A: "I've no idea.", B: "OK, we do, too.", C: "What's happening?", D: "Thanks! The same to you!" },
      correct: "D",
      explanation: "\"<b>Thanks! The same to you!</b>\" là cách đáp lại lời chúc mừng năm mới một cách tự nhiên và lịch sự."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Son: \"Mom, can I go to the cinema with my friends tonight?\"",
      prompt: "Mother: \"________\"",
      display: { A: "Yes, the tickets are quite cheap.", B: "I like watching action movies.", C: "The cinema is very far from here.", D: "No, you must finish your homework first." },
      correct: "D",
      explanation: "\"<b>No, you must finish your homework first.</b>\" là câu trả lời hợp lý nhất của phụ huynh trước yêu cầu đi chơi của con."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoPets",
      prompt: "What does this sign tell you?",
      display: {
        A: "Only big pets are allowed; small pets are not allowed.",
        B: "Only pets with short fur are allowed here.",
        C: "Pets and other animals are not allowed here.",
        D: "No pets are allowed here unless you have permission."
      },
      correct: "C",
      explanation: "Biển vẽ hình con chó và con mèo bị gạch chéo → cấm mang thú cưng và các động vật khác vào khu vực này, đáp án C."
    },
    { id: 16, section: "II", type: "mcq", image: "signMovieNight",
      prompt: "What does this notice mean?",
      display: {
        A: "Cheap tickets are available for groups of four in the evenings.",
        B: "You can watch up to four films for free.",
        C: "The fifth ticket is free if you buy four.",
        D: "You must buy 5 tickets to get it free."
      },
      correct: "C",
      explanation: "Biển ghi \"BUY 4 TICKETS — GET THE 5TH FREE!\" → mua 4 vé được tặng vé thứ 5 miễn phí, đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "materialsCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "on", B: "in", C: "with", D: "for" },
      correct: "A",
      explanation: "\"rely <b>on</b> natural materials\" — cụm cố định \"rely on\" (phụ thuộc vào, dựa vào)."
    },
    { id: 18, section: "III", type: "mcq", passage: "materialsCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "Therefore", B: "Although", C: "Moreover", D: "However" },
      correct: "D",
      explanation: "\"<b>However</b>, modern technology has changed this way of life\" — thể hiện sự tương phản với ý trước đó về công cụ truyền thống."
    },
    { id: 19, section: "III", type: "mcq", passage: "materialsCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "advanced", B: "ancient", C: "old-fashioned", D: "standard" },
      correct: "A",
      explanation: "\"<b>advanced</b> machines that make their work easier and faster\" — \"advanced\" (tiên tiến) phù hợp với máy móc hiện đại."
    },
    { id: 20, section: "III", type: "mcq", passage: "materialsCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "Similarly", B: "Furthermore", C: "Unfortunately", D: "Finally" },
      correct: "B",
      explanation: "\"<b>Furthermore</b>, many homes are now built with concrete and bricks\" — bổ sung thêm một thay đổi khác trong đời sống."
    },
    { id: 21, section: "III", type: "mcq", passage: "materialsCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "that", B: "who", C: "which", D: "whom" },
      correct: "C",
      explanation: "Đại từ quan hệ \"<b>which</b>\" đứng sau dấu phẩy, thay thế cho cả mệnh đề trước (mệnh đề quan hệ không xác định)."
    },
    { id: 22, section: "III", type: "mcq", passage: "materialsCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "activity", B: "quantity", C: "productivity", D: "security" },
      correct: "C",
      explanation: "\"these changes have improved <b>productivity</b>\" — \"productivity\" (năng suất) phù hợp với việc trồng được nhiều lương thực hơn trong thời gian ngắn hơn."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "lifestyleReading",
      prompt: "In the past, Vietnamese families used advanced machinery for farming.",
      correct: "False",
      explanation: "Sai. Bài đọc: gia đình xưa \"using <b>simple farming tools</b> and often riding buffaloes\", không phải máy móc hiện đại."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "lifestyleReading",
      prompt: "Extended families used to live together under one roof to support each other.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"with <b>extended families living together and supporting one another</b>.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "lifestyleReading",
      prompt: "The internet helps modern Vietnamese students become more independent.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Students now have more opportunities to learn and connect through the internet, allowing for <b>greater independence</b>.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "lifestyleReading",
      prompt: "Vietnamese people today no longer care about traditional family values.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"family values and strong connections <b>remain vital aspects</b> of Vietnamese culture\" — vẫn được coi trọng."
    },
    { id: 27, section: "IV", type: "mcq", passage: "lifestyleReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The history of traditional agriculture in Vietnam.",
        B: "The negative impacts of electronic devices on Vietnamese youth.",
        C: "The changes and continuity in Vietnamese lifestyles over time.",
        D: "The importance of outdoor activities for Vietnamese people."
      },
      correct: "C",
      explanation: "Bài đọc trình bày cả sự thay đổi và những giá trị vẫn được duy trì trong lối sống của người Việt qua thời gian → đáp án C bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "lifestyleReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Modern electronic devices have changed how Vietnamese people live.",
        B: "Vietnamese people nowadays prefer fast food over healthy eating habits.",
        C: "Children in the past used to help their parents in the fields.",
        D: "Family values are still an essential part of Vietnamese culture today."
      },
      correct: "B",
      explanation: "Bài đọc nói ngược lại: \"Vietnamese people still maintain <b>healthy eating habits</b>\" — vẫn duy trì thói quen ăn uống lành mạnh, không ưa chuộng đồ ăn nhanh → câu B SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Vietnamese teenagers have become more ______________ in communicating with others.",
      wordGiven: "confidence", accepted: ["confident"], correct: "confident",
      explanation: "Cần tính từ làm bổ ngữ sau \"more\". <b>confidence</b> (n) → <b>confident</b> (adj, tự tin)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Many ______________ and traditions are passed from generation to generation.",
      wordGiven: "customary", accepted: ["customs"], correct: "customs",
      explanation: "Cần danh từ số nhiều làm chủ ngữ. <b>customary</b> (adj) → <b>customs</b> (n, phong tục)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The ______________ of Vietnamese lifestyle can be seen in teenagers' fashion.",
      wordGiven: "differ", accepted: ["difference"], correct: "difference",
      explanation: "Cần danh từ làm chủ ngữ của câu. <b>differ</b> (v) → <b>difference</b> (n, sự khác biệt)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "My grandfather prefers ______________ farming methods to modern ones.",
      wordGiven: "tradition", accepted: ["traditional"], correct: "traditional",
      explanation: "Cần tính từ đứng trước danh từ \"farming methods\". <b>tradition</b> (n) → <b>traditional</b> (adj, truyền thống)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Nowadays, many farmers use ______________ tools to improve their productivity.",
      wordGiven: "technology", accepted: ["technological"], correct: "technological",
      explanation: "Cần tính từ đứng trước danh từ \"tools\". <b>technology</b> (n) → <b>technological</b> (adj, thuộc về công nghệ)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "Teenagers often ask for ______________ from their parents before making decisions.",
      wordGiven: "permit", accepted: ["permission"], correct: "permission",
      explanation: "Cần danh từ làm tân ngữ của \"ask for\". <b>permit</b> (v) → <b>permission</b> (n, sự cho phép)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "lifestyleEntry",
      prompt: "Because he has an ___________________, he never stays home for long and is always at the gym or outdoors.",
      accepted: ["active lifestyle"], correct: "active lifestyle",
      explanation: "Từ điển cho ví dụ \"She enjoys an <b>active lifestyle</b>, spending her weekends hiking and swimming.\" — khớp với ngữ cảnh luôn ở phòng gym hoặc ngoài trời."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "lifestyleEntry",
      prompt: "Many people find it difficult to relax because of the constant pressure of a ___________________.",
      accepted: ["modern lifestyle"], correct: "modern lifestyle",
      explanation: "Từ điển cho ví dụ \"Stress is a common problem in our fast-paced <b>modern lifestyle</b>.\" — khớp với ngữ cảnh áp lực khiến khó thư giãn."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "The last time I visited my grandparents was a year ago.",
      starter: "I haven't",
      accepted: ["i haven't visited my grandparents for a year"],
      correct: "I haven't visited my grandparents for a year.",
      explanation: "\"The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago\" có nghĩa tương đương với \"<b>S + haven't/hasn't + V3 + for + khoảng thời gian</b>\".<br>→ <i>I haven't visited my grandparents for a year.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "My brother really likes to own a cat.",
      starter: "My brother wishes",
      accepted: ["my brother wishes he owned a cat"],
      correct: "My brother wishes he owned a cat.",
      explanation: "Mong muốn về một điều không có thật ở hiện tại được diễn đạt bằng \"<b>wish + S + V(quá khứ đơn)</b>\".<br>→ <i>My brother wishes he owned a cat.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "No other house in the village is older than this one.",
      starter: "This house is",
      accepted: ["this house is the oldest in the village"],
      correct: "This house is the oldest in the village.",
      explanation: "\"No other + N + is + so sánh hơn + than\" có nghĩa tương đương với \"<b>so sánh nhất</b>\" (superlative).<br>→ <i>This house is the oldest in the village.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "He spent two hours fixing the traditional plow.",
      starter: "It took",
      accepted: ["it took him two hours to fix the traditional plow"],
      correct: "It took him two hours to fix the traditional plow.",
      explanation: "\"S + spend + khoảng thời gian + V-ing\" có nghĩa tương đương với \"<b>It + takes/took + O + khoảng thời gian + to V</b>\".<br>→ <i>It took him two hours to fix the traditional plow.</i>"
    }
  ]
};
