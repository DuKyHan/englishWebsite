const TEST = {
  id: "test48",
  grade: "Grade 7 — Global Success",
  unit: "Unit 6: A Visit to a School",
  title: "Grade 7 · Unit 6: A Visit to a School · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test48.html",
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
    { id: "VI", title: "Look at the dictionary entry of “entrance”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    usaEducationCloze: "In the USA, students start (17) ________ secondary education at the age of 11. First, they go to Middle School for three years. Then they go to High School for four years, from age 14 to 18. Some students leave school when they are 16 and find (18) ________ job. But most students stay at High School (19) ________ they are 18. Then they take exams and they get a \"High School Diploma\". There aren't any (20) ________ exams. All students at secondary school in the USA study English, Maths, Science, and P.E., but students choose other (21) ________, so they don't all study the same subjects. About 90% of students in the USA go to state schools. About 10% go (22) ________ private schools. Most of the private schools are religious schools.",
    monashReading: "Monash University is a public university located in Melbourne, Australia. It was established in 1958 by an Act of the State Parliament of Victoria and is the second oldest university in the State of Victoria. The university was named after the prominent Australian general Sir John Monash. This was the first time in Australia that a university had been named after a person, rather than a city or state. It was originally intended to have an emphasis on science and technology. However, it quickly expanded beyond this. In its early years, it offered undergraduate and postgraduate degrees in engineering, medicine, science, arts, economics and politics, education and law. Initially, it was best known for its strong research capacity in the sciences and for its innovative teaching in law and medicine.",
    entranceEntry: {
      word: "entrance", ipa: "/ˈentrəns/", pos: "noun",
      def: "1. a door, gate, etc. by which you can go into a building or place; 2. the act of entering a room, building or place; 3. the right or opportunity to enter a building, organization, etc.",
      examples: [
        "The <b>front entrance</b> of the building is locked after 8 p.m.",
        "There are two distinct <b>entrance gates</b> to the amusement park.",
        "How much is the <b>entrance fee</b> for the museum?",
        "You need a high score to pass the <b>entrance exam</b> to this university."
      ]
    }
  },
  images: {
    noticeCityTheatreSeats: "assets/images/notice_city_theatre_seats.jpg",
    noticeInformationDesk: "assets/images/notice_information_desk.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "talented", B: "extra", C: "exam", D: "canteen" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"a\". \"talented\" /ˈtælənt̬ɪd/, \"exam\" /ɪɡˈzæm/, \"canteen\" /kænˈtiːn/ đều có \"a\" phát âm là <b>/æ/</b>. Riêng \"extra\" /ˈekstrə/ có \"a\" phát âm là <b>/ə/</b> → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "recognise", B: "age", C: "region", D: "agent" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"g\". \"age\" /eɪdʒ/, \"region\" /ˈriːdʒən/, \"agent\" /ˈeɪdʒənt/ đều có \"g\" phát âm là <b>/dʒ/</b>. Riêng \"recognise\" /ˈrekəɡnaɪz/ có \"g\" phát âm là <b>/ɡ/</b> → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "standard", B: "custom", C: "profit", D: "resource" },
      correct: "D",
      explanation: "\"standard\" /ˈstændərd/, \"custom\" /ˈkʌstəm/, \"profit\" /ˈprɒfɪt/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"resource\" /rɪˈsɔːrs/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "community", B: "activity", C: "facility", D: "entertainment" },
      correct: "D",
      explanation: "\"community\" /kəˈmjuːnəti/, \"activity\" /ækˈtɪvəti/, \"facility\" /fəˈsɪləti/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"entertainment\" /ˌentərˈteɪnmənt/ có trọng âm rơi vào <b>âm tiết 3</b> → khác biệt, đáp án D."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"I can't find the definition of this English phrase anywhere.\"",
      prompt: "Mary: \"You can __________ it up in this new dictionary.\"",
      display: { A: "give", B: "take", C: "look", D: "see" },
      correct: "C",
      explanation: "\"<b>look</b> up + N\" (tra cứu) là cụm động từ cố định khi tra từ điển."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Teacher: \"Where are the students of the chemistry class?\"",
      prompt: "Monitor: \"They are doing some scientific tests in the __________.\"",
      display: { A: "gym", B: "garden", C: "laboratory", D: "classroom" },
      correct: "C",
      explanation: "\"<b>laboratory</b>\" (phòng thí nghiệm) là nơi phù hợp để làm các thí nghiệm khoa học."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Father: \"Today is Jimmy's first day at secondary school. Is he worried?\"",
      prompt: "Mother: \"No, he is very __________ and eager to meet his new classmates.\"",
      display: { A: "worry", B: "excited", C: "boring", D: "creative" },
      correct: "B",
      explanation: "\"<b>excited</b>\" (hào hứng) phù hợp với ngữ cảnh mong chờ gặp bạn mới, trái ngược với \"worried\"."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Anna: \"Where are the children? It is very quiet outside.\"",
      prompt: "Peter: \"They are playing safely __________ the beautiful garden.\"",
      display: { A: "in", B: "between", C: "to", D: "on" },
      correct: "A",
      explanation: "\"play <b>in</b> + a place\" (chơi ở trong một khu vực) là giới từ chỉ vị trí bên trong không gian rộng."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Lucy: \"Does it rain much in your country during the summer?\"",
      prompt: "Mark: \"Yes, it usually rains __________ in July and August.\"",
      display: { A: "a lot", B: "a lot of", C: "some", D: "many" },
      correct: "A",
      explanation: "\"rains <b>a lot</b>\" (mưa nhiều) — \"a lot\" đứng độc lập sau động từ để bổ nghĩa mức độ, không cần \"of\"."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Kevin: \"Look! Some students are playing soccer over there.\"",
      prompt: "Brian: \"Ah, that is our school's new __________. It's very large.\"",
      display: { A: "library", B: "lab", C: "computer room", D: "playground" },
      correct: "D",
      explanation: "\"<b>playground</b>\" (sân chơi) là nơi phù hợp để chơi đá bóng."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Student: \"Excuse me, sir. What should I do if I want to answer your question?\"",
      prompt: "Teacher: \"You should __________ your hand first. Don't shout out.\"",
      display: { A: "rise", B: "show", C: "raise", D: "point" },
      correct: "C",
      explanation: "\"<b>raise</b> your hand\" (giơ tay) là cụm cố định — \"raise\" là ngoại động từ, cần tân ngữ \"your hand\"."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Jane: \"I can't see what is written on the board.\"",
      prompt: "Chris: \"That's because the teacher stands right __________ the class.\"",
      display: { A: "by", B: "at", C: "in front of", D: "from" },
      correct: "C",
      explanation: "\"stand <b>in front of</b> + N\" (đứng trước) là cụm giới từ chỉ vị trí phù hợp — giáo viên đứng trước lớp che tầm nhìn."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Johnny: \"I'm in grade 10 this year. It's been pretty busy with lots of homework!\"",
      prompt: "Anna: \"__________ We need to try our best for the next exam.\"",
      display: { A: "I don't go to school.", B: "Thank you.", C: "Good idea!", D: "Me too." },
      correct: "D",
      explanation: "\"<b>Me too.</b>\" thể hiện sự đồng cảm, chia sẻ hoàn cảnh tương tự với Johnny, phù hợp trước khi nói về việc cùng cố gắng cho kỳ thi tới."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Anna: \"What school are you studying at, Johnny?\"",
      prompt: "Johnny: \"__________\"",
      display: { A: "I'm in grade 10 this year.", B: "Yes, it's a very big school.", C: "No, I don't like homework.", D: "I'm studying at Greenfield High School." },
      correct: "D",
      explanation: "\"<b>I'm studying at Greenfield High School.</b>\" trả lời trực tiếp câu hỏi về tên trường đang theo học."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeCityTheatreSeats",
      prompt: "What does this notice tell you to do?",
      display: {
        A: "You can easily get your money back on all tickets.",
        B: "You can ask for different seats after you have paid.",
        C: "You cannot buy any tickets at the City Theatre.",
        D: "You must choose where you sit before you book tickets."
      },
      correct: "D",
      explanation: "Biển ghi \"Please choose your seats carefully before booking your tickets. No changes allowed after payment.\" nghĩa là phải chọn chỗ ngồi kỹ trước khi đặt vé vì sau khi thanh toán sẽ không đổi được → \"<b>You must choose where you sit before you book tickets.</b>\", đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "noticeInformationDesk",
      prompt: "What does this sign say?",
      display: {
        A: "This desk is closed and cannot provide any help.",
        B: "Help is not given to anyone at this location right now.",
        C: "Visitors can get assistance and help at this location.",
        D: "This desk is only for the use of staff members."
      },
      correct: "C",
      explanation: "Biển ghi \"Staff members are always available here to give assistance and help to visitors.\" nghĩa là khách tham quan luôn có thể nhận được sự hỗ trợ, giúp đỡ tại đây → \"<b>Visitors can get assistance and help at this location.</b>\", đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "usaEducationCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "its", B: "their", C: "our", D: "his" },
      correct: "B",
      explanation: "\"students start <b>their</b> secondary education\" — tính từ sở hữu phải tương ứng với chủ ngữ số nhiều \"students\"."
    },
    { id: 18, section: "III", type: "mcq", passage: "usaEducationCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "some", B: "the", C: "a", D: "an" },
      correct: "C",
      explanation: "\"find <b>a</b> job\" (tìm một việc làm) — mạo từ không xác định đi trước danh từ đếm được số ít \"job\"."
    },
    { id: 19, section: "III", type: "mcq", passage: "usaEducationCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "during", B: "until", C: "unless", D: "since" },
      correct: "B",
      explanation: "\"stay at High School <b>until</b> they are 18\" (ở lại trường cho đến khi 18 tuổi) — \"until\" chỉ mốc thời gian kết thúc của một hành động kéo dài."
    },
    { id: 20, section: "III", type: "mcq", passage: "usaEducationCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "local", B: "international", C: "public", D: "national" },
      correct: "D",
      explanation: "\"There aren't any <b>national</b> exams\" (không có kỳ thi cấp quốc gia nào) — phù hợp với ngữ cảnh nói về hệ thống giáo dục chung của cả nước Mỹ."
    },
    { id: 21, section: "III", type: "mcq", passage: "usaEducationCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "activities", B: "grades", C: "languages", D: "subjects" },
      correct: "D",
      explanation: "\"students choose other <b>subjects</b>, so they don't all study the same subjects\" — \"subjects\" (môn học) khớp với vế sau của câu."
    },
    { id: 22, section: "III", type: "mcq", passage: "usaEducationCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "in", B: "at", C: "on", D: "to" },
      correct: "D",
      explanation: "\"go <b>to</b> + a place\" (đi đến một nơi) — giới từ cố định chỉ hướng đi tới private schools."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "monashReading",
      prompt: "Monash University is located in the State of Victoria.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Monash University is a public university located in Melbourne, Australia... is the second oldest university in the State of Victoria.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "monashReading",
      prompt: "Monash University is the oldest university in its state.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"...is the second oldest university in the State of Victoria\", không phải trường lâu đời nhất."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "monashReading",
      prompt: "The university was named after a famous Australian city.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"The university was named after the prominent Australian general Sir John Monash\", được đặt theo tên một vị tướng, không phải tên thành phố."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "monashReading",
      prompt: "At first, the university wanted to focus mainly on science and technology.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"It was originally intended to have an emphasis on science and technology.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "monashReading",
      prompt: "Who or what was Monash University named after?",
      display: { A: "A famous general", B: "An old city", C: "An Australian state", D: "A famous doctor" },
      correct: "A",
      explanation: "Bài đọc: \"The university was named after the prominent Australian general Sir John Monash.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "monashReading",
      prompt: "In its early years, what was the university well-known for?",
      display: {
        A: "Only teaching arts and economics",
        B: "Good research in sciences and new teaching ways in law and medicine",
        C: "Being the only university in Melbourne",
        D: "Having no courses in technology and engineering"
      },
      correct: "B",
      explanation: "Bài đọc: \"Initially, it was best known for its strong research capacity in the sciences and for its innovative teaching in law and medicine.\" → đáp án B."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "We love doing experiments in our school's _____________ laboratory.",
      wordGiven: "SCIENTIST", accepted: ["science"], correct: "science",
      explanation: "Cần danh từ bổ nghĩa cho danh từ \"laboratory\" (danh từ ghép). <b>scientist</b> (n, nhà khoa học) → <b>science</b> (n, khoa học)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The children were very _____________ on their first day of school.",
      wordGiven: "EXCITE", accepted: ["excited"], correct: "excited",
      explanation: "Cần tính từ sau \"were very\" để miêu tả cảm xúc của các em nhỏ. <b>excite</b> (v) → <b>excited</b> (adj, hào hứng)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The school organized many outdoor _____________ for students this summer.",
      wordGiven: "ACT", accepted: ["activities"], correct: "activities",
      explanation: "Cần danh từ số nhiều sau \"outdoor\". <b>act</b> (v) → <b>activities</b> (n, các hoạt động)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "She is a very _____________ student who can play three musical instruments.",
      wordGiven: "TALENT", accepted: ["talented"], correct: "talented",
      explanation: "Cần tính từ bổ nghĩa cho danh từ \"student\". <b>talent</b> (n) → <b>talented</b> (adj, có năng khiếu)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Our school has great modern _____________, including a large playground.",
      wordGiven: "FACILITY", accepted: ["facilities"], correct: "facilities",
      explanation: "Cần danh từ số nhiều sau \"modern\". <b>facility</b> (n) → <b>facilities</b> (n, cơ sở vật chất)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "Going camping helps teenagers build up their _____________ safely.",
      wordGiven: "CONFIDENT", accepted: ["confidence"], correct: "confidence",
      explanation: "Cần danh từ làm tân ngữ của \"build up\". <b>confident</b> (adj) → <b>confidence</b> (n, sự tự tin)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "entranceEntry",
      prompt: "\"Students must study hard if they want to pass the _____________________ to medical school.\"",
      accepted: ["entrance exam"], correct: "entrance exam",
      explanation: "Từ điển cho ví dụ \"You need a high score to pass the <b>entrance exam</b> to this university.\" — khớp với ngữ cảnh thi đầu vào trường y."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "entranceEntry",
      prompt: "\"Visitors don't have to pay anything because the _____________________ to the gallery is completely free.\"",
      accepted: ["entrance fee"], correct: "entrance fee",
      explanation: "Từ điển cho ví dụ \"How much is the <b>entrance fee</b> for the museum?\" — khớp với ngữ cảnh phí vào cửa phòng trưng bày."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "It's cold today, so taking warm clothes is a good idea.",
      starter: "You'd better",
      accepted: ["you'd better take warm clothes because it's cold today", "you had better take warm clothes because it's cold today"],
      correct: "You'd better take warm clothes because it's cold today.",
      explanation: "\"It's a good idea to do sth\" (nên làm gì) có thể viết lại bằng cấu trúc lời khuyên \"<b>had better + V (bare-inf)</b>\", giữ nguyên nghĩa.<br>→ <i>You'd better take warm clothes because it's cold today.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "They always play badminton on Thursday.",
      starter: "Their game",
      accepted: ["their game of badminton always takes place on thursday", "their game is always badminton on thursday"],
      correct: "Their game of badminton always takes place on Thursday. (hoặc: Their game is always badminton on Thursday.)",
      explanation: "Câu chủ động \"S + always + V + O\" có thể viết lại bằng danh từ hóa hành động \"<b>Their game (of badminton) + always + takes place + on Thursday</b>\", giữ nguyên nghĩa.<br>→ <i>Their game of badminton always takes place on Thursday.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "I think gardening is fun because it helps me learn about plants.",
      starter: "Gardening is such",
      accepted: ["gardening is such a fun activity that it helps me learn about plants"],
      correct: "Gardening is such a fun activity that it helps me learn about plants.",
      explanation: "\"S + is + adj + because + mệnh đề kết quả\" có thể viết lại bằng cấu trúc \"<b>such (a/an) + adj + N + that + mệnh đề kết quả</b>\", giữ nguyên nghĩa.<br>→ <i>Gardening is such a fun activity that it helps me learn about plants.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "We'll meet at 7 pm outside the theatre tonight.",
      starter: "Let's",
      accepted: ["let's meet at 7 pm outside the theatre tonight"],
      correct: "Let's meet at 7 pm outside the theatre tonight.",
      explanation: "Câu đề nghị dùng \"We'll + V\" có thể viết lại bằng cấu trúc rủ rê \"<b>Let's + V (bare-inf)</b>\", giữ nguyên nghĩa.<br>→ <i>Let's meet at 7 pm outside the theatre tonight.</i>"
    }
  ]
};
