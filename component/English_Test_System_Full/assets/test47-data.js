const TEST = {
  id: "test47",
  grade: "Grade 7 — Global Success",
  unit: "Unit 6: A Visit to a School",
  title: "Grade 7 · Unit 6: A Visit to a School · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test47.html",
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
    { id: "VI", title: "Look at the dictionary entry of “classmate”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    harvardCloze: "Harvard is the oldest institution of higher education in the United States, established (17) ________ 1636. It was named after John Harvard, (18) ________ left his library and half his estate to the institution. A statue of John Harvard stands today in front of University Hall in Harvard Yard, and it is (19) ________ the University's best known landmark. The University has grown from nine students with a single master to an enrolment of more than 20,000 degree candidates including undergraduate, graduate, and professional students. There are (20) ________ than 360,000 living alumni in the U.S. and over 190 other countries. Alumni of Harvard (21) ________ eight U.S. presidents, more than thirty foreign heads of state and 62 living billionaires. Harvard students and alumni have won 158 Nobel Prizes, 10 Academy Awards, 48 Pulitzer Prizes, 108 Olympic medals, and have (22) ________ many companies worldwide.",
    oxfordReading: "The University of Oxford is located in Oxford, England. It is the oldest university in the English-speaking world and the world's second oldest university. The oldest one is the University of Bologna in Italy. The history and influence of the University of Oxford have made it one of the most prestigious universities in the world. The university is made up of 39 colleges and a range of academic departments, which are organised into four divisions. They are the Humanities Division; the Social Sciences Division; the Mathematical, Physical and Life Sciences Division; and the Medical Sciences Division. It operates the world's oldest university museum, as well as the largest university press in the world. The university is considered as among the best higher learning institutions. Students come to Oxford from more than 150 countries and territories. Oxford has educated many notable alumni, including 160 Olympic gold medal winners, 69 Nobel Prize winners, 28 prime ministers of the United Kingdom and many heads of state and government around the world. Oxford is the home of numerous scholarships, including the Rhodes Scholarship, which is one of the oldest international graduate scholarship programmes.",
    classmateEntry: {
      word: "classmate", ipa: "/ˈklɑːsmeɪt/", pos: "noun",
      def: "a person who is in the same class as you at school or college.",
      examples: [
        "I met an <b>old classmate</b> at the supermarket yesterday.",
        "She is a <b>former classmate</b> of mine from high school.",
        "You should always <b>help a classmate</b> if they don't understand the lesson."
      ]
    }
  },
  images: {
    noticeFamilyPicnicPark: "assets/images/notice_family_picnic_park.jpg",
    signDoNotEnterLab: "assets/images/sign_do_not_enter_lab.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "receive", B: "consider", C: "academy", D: "locate" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"c\". \"consider\" /kənˈsɪdər/, \"academy\" /əˈkædəmi/, \"locate\" /loʊˈkeɪt/ đều có \"c\" phát âm là <b>/k/</b>. Riêng \"receive\" /rɪˈsiːv/ có \"c\" phát âm là <b>/s/</b> → khác biệt, đáp án A."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "school", B: "much", C: "child", D: "watch" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"ch\". \"much\" /mʌtʃ/, \"child\" /tʃaɪld/, \"watch\" /wɒtʃ/ đều có \"ch\" phát âm là <b>/tʃ/</b>. Riêng \"school\" /skuːl/ có \"ch\" phát âm là <b>/k/</b> → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "member", B: "exam", C: "building", D: "service" },
      correct: "B",
      explanation: "\"member\" /ˈmembər/, \"building\" /ˈbɪldɪŋ/, \"service\" /ˈsɜːrvɪs/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"exam\" /ɪɡˈzæm/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "computer", B: "badminton", C: "festival", D: "resident" },
      correct: "A",
      explanation: "\"badminton\" /ˈbædmɪntən/, \"festival\" /ˈfestɪvl/, \"resident\" /ˈrezɪdənt/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"computer\" /kəmˈpjuːtər/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"To perform well in the sports festival, what should we do, Mary?\"",
      prompt: "Mary: \"In order to keep __________, you should eat well and exercise regularly.\"",
      display: { A: "quiet", B: "healthy", C: "excited", D: "warm" },
      correct: "B",
      explanation: "\"keep <b>healthy</b>\" (giữ gìn sức khỏe) phù hợp với việc ăn uống điều độ và tập thể dục thường xuyên."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Peter: \"Where will we meet Henry for the school tour?\"",
      prompt: "Jane: \"We'll meet Henry __________ the entrance of the main building.\"",
      display: { A: "at", B: "on", C: "to", D: "in" },
      correct: "A",
      explanation: "\"<b>at</b> the entrance\" (ở lối vào) là cụm giới từ cố định chỉ vị trí gặp mặt."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Nam: \"Do you know when our second-term exam will take __________?\"",
      prompt: "Mai: \"Yes, it will happen next Monday morning.\"",
      display: { A: "after", B: "place", C: "off", D: "in" },
      correct: "B",
      explanation: "\"take <b>place</b>\" (diễn ra) là cụm động từ cố định, đồng nghĩa với \"happen\" trong câu trả lời của Mai."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Jack: \"Can you find your compass? I need it for the math class.\"",
      prompt: "Lucy: \"There isn't anything __________ my pocket. Let me check my school bag.\"",
      display: { A: "near", B: "next to", C: "in", D: "between" },
      correct: "C",
      explanation: "\"<b>in</b> my pocket\" (ở trong túi) là giới từ chỉ vị trí bên trong một không gian nhỏ, kín."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Teacher: \"Students will be punished if they don't wear __________ at school.\"",
      prompt: "Monitor: \"Yes, teacher. I will remind everyone to put it on every morning.\"",
      display: { A: "pocket money", B: "uniform", C: "kindergarten", D: "compass" },
      correct: "B",
      explanation: "\"wear <b>uniform</b>\" (mặc đồng phục) là thứ học sinh cần mặc mỗi ngày đến trường."
    },
    { id: 10, section: "I", type: "mcq",
      context: "David: \"Is your little sister old enough to go to primary school?\"",
      prompt: "John: \"No, my sister is just 4 years old and she is in __________ now.\"",
      display: { A: "kindergarten", B: "high school", C: "overseas", D: "secondary school" },
      correct: "A",
      explanation: "\"<b>kindergarten</b>\" (mẫu giáo) phù hợp với trẻ 4 tuổi, chưa đủ tuổi vào tiểu học."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Mark: \"Why do you think arts and music are necessary for children?\"",
      prompt: "Helen: \"Arts are of great __________ in education, especially for young kids.\"",
      display: { A: "importance", B: "unimportant", C: "importantly", D: "unimportance" },
      correct: "A",
      explanation: "\"be of great <b>importance</b>\" (có tầm quan trọng lớn) là cụm cố định cần danh từ sau \"great\"."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Student: \"Teacher, how can I know the meaning of a new word?\"",
      prompt: "Teacher: \"You should __________ to find the correct definitions.\"",
      display: { A: "spell it out", B: "read it loud", C: "use the dictionary", D: "write the answers" },
      correct: "C",
      explanation: "\"<b>use the dictionary</b>\" (tra từ điển) là cách phù hợp nhất để tìm định nghĩa chính xác của một từ mới."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Tom: \"Have a great weekend at your new school, Peter!\"",
      prompt: "Peter: \"__________\"",
      display: { A: "Thanks! The same to you!", B: "I've no idea.", C: "OK, we do, too.", D: "What's happening?" },
      correct: "A",
      explanation: "\"<b>Thanks! The same to you!</b>\" là lời đáp lại phù hợp cho một lời chúc, thể hiện việc chúc lại người kia điều tương tự."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Mary: \"What do you like most about your school?\"",
      prompt: "Peter: \"__________\"",
      display: { A: "I think I like the teachers the most because they are very kind.", B: "Doing experiments is very difficult for young children.", C: "Science is not my type.", D: "Oh, I don't like experiments." },
      correct: "A",
      explanation: "\"<b>I think I like the teachers the most because they are very kind.</b>\" trả lời trực tiếp câu hỏi về điều Peter thích nhất ở trường mình."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeFamilyPicnicPark",
      prompt: "What does this notice tell you?",
      display: {
        A: "A family dinner will take place at a restaurant next Saturday.",
        B: "The park is closed for a family picnic next Saturday.",
        C: "You can join a family picnic at the park this Saturday.",
        D: "You can have a family gathering at a café this Saturday."
      },
      correct: "C",
      explanation: "Biển ghi \"FAMILY PICNIC PARK — EVENT TAKES PLACE THIS SATURDAY\" nghĩa là có sự kiện dã ngoại gia đình diễn ra ở công viên vào thứ Bảy này → \"<b>You can join a family picnic at the park this Saturday.</b>\", đáp án C."
    },
    { id: 16, section: "II", type: "mcq", image: "signDoNotEnterLab",
      prompt: "What does this sign mean in the school lab?",
      display: {
        A: "Entry is only allowed during regular hours.",
        B: "You cannot enter this area without permission.",
        C: "Anyone can enter this area after school hours.",
        D: "You are allowed to enter this area at any time."
      },
      correct: "B",
      explanation: "Biển \"DO NOT ENTER\" ở phòng thí nghiệm nghĩa là không được vào khu vực này nếu không được phép → \"<b>You cannot enter this area without permission.</b>\", đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "harvardCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "at", B: "in", C: "for", D: "on" },
      correct: "B",
      explanation: "\"established <b>in</b> + năm\" (được thành lập vào năm) là giới từ cố định đi với năm."
    },
    { id: 18, section: "III", type: "mcq", passage: "harvardCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "who", B: "which", C: "whom", D: "whose" },
      correct: "A",
      explanation: "Đại từ quan hệ thay cho người \"John Harvard\" làm chủ ngữ trong mệnh đề quan hệ không xác định. <b>who</b>."
    },
    { id: 19, section: "III", type: "mcq", passage: "harvardCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "perhaps", B: "likely", C: "probably", D: "possibly" },
      correct: "C",
      explanation: "\"it is <b>probably</b> the University's best known landmark\" — trạng từ đứng giữa \"is\" và bổ ngữ, \"probably\" là lựa chọn tự nhiên nhất ở vị trí này."
    },
    { id: 20, section: "III", type: "mcq", passage: "harvardCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "much", B: "more", C: "most", D: "many" },
      correct: "B",
      explanation: "\"<b>more</b> than 360,000\" (hơn 360.000) là cụm cố định để chỉ số lượng vượt quá một con số."
    },
    { id: 21, section: "III", type: "mcq", passage: "harvardCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "contain", B: "include", C: "involve", D: "consist" },
      correct: "B",
      explanation: "\"Alumni of Harvard <b>include</b> eight U.S. presidents...\" (bao gồm/có trong số đó) — \"include\" phù hợp nhất khi liệt kê những cá nhân nổi bật trong nhóm."
    },
    { id: 22, section: "III", type: "mcq", passage: "harvardCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "built", B: "founded", C: "invented", D: "discovered" },
      correct: "B",
      explanation: "\"have <b>founded</b> many companies\" (đã sáng lập nhiều công ty) — \"found\" (thành lập) là động từ phù hợp nhất đi với \"companies\"."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "oxfordReading",
      prompt: "The University of Oxford is the oldest university in the world.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"It is the oldest university in the English-speaking world and the world's second oldest university. The oldest one is the University of Bologna in Italy.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "oxfordReading",
      prompt: "Oxford has four academic divisions.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"which are organised into four divisions.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "oxfordReading",
      prompt: "Only British students can study at the University of Oxford.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Students come to Oxford from more than 150 countries and territories.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "oxfordReading",
      prompt: "The University of Oxford has the largest university press in the world.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"It operates the world's oldest university museum, as well as the largest university press in the world.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "oxfordReading",
      prompt: "Where is the University of Bologna?",
      display: { A: "In Italy", B: "In England", C: "In Oxford", D: "In the United Kingdom" },
      correct: "A",
      explanation: "Bài đọc: \"The oldest one is the University of Bologna in Italy.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "oxfordReading",
      prompt: "How many United Kingdom prime ministers studied at Oxford?",
      display: { A: "28", B: "39", C: "69", D: "160" },
      correct: "A",
      explanation: "Bài đọc: \"28 prime ministers of the United Kingdom.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The teacher explained the lesson clearly, so it was very _____________ to the students.",
      wordGiven: "INTEREST", accepted: ["interesting"], correct: "interesting",
      explanation: "Cần tính từ sau \"was very\". <b>interest</b> (n/v) → <b>interesting</b> (adj, thú vị)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Harvard University is the oldest educational _____________ in the United States.",
      wordGiven: "INSTITUTE", accepted: ["institution"], correct: "institution",
      explanation: "Cần danh từ sau \"educational\". <b>institute</b> (n) → <b>institution</b> (n, cơ sở/tổ chức)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The presentation about Oxford University was _____________ done by the group.",
      wordGiven: "FANTASTIC", accepted: ["fantastically"], correct: "fantastically",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"done\". <b>fantastic</b> (adj) → <b>fantastically</b> (adv, +ally)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Students should know the _____________ of learning foreign languages early.",
      wordGiven: "IMPORTANT", accepted: ["importance"], correct: "importance",
      explanation: "Cần danh từ sau \"the\". <b>important</b> (adj) → <b>importance</b> (n, tầm quan trọng)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "The city has many ancient buildings and beautiful _____________.",
      wordGiven: "LANDMARK", accepted: ["landmarks"], correct: "landmarks",
      explanation: "Cần danh từ số nhiều sau \"beautiful\". <b>landmark</b> (n) → <b>landmarks</b> (số nhiều)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "Playing badminton regularly helps to improve your physical _____________.",
      wordGiven: "HEALTHY", accepted: ["health"], correct: "health",
      explanation: "Cần danh từ sau \"physical\". <b>healthy</b> (adj) → <b>health</b> (n, sức khỏe)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "classmateEntry",
      prompt: "\"John is a _____________________ from my university days; we studied history together.\"",
      accepted: ["former classmate"], correct: "former classmate",
      explanation: "Từ điển cho ví dụ \"She is a <b>former classmate</b> of mine from high school.\" — khớp với ngữ cảnh nói về bạn học cũ thời đại học."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "classmateEntry",
      prompt: "\"I haven't seen Sarah in years, but I ran into that _____________________ last week.\"",
      accepted: ["old classmate"], correct: "old classmate",
      explanation: "Từ điển cho ví dụ \"I met an <b>old classmate</b> at the supermarket yesterday.\" — khớp với ngữ cảnh tình cờ gặp lại bạn học cũ."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Your house is more modern than mine.",
      starter: "My house isn't",
      accepted: ["my house isn't as modern as yours", "my house isn't as modern as your house"],
      correct: "My house isn't as modern as yours. (hoặc: as modern as your house)",
      explanation: "So sánh hơn \"A + is more + adj + than + B\" có thể viết lại bằng so sánh ngang bằng dạng phủ định \"<b>B + isn't as + adj + as + A</b>\", giữ nguyên nghĩa.<br>→ <i>My house isn't as modern as yours.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "In population, Los Angeles is not as big as New York.",
      starter: "New York is",
      accepted: ["new york is bigger than los angeles in population"],
      correct: "New York is bigger than Los Angeles in population.",
      explanation: "So sánh ngang bằng dạng phủ định \"A + isn't as + adj + as + B\" có thể viết lại bằng so sánh hơn \"<b>B + is + adj-er + than + A</b>\", giữ nguyên nghĩa.<br>→ <i>New York is bigger than Los Angeles in population.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Mary plays the piano very well.",
      starter: "Mary is good",
      accepted: ["mary is good at playing the piano"],
      correct: "Mary is good at playing the piano.",
      explanation: "\"V + adv (well)\" (làm gì giỏi) có thể viết lại bằng \"<b>be good at + V-ing</b>\", giữ nguyên nghĩa.<br>→ <i>Mary is good at playing the piano.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Your painting is green, but my painting is red.",
      starter: "My painting is",
      accepted: ["my painting is a different color from yours", "my painting is red, while yours is green"],
      correct: "My painting is a different color from yours. (hoặc: red, while yours is green)",
      explanation: "Hai màu sắc khác nhau được nêu bằng \"but\" có thể viết lại bằng \"<b>be a different color from + N</b>\" (khác màu so với), giữ nguyên nghĩa.<br>→ <i>My painting is a different color from yours.</i>"
    }
  ]
};
