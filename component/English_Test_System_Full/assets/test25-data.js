const TEST = {
  id: "test25",
  grade: "Grade 6 — Global Success",
  unit: "Unit 1: My new school",
  title: "Grade 6 · Unit 1: My new school · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test25.html",
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
    { id: "VI", title: "Look at the dictionary entry of “author”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    schoolCloze: "School is the place where we learn to read and write. It is the most important place for a student, and it (17) ________ us to learn new things. The teachers are always helpful and teach us important things (18) ________ life. We must always be regular to school as missing classes can (19) ________ to problems during our exams. Schools teach us (20) ________ to be consistent, punctual, and obedient. It (21) ________ makes us better human beings so that we can treat (22) ________ elders with respect. Most of what we learn is a result of the learning imparted by our teachers.",
    maiReading: "Hello, my name is Mai. I am 11 years old. I go to a public school called Nguyen Du Secondary School. I am in grade 6. In our class there are 27 students, 15 girls and 12 boys. My classroom is big and nice. Our teacher is Miss Thuy. She likes decorating the walls of the class with posters and maps. In our class there is a computer and a blackboard. My desk and my chair are brown. My pencil case is on my desk. It's colorful. I have lots of things in my pencil case: a pencil sharpener, two pencils, a rubber, three paper clips and a purple pen. I go to school by bicycle with my friends. We like our school because there are playgrounds, a big gym and a fantastic music room with many instruments.",
    authorEntry: {
      word: "author", ipa: "/ˈɔːθə(r)/", pos: "noun",
      def: "a person who writes books or the person who wrote a particular book.",
      examples: [
        "He is the <b>best-selling author</b> of several thrillers.",
        "The <b>author of the book</b> will be at the bookstore today.",
        "Who is your favourite <b>author</b>?"
      ]
    }
  },
  images: {
    signNoMobilePhones: "assets/images/sign_no_mobile_phones.jpg",
    signSilencePlease: "assets/images/sign_silence_please.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "bag", B: "garden", C: "Maths", D: "travel" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"a\". \"bag\" /bæg/, \"Maths\" /mæθs/, \"travel\" /ˈtrævl/ đều có \"a\" phát âm là <b>/æ/</b>. Riêng \"garden\" /ˈɡɑːrdn/ có \"a\" trong \"ar\" phát âm là <b>/ɑːr/</b> → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "compass", B: "pencil", C: "class", D: "computer" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"c\". \"compass\" /ˈkʌmpəs/, \"class\" /klæs/, \"computer\" /kəmˈpjuːtər/ đều có \"c\" phát âm là <b>/k/</b>. Riêng \"pencil\" /ˈpensl/ có \"c\" đứng trước \"i\" nên phát âm là <b>/s/</b> → khác biệt, đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "arrive", B: "rubber", C: "lesson", D: "classmate" },
      correct: "A",
      explanation: "\"rubber\" /ˈrʌbər/, \"lesson\" /ˈlesn/, \"classmate\" /ˈklæsmeɪt/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"arrive\" /əˈraɪv/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "bicycle", B: "sharpener", C: "remember", D: "exercise" },
      correct: "C",
      explanation: "\"bicycle\" /ˈbaɪsɪkl/, \"sharpener\" /ˈʃɑːrpənər/, \"exercise\" /ˈeksərsaɪz/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"remember\" /rɪˈmembər/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Student A: \"How do you feel about the school festival?\"",
      prompt: "Student B: \"We are very ______ about it. It's so fun!\"",
      display: { A: "excited", B: "exciting", C: "excitement", D: "excite" },
      correct: "A",
      explanation: "Sau \"We are very ___\" cần một <b>tính từ</b> mô tả cảm xúc của người nói. \"excited\" (+ed) diễn tả cảm giác của người, còn \"exciting\" (+ing) mô tả bản thân sự vật/sự việc gây ra cảm giác đó → đáp án A."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Teacher: \"Who is the ______ of this history book?\"",
      prompt: "Student: \"It's a famous professor from France, sir.\"",
      display: { A: "actress", B: "classmate", C: "author", D: "people" },
      correct: "C",
      explanation: "\"<b>author</b>\" (tác giả) là người viết ra cuốn sách, phù hợp với câu trả lời \"a famous professor from France\" (người viết sách)."
    },
    { id: 7, section: "I", type: "mcq",
      context: "A: \"What do your brothers usually do after school?\"",
      prompt: "B: \"They usually ______ football in the park.\"",
      display: { A: "make", B: "do", C: "study", D: "play" },
      correct: "D",
      explanation: "\"<b>play</b> football\" (chơi bóng đá) là cụm cố định đi với môn thể thao bóng đá."
    },
    { id: 8, section: "I", type: "mcq",
      context: "A: \"Do many people ______ English in Jamaica?\"",
      prompt: "B: \"Yes, it is the official language there.\"",
      display: { A: "speaks", B: "speaking", C: "speak", D: "to speak" },
      correct: "C",
      explanation: "Câu hỏi bắt đầu bằng trợ động từ \"Do\" nên động từ chính phải ở dạng <b>nguyên mẫu không \"to\"</b>: \"Do many people <b>speak</b> English...?\""
    },
    { id: 9, section: "I", type: "mcq",
      context: "Son: \"Does Dad ______ a big car to work every day?\"",
      prompt: "Mom: \"No, he usually goes by bus.\"",
      display: { A: "doesn't", B: "do", C: "don't", D: "drive" },
      correct: "D",
      explanation: "Câu hỏi bắt đầu bằng trợ động từ \"Does\" nên động từ chính phải ở dạng <b>nguyên mẫu không \"to\"</b>: \"Does Dad <b>drive</b> a big car...?\""
    },
    { id: 10, section: "I", type: "mcq",
      context: "Librarian: \"What is your favorite ______ at school?\"",
      prompt: "Student: \"I love History because I like learning about the past.\"",
      display: { A: "device", B: "subject", C: "friends", D: "vocabulary" },
      correct: "B",
      explanation: "\"favorite <b>subject</b>\" (môn học yêu thích) phù hợp với câu trả lời nhắc đến \"History\" — một môn học ở trường."
    },
    { id: 11, section: "I", type: "mcq",
      context: "A: \"How often do you study English?\"",
      prompt: "B: \"______.\"",
      display: { A: "In the morning", B: "With my friends", C: "Twice a week", D: "I study at home" },
      correct: "C",
      explanation: "Câu hỏi \"How often...?\" (Bao lâu một lần?) hỏi về <b>tần suất</b>, nên câu trả lời phù hợp nhất là \"<b>Twice a week</b>\" (hai lần một tuần)."
    },
    { id: 12, section: "I", type: "mcq",
      context: "A: \"We only have time for a snack at ______.\"",
      prompt: "B: \"Let's go to the canteen quickly then.\"",
      display: { A: "class", B: "break time", C: "meals", D: "gym" },
      correct: "B",
      explanation: "\"<b>break time</b>\" (giờ giải lao) là khoảng thời gian ngắn phù hợp để ăn nhẹ trước khi phải quay lại lớp học."
    },
    { id: 13, section: "I", type: "mcq",
      context: "A: \"Have a great start at your new school!\"",
      prompt: "B: \"______\"",
      display: { A: "Thanks! The same to you!", B: "You're welcome", C: "I've no idea", D: "Not at all" },
      correct: "A",
      explanation: "\"<b>Thanks! The same to you!</b>\" là cách đáp lại tự nhiên nhất cho một lời chúc tốt đẹp."
    },
    { id: 14, section: "I", type: "mcq",
      context: "A: \"Why are you late for the lesson?\"",
      prompt: "B: \"______\"",
      display: { A: "My bike is new", B: "The lesson is long", C: "Sorry, I missed the bus", D: "I love English" },
      correct: "C",
      explanation: "Câu hỏi \"Why are you late...?\" (Tại sao bạn đến muộn?) cần một câu trả lời nêu <b>lý do</b>, và \"<b>Sorry, I missed the bus</b>\" (Xin lỗi, tôi lỡ chuyến xe buýt) là lý do hợp lý."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoMobilePhones",
      prompt: "What does this sign mean?",
      display: {
        A: "No mobile phones allowed.",
        B: "Always answer your phone in class.",
        C: "You can use your phone here.",
        D: "Phones must be charged before use."
      },
      correct: "A",
      explanation: "Biển ghi \"NO MOBILE PHONES ALLOWED\" → cấm sử dụng điện thoại di động, đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signSilencePlease",
      prompt: "What does this notice tell you?",
      display: {
        A: "Keep quiet in the library.",
        B: "No eating or drinking allowed.",
        C: "Return books on time.",
        D: "Computers are for research only."
      },
      correct: "A",
      explanation: "Biển ghi \"SILENCE PLEASE\" → yêu cầu giữ yên lặng, đáp án A."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "schoolCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "helps", B: "lets", C: "makes", D: "allows" },
      correct: "A",
      explanation: "\"it (school) <b>helps</b> us to learn new things\" — \"help sb (to) + V\" (giúp ai làm gì) là cấu trúc tự nhiên nhất ở đây."
    },
    { id: 18, section: "III", type: "mcq", passage: "schoolCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "of", B: "on", C: "in", D: "at" },
      correct: "A",
      explanation: "\"teach us important things <b>of</b> life\" — cụm \"things of life\" (những điều thuộc về cuộc sống) là cách diễn đạt được dùng trong bài."
    },
    { id: 19, section: "III", type: "mcq", passage: "schoolCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "cause", B: "lead", C: "result", D: "bring" },
      correct: "B",
      explanation: "\"missing classes can <b>lead</b> to problems\" — cụm cố định \"lead to\" (dẫn đến)."
    },
    { id: 20, section: "III", type: "mcq", passage: "schoolCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "what", B: "why", C: "how", D: "who" },
      correct: "C",
      explanation: "\"Schools teach us <b>how</b> to be consistent, punctual, and obedient\" — cấu trúc \"teach sb how to + V\" (dạy ai cách làm gì)."
    },
    { id: 21, section: "III", type: "mcq", passage: "schoolCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "too", B: "also", C: "either", D: "already" },
      correct: "B",
      explanation: "\"It <b>also</b> makes us better human beings\" — \"also\" đứng giữa câu (trước động từ thường) để bổ sung ý, phù hợp hơn \"too\" (thường đứng cuối câu)."
    },
    { id: 22, section: "III", type: "mcq", passage: "schoolCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "our", B: "us", C: "ours", D: "we" },
      correct: "A",
      explanation: "\"treat <b>our</b> elders with respect\" — cần tính từ sở hữu đứng trước danh từ \"elders\"."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "maiReading",
      prompt: "Mai is a student at Nguyen Du Secondary School.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"I go to a public school called <b>Nguyen Du Secondary School</b>.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "maiReading",
      prompt: "There are more boys than girls in Mai's class.",
      correct: "False",
      explanation: "Sai. Bài đọc: lớp có \"<b>15 girls and 12 boys</b>\" — số bạn gái nhiều hơn số bạn trai."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "maiReading",
      prompt: "Miss Thuy puts maps and posters on the classroom walls.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"She likes <b>decorating the walls of the class with posters and maps</b>.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "maiReading",
      prompt: "Mai travels to school by bus every day.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"I go to school <b>by bicycle</b> with my friends\", không phải bằng xe buýt."
    },
    { id: 27, section: "IV", type: "mcq", passage: "maiReading",
      prompt: "What color is the pen in Mai's pencil case?",
      display: { A: "Brown", B: "Purple", C: "Pink", D: "Colorful" },
      correct: "B",
      explanation: "Bài đọc: \"...three paper clips and a <b>purple pen</b>.\" → đáp án B."
    },
    { id: 28, section: "IV", type: "mcq", passage: "maiReading",
      prompt: "Why do Mai and her friends like their school?",
      display: {
        A: "Because the classroom has a computer.",
        B: "Because their teacher is very nice.",
        C: "Because it has playgrounds, a gym, and a music room.",
        D: "Because the school is near their houses."
      },
      correct: "C",
      explanation: "Bài đọc: \"We like our school because there are <b>playgrounds, a big gym and a fantastic music room</b> with many instruments.\" → đáp án C."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The children look very ______________ during the school trip.",
      wordGiven: "EXCITE", accepted: ["excited"], correct: "excited",
      explanation: "Cần tính từ đứng sau \"look\" mô tả cảm xúc của trẻ em. <b>excite</b> (v) → <b>excited</b> (adj, +ed, cảm thấy phấn khích)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "My pencil case is very ______________ with many patterns.",
      wordGiven: "COLOR", accepted: ["colorful", "colourful"], correct: "colorful",
      explanation: "Cần tính từ làm bổ ngữ sau \"is very\". <b>color</b> (n) → <b>colorful</b> (adj, +ful, nhiều màu sắc)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The teacher is ______________ the walls with beautiful posters.",
      wordGiven: "DECORATE", accepted: ["decorating"], correct: "decorating",
      explanation: "Cấu trúc \"is/am/are + V-ing\" (thì hiện tại tiếp diễn). <b>decorate</b> (v) → <b>decorating</b> (V-ing, đang trang trí)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Mathematics is my favorite ______________ at school.",
      wordGiven: "SUBJECT", accepted: ["subject"], correct: "subject",
      explanation: "\"subject\" (môn học) ở đây đã đúng dạng danh từ số ít cần dùng sau \"my favorite\", không cần biến đổi thêm."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "There are many modern ______________ in our new classroom.",
      wordGiven: "DEVICE", accepted: ["devices"], correct: "devices",
      explanation: "Sau \"many\" cần danh từ đếm được ở dạng <b>số nhiều</b>. <b>device</b> (n) → <b>devices</b> (n, số nhiều, thiết bị)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "We need a ______________ to do these difficult math exercises.",
      wordGiven: "CALCULATE", accepted: ["calculator"], correct: "calculator",
      explanation: "Sau mạo từ \"a\" cần một danh từ số ít. <b>calculate</b> (v) → <b>calculator</b> (n, +or, máy tính cầm tay)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "authorEntry",
      prompt: "J.K. Rowling is a very famous and ___________________; she has sold millions of copies of Harry Potter.",
      accepted: ["best-selling author"], correct: "best-selling author",
      explanation: "Từ điển cho ví dụ \"He is the <b>best-selling author</b> of several thrillers.\" — khớp với ngữ cảnh J.K. Rowling bán được hàng triệu bản sách."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "authorEntry",
      prompt: "If you want to know more about the story, you can talk to the ___________________ at the event tonight.",
      accepted: ["author of the book"], correct: "author of the book",
      explanation: "Từ điển cho ví dụ \"The <b>author of the book</b> will be at the bookstore today.\" — khớp với ngữ cảnh có mặt tại sự kiện tối nay để nói chuyện."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "There are 150 students and 10 teachers in my school.",
      starter: "My school has",
      accepted: ["my school has 150 students and 10 teachers"],
      correct: "My school has 150 students and 10 teachers.",
      explanation: "\"There are + số lượng + N + in + nơi chốn\" có thể viết lại bằng \"<b>Nơi chốn + has/have + số lượng + N</b>\", giữ nguyên nghĩa.<br>→ <i>My school has 150 students and 10 teachers.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Mary plays the piano very well.",
      starter: "Mary is good",
      accepted: ["mary is good at playing the piano"],
      correct: "Mary is good at playing the piano.",
      explanation: "\"S + V + well\" (làm gì đó giỏi) có thể viết lại bằng \"<b>S + be + good at + V-ing</b>\" (giỏi về việc gì).<br>→ <i>Mary is good at playing the piano.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "My favorite subjects are Vietnamese and Maths.",
      starter: "I like",
      accepted: ["i like vietnamese and maths best"],
      correct: "I like Vietnamese and Maths best.",
      explanation: "\"My favorite + Ns + are + X and Y\" (X và Y là những... yêu thích nhất) có thể viết lại bằng \"<b>I like + X and Y + best</b>\" (tôi thích X và Y nhất).<br>→ <i>I like Vietnamese and Maths best.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Don't forget to bring your raincoat today.",
      starter: "Remember",
      accepted: ["remember to bring your raincoat today"],
      correct: "Remember to bring your raincoat today.",
      explanation: "\"Don't forget to + V\" (đừng quên làm gì) có nghĩa tương đương với \"<b>Remember to + V</b>\" (hãy nhớ làm gì).<br>→ <i>Remember to bring your raincoat today.</i>"
    }
  ]
};
