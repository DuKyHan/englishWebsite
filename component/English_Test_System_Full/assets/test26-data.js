const TEST = {
  id: "test26",
  grade: "Grade 6 — Global Success",
  unit: "Unit 1: My new school",
  title: "Grade 6 · Unit 1: My new school · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test26.html",
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
    { id: "VI", title: "Look at the dictionary entry of “boarding school”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    lillyCloze: "Hi! My name's Lilly Browns. I'm eleven years old. I'm now in grade 6 at Dream School. I like it here because I like to study (17) ________ an international school. The teachers in my school are nice and very (18) ________, and my favourite teacher is Mr Oily. He teaches us physics. I (19) ________ three hours to study Vietnamese in the afternoon. Usually I read books (20) ________ the library and do my homework at break time. We wear our uniforms every day, but today we (21) ________, as we're going to have an (22) ________ to the National Park.",
    activitiesReading: "The Vietnamese students take part in different after-school activities. Some students play sports. They often play soccer, table tennis or badminton. Sometimes they go swimming in the swimming pools. Some students like music, drama and movies. They often practice playing musical instruments in the school music room. They join the school theatre group and usually rehearse plays. Some are members of the stamp collectors club. They often get together and talk about their stamps. A few students stay at home and play video games or computer games. Most of them enjoy their activities after school hours because they can take a rest and follow their interests.",
    boardingSchoolEntry: {
      word: "boarding school", ipa: "/ˈbɔːrdɪŋ skuːl/", pos: "noun",
      def: "a school where students can live during the school term.",
      examples: [
        "Life <b>at boarding school</b> can be difficult for students who miss their families.",
        "He is currently <b>attending a boarding school</b> in the countryside.",
        "My cousin <b>stays at a boarding school</b> during the week and comes home on weekends."
      ]
    }
  },
  images: {
    signNoEntry: "assets/images/sign_no_entry.jpg",
    signChildrenCrossing: "assets/images/sign_children_crossing.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "lunch", B: "music", C: "subject", D: "club" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"u\". \"lunch\" /lʌntʃ/, \"subject\" /ˈsʌbdʒɪkt/, \"club\" /klʌb/ đều có \"u\" phát âm là <b>/ʌ/</b>. Riêng \"music\" /ˈmjuːzɪk/ có \"u\" phát âm là <b>/juː/</b> → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "cycle", B: "exercise", C: "centre", D: "case" },
      correct: "D",
      explanation: "Phần gạch chân là chữ cái \"c\". \"cycle\" /ˈsaɪkl/, \"exercise\" /ˈeksərsaɪz/, \"centre\" /ˈsentər/ đều có \"c\" phát âm là <b>/s/</b>. Riêng \"case\" /keɪs/ có \"c\" phát âm là <b>/k/</b> → khác biệt, đáp án D."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "ready", B: "subject", C: "weekend", D: "homework" },
      correct: "C",
      explanation: "\"ready\" /ˈredi/, \"subject\" /ˈsʌbdʒɪkt/, \"homework\" /ˈhoʊmwɜːrk/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"weekend\" /ˌwiːkˈend/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "afternoon", B: "uniform", C: "exercise", D: "classroom" },
      correct: "A",
      explanation: "\"uniform\" /ˈjuːnɪfɔːrm/, \"exercise\" /ˈeksərsaɪz/, \"classroom\" /ˈklæsruːm/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"afternoon\" /ˌæftərˈnuːn/ có trọng âm rơi vào <b>âm tiết cuối</b> → khác biệt, đáp án A."
    },
    { id: 5, section: "I", type: "mcq",
      context: "A: \"What is your sister like?\"",
      prompt: "B: \"She always has a lot of new ideas. She's a __________ person.\"",
      display: { A: "create", B: "creation", C: "creative", D: "creator" },
      correct: "C",
      explanation: "Cần tính từ đứng trước danh từ \"person\". <b>create</b> (v) → <b>creative</b> (adj, +ive, sáng tạo)."
    },
    { id: 6, section: "I", type: "mcq",
      context: "A: \"What time do Jack and John usually get up?\"",
      prompt: "B: \"They ____________ at 8.00 every morning.\"",
      display: { A: "get up", B: "are get up", C: "gets up", D: "getting up" },
      correct: "A",
      explanation: "Chủ ngữ \"They\" (số nhiều) ở <b>thì hiện tại đơn</b> nên động từ giữ nguyên thể: \"They <b>get up</b> at 8.00 every morning.\""
    },
    { id: 7, section: "I", type: "mcq",
      context: "A: \"__________ class are you in, Nam?\"",
      prompt: "B: \"I'm in Class 6D.\"",
      display: { A: "Whose", B: "Which", C: "When", D: "Where" },
      correct: "B",
      explanation: "Câu trả lời nêu tên một lớp cụ thể (Class 6D) trong số nhiều lựa chọn, nên câu hỏi dùng \"<b>Which</b> class\" (lớp nào)."
    },
    { id: 8, section: "I", type: "mcq",
      context: "A: \"May I come in, teacher?\"",
      prompt: "B: \"Yes, but please ____________ before entering next time.\"",
      display: { A: "book", B: "question", C: "friend", D: "knock" },
      correct: "D",
      explanation: "\"<b>knock</b>\" (gõ cửa) là hành động phù hợp trước khi bước vào phòng."
    },
    { id: 9, section: "I", type: "mcq",
      context: "A: \"Does Linh have lunch alone?\"",
      prompt: "B: \"No, she _______ lunch with her best friend.\"",
      display: { A: "always has", B: "has always", C: "have always", D: "always have" },
      correct: "A",
      explanation: "Trạng từ tần suất \"always\" đứng <b>trước</b> động từ thường (has), và chủ ngữ \"she\" số ít cần \"has\": \"she <b>always has</b> lunch with her best friend.\""
    },
    { id: 10, section: "I", type: "mcq",
      context: "A: \"Why is she so busy lately?\"",
      prompt: "B: \"She's ____________ for evening classes at the community college.\"",
      display: { A: "rubbed", B: "written", C: "signed up", D: "parked" },
      correct: "C",
      explanation: "\"<b>sign up</b> for\" (đăng ký tham gia) phù hợp với ngữ cảnh đăng ký học lớp buổi tối."
    },
    { id: 11, section: "I", type: "mcq",
      context: "A: \"What happens if students don't follow the rules?\"",
      prompt: "B: \"They will be punished if they don't wear __________ at school.\"",
      display: { A: "kindergartens", B: "uniforms", C: "pocket money", D: "compasses" },
      correct: "B",
      explanation: "\"<b>uniforms</b>\" (đồng phục) là thứ học sinh bắt buộc phải mặc ở trường, phù hợp với ngữ cảnh bị phạt nếu không tuân theo quy định."
    },
    { id: 12, section: "I", type: "mcq",
      context: "A: \"When do you have English?\"",
      prompt: "B: \"___________\"",
      display: { A: "I have English at school.", B: "I always learn English in the library.", C: "I have it on Monday and Friday.", D: "I don't like English." },
      correct: "C",
      explanation: "Câu hỏi \"When...?\" (Khi nào?) cần câu trả lời nêu <b>thời gian cụ thể</b>: \"<b>I have it on Monday and Friday.</b>\""
    },
    { id: 13, section: "I", type: "mcq",
      context: "A: \"Your new school looks amazing!\"",
      prompt: "B: \"___________\"",
      display: { A: "What's happening?", B: "Yes, it's great!", C: "Thanks! The same to you!", D: "I've no idea." },
      correct: "B",
      explanation: "\"<b>Yes, it's great!</b>\" là cách đáp lại tự nhiên nhất khi ai đó khen ngôi trường mới của mình."
    },
    { id: 14, section: "I", type: "mcq",
      context: "A: – _______",
      prompt: "B: – Sorry, I'm late. My school bus broke down on the way here.",
      display: { A: "Can you see the bus?", B: "How do you go to school?", C: "Where have you been?", D: "Why do you go by bus?" },
      correct: "C",
      explanation: "Câu trả lời giải thích lý do đến muộn, phù hợp với câu hỏi \"<b>Where have you been?</b>\" (Bạn đã ở đâu vậy?) khi ai đó đến trễ."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoEntry",
      prompt: "What does this sign mean?",
      display: {
        A: "This sign means this area is reserved for buses only.",
        B: "This sign means all vehicles are not allowed to enter this street.",
        C: "This sign means pedestrians must cross here.",
        D: "This sign means all vehicles must stop here."
      },
      correct: "B",
      explanation: "Đây là biển báo giao thông \"NO ENTRY\" (cấm đi vào) → tất cả các phương tiện đều không được phép đi vào đoạn đường này, đáp án B."
    },
    { id: 16, section: "II", type: "mcq", image: "signChildrenCrossing",
      prompt: "What does this sign tell you?",
      display: {
        A: "This sign means vehicles are not allowed to enter.",
        B: "This sign means there is a hospital nearby.",
        C: "This sign means children may be crossing; drivers should be careful.",
        D: "This sign means only bicycles are allowed here."
      },
      correct: "C",
      explanation: "Đây là biển báo cảnh báo \"khu vực có trẻ em qua đường\" → lái xe cần đi chậm và cẩn thận, đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "lillyCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "at", B: "on", C: "for", D: "to" },
      correct: "A",
      explanation: "\"study <b>at</b> an international school\" — giới từ \"at\" đi với địa điểm học tập cụ thể."
    },
    { id: 18, section: "III", type: "mcq", passage: "lillyCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "boring", B: "helpful", C: "quiet", D: "difficult" },
      correct: "B",
      explanation: "\"The teachers ... are nice and very <b>helpful</b>\" — \"helpful\" (tốt bụng, hay giúp đỡ) phù hợp khi đi cùng \"nice\" để khen ngợi giáo viên."
    },
    { id: 19, section: "III", type: "mcq", passage: "lillyCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "take", B: "give", C: "spend", D: "pass" },
      correct: "C",
      explanation: "\"I <b>spend</b> three hours to study Vietnamese\" — \"spend + khoảng thời gian\" (dành thời gian cho việc gì) là cụm phù hợp nhất trong bốn lựa chọn."
    },
    { id: 20, section: "III", type: "mcq", passage: "lillyCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "context", B: "classroom", C: "subjects", D: "library" },
      correct: "D",
      explanation: "\"I read books ... the <b>library</b>\" — \"library\" (thư viện) là nơi phù hợp nhất về nghĩa để đọc sách, khác với \"context/classroom/subjects\" không liên quan."
    },
    { id: 21, section: "III", type: "mcq", passage: "lillyCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "don't", B: "aren't", C: "didn't", D: "haven't" },
      correct: "B",
      explanation: "\"We wear our uniforms every day, but today we <b>aren't</b> [wearing them]\" — câu có ý phủ định tương phản với \"wear...every day\", dùng \"aren't\" ở thì hiện tại (lược bỏ phần lặp lại)."
    },
    { id: 22, section: "III", type: "mcq", passage: "lillyCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "outing", B: "exercise", C: "activity", D: "energy" },
      correct: "A",
      explanation: "\"we're going to have an <b>outing</b> to the National Park\" — \"outing\" (chuyến đi chơi, dã ngoại) phù hợp với việc đi đến Vườn Quốc gia."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "activitiesReading",
      prompt: "Vietnamese students only play sports after school.",
      correct: "False",
      explanation: "Sai. Bài đọc còn nhắc đến nhiều hoạt động khác như âm nhạc, kịch, sưu tầm tem, chơi điện tử, không chỉ chơi thể thao."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "activitiesReading",
      prompt: "Students can practice musical instruments in the school music room.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"They often <b>practice playing musical instruments in the school music room</b>.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "activitiesReading",
      prompt: "Members of the stamp collectors club usually talk about their stamps when they meet.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Some are members of the stamp collectors club. They often get together and <b>talk about their stamps</b>.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "activitiesReading",
      prompt: "All Vietnamese students stay at home and play video games after school.",
      correct: "False",
      explanation: "Sai. Bài đọc: chỉ \"<b>a few students</b> stay at home and play video games\" (một số ít học sinh), không phải tất cả."
    },
    { id: 27, section: "IV", type: "mcq", passage: "activitiesReading",
      prompt: "What do students in the school theatre group usually do?",
      display: { A: "Play soccer", B: "Rehearse plays", C: "Collect stamps", D: "Play computer games" },
      correct: "B",
      explanation: "Bài đọc: \"They join the school theatre group and usually <b>rehearse plays</b>.\" → đáp án B."
    },
    { id: 28, section: "IV", type: "mcq", passage: "activitiesReading",
      prompt: "Why do most students like their after-school activities?",
      display: {
        A: "Because they can relax and do what they like.",
        B: "Because they want to get good marks.",
        C: "Because they don't have any homework.",
        D: "Because they can eat their favorite food."
      },
      correct: "A",
      explanation: "Bài đọc: \"Most of them enjoy their activities after school hours because they can <b>take a rest and follow their interests</b>.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "My sister is very ______________. She has many new ideas.",
      wordGiven: "CREATE", accepted: ["creative"], correct: "creative",
      explanation: "Cần tính từ đứng sau \"is very\". <b>create</b> (v) → <b>creative</b> (adj, +ive, sáng tạo)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The teachers in my new school are nice and ______________.",
      wordGiven: "HELP", accepted: ["helpful"], correct: "helpful",
      explanation: "Cần tính từ song song với \"nice\". <b>help</b> (v) → <b>helpful</b> (adj, +ful, hay giúp đỡ, hữu ích)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "We are ______________ to study in an international school.",
      wordGiven: "EXCITE", accepted: ["excited"], correct: "excited",
      explanation: "Cần tính từ mô tả cảm xúc của chủ ngữ \"we\". <b>excite</b> (v) → <b>excited</b> (adj, +ed, cảm thấy phấn khích)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The school is located in a ______________ area.",
      wordGiven: "PEACE", accepted: ["peaceful"], correct: "peaceful",
      explanation: "Cần tính từ đứng trước danh từ \"area\". <b>peace</b> (n) → <b>peaceful</b> (adj, +ful, yên bình)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "There are three ______________ and a swimming pool in my school.",
      wordGiven: "BUILD", accepted: ["buildings"], correct: "buildings",
      explanation: "Sau số đếm \"three\" cần danh từ đếm được ở dạng <b>số nhiều</b>. <b>build</b> (v) → <b>buildings</b> (n, số nhiều, tòa nhà)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "We wear our ______________ every day at school.",
      wordGiven: "UNIFORM", accepted: ["uniforms"], correct: "uniforms",
      explanation: "Sau tính từ sở hữu \"our\" và trước \"every day\", cần danh từ số nhiều. <b>uniform</b> (n) → <b>uniforms</b> (n, số nhiều, đồng phục)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "boardingSchoolEntry",
      prompt: "Many students feel homesick when they first start living ____________________.",
      accepted: ["at boarding school"], correct: "at boarding school",
      explanation: "Từ điển cho ví dụ \"Life <b>at boarding school</b> can be difficult for students who miss their families.\" — khớp với ngữ cảnh nhớ nhà khi mới bắt đầu sống ở đó."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "boardingSchoolEntry",
      prompt: "Some children start to ____________________ at a very young age to learn how to be independent.",
      accepted: ["attend boarding school"], correct: "attend boarding school",
      explanation: "Từ điển cho ví dụ \"He is currently <b>attending a boarding school</b> in the countryside.\" — khớp với ngữ cảnh bắt đầu học nội trú từ nhỏ để tự lập."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "My father usually drives to work.",
      starter: "My father usually goes",
      accepted: ["my father usually goes to work by car"],
      correct: "My father usually goes to work by car.",
      explanation: "\"S + usually + drives + to + nơi chốn\" (lái xe đến đâu) có thể viết lại bằng \"<b>S + usually + goes + to + nơi chốn + by car</b>\" (đi đến đâu bằng ô tô).<br>→ <i>My father usually goes to work by car.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Peter doesn't go fishing in the winter.",
      starter: "Peter never",
      accepted: ["peter never goes fishing in the winter"],
      correct: "Peter never goes fishing in the winter.",
      explanation: "\"S + doesn't/don't + V\" (không làm gì) có thể viết lại bằng \"<b>S + never + V(s)</b>\" (không bao giờ làm gì), giữ nguyên thì hiện tại đơn.<br>→ <i>Peter never goes fishing in the winter.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "There are thirty-two students in Linh's class.",
      starter: "Linh's class",
      accepted: ["linh's class has thirty-two students"],
      correct: "Linh's class has thirty-two students.",
      explanation: "\"There are + số lượng + N + in + nơi chốn\" có thể viết lại bằng \"<b>Nơi chốn + has/have + số lượng + N</b>\", giữ nguyên nghĩa.<br>→ <i>Linh's class has thirty-two students.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "My dad usually drinks coffee in the morning.",
      starter: "My dad's habit is",
      accepted: ["my dad's habit is drinking coffee in the morning"],
      correct: "My dad's habit is drinking coffee in the morning.",
      explanation: "\"S + usually + V\" (thường xuyên làm gì, một thói quen) có thể viết lại bằng \"<b>S's habit is + V-ing</b>\" (thói quen của ai là làm gì).<br>→ <i>My dad's habit is drinking coffee in the morning.</i>"
    }
  ]
};
