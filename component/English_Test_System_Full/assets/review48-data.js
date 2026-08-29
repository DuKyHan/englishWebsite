const REVIEW = {
  id: "test48",
  testFile: "test48.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 6: A Visit to a School",
  title: "Knowledge Review — Unit 6, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "secondary education", pos: "phrase", ipa: "/ˈsekəndri ˌedʒuˈkeɪʃn/", meaning: "giáo dục bậc trung học", example: "In the USA, students start their secondary education at the age of 11.", exampleVi: "Ở Mỹ, học sinh bắt đầu chương trình giáo dục trung học ở tuổi 11." },
    { word: "diploma", pos: "n", ipa: "/dɪˈploʊmə/", meaning: "bằng, chứng chỉ", example: "Students take exams and get a High School Diploma.", exampleVi: "Học sinh làm bài thi và nhận bằng tốt nghiệp trung học." },
    { word: "religious", pos: "adj", ipa: "/rɪˈlɪdʒəs/", meaning: "thuộc tôn giáo", example: "Most of the private schools in the USA are religious schools.", exampleVi: "Hầu hết các trường tư ở Mỹ là trường tôn giáo." },
    { word: "establish", pos: "v", ipa: "/ɪˈstæblɪʃ/", meaning: "thành lập", example: "Monash University was established in 1958.", exampleVi: "Đại học Monash được thành lập vào năm 1958." },
    { word: "prominent", pos: "adj", ipa: "/ˈprɒmɪnənt/", meaning: "nổi tiếng, lỗi lạc", example: "The university was named after the prominent Australian general Sir John Monash.", exampleVi: "Trường được đặt theo tên vị tướng lỗi lạc người Úc Sir John Monash." },
    { word: "emphasis", pos: "n", ipa: "/ˈemfəsɪs/", meaning: "sự nhấn mạnh, trọng tâm", example: "The university was originally intended to have an emphasis on science and technology.", exampleVi: "Trường ban đầu được định hướng tập trung vào khoa học và công nghệ." },
    { word: "undergraduate", pos: "n/adj", ipa: "/ˌʌndərˈɡrædʒuət/", meaning: "sinh viên đại học (chưa tốt nghiệp)", example: "The university offered undergraduate and postgraduate degrees.", exampleVi: "Trường cung cấp các bằng đại học và sau đại học." },
    { word: "postgraduate", pos: "n/adj", ipa: "/ˌpoʊstˈɡrædʒuət/", meaning: "sau đại học", example: "Monash offered postgraduate degrees in many fields.", exampleVi: "Monash cung cấp các bằng sau đại học trong nhiều lĩnh vực." },
    { word: "innovative", pos: "adj", ipa: "/ˈɪnəveɪtɪv/", meaning: "đổi mới, sáng tạo", example: "Monash was known for its innovative teaching in law and medicine.", exampleVi: "Monash nổi tiếng với phương pháp giảng dạy đổi mới trong luật và y khoa." },
    { word: "assistance", pos: "n", ipa: "/əˈsɪstəns/", meaning: "sự hỗ trợ, giúp đỡ", example: "Staff members are always available to give assistance to visitors.", exampleVi: "Nhân viên luôn sẵn sàng hỗ trợ, giúp đỡ khách tham quan." },
    { word: "confidence", pos: "n", ipa: "/ˈkɒnfɪdəns/", meaning: "sự tự tin", example: "Going camping helps teenagers build up their confidence safely.", exampleVi: "Đi cắm trại giúp thanh thiếu niên xây dựng sự tự tin một cách an toàn." },
    { word: "facility", pos: "n", ipa: "/fəˈsɪləti/", meaning: "cơ sở vật chất", example: "Our school has great modern facilities, including a large playground.", exampleVi: "Trường tôi có cơ sở vật chất hiện đại, bao gồm một sân chơi rộng lớn." },
    { word: "entrance", pos: "n", ipa: "/ˈentrəns/", meaning: "lối vào; kỳ thi/lệ phí đầu vào", example: "You need a high score to pass the entrance exam to this university.", exampleVi: "Bạn cần điểm cao để vượt qua kỳ thi đầu vào của trường đại học này." },
    { word: "activity", pos: "n", ipa: "/ækˈtɪvəti/", meaning: "hoạt động", example: "The school organized many outdoor activities for students this summer.", exampleVi: "Nhà trường tổ chức nhiều hoạt động ngoài trời cho học sinh vào mùa hè này." },
    { word: "talented", pos: "adj", ipa: "/ˈtæləntɪd/", meaning: "có năng khiếu, tài năng", example: "She is a very talented student who can play three musical instruments.", exampleVi: "Cô ấy là một học sinh rất có năng khiếu, có thể chơi ba loại nhạc cụ." },
    { word: "laboratory", pos: "n", ipa: "/ˈlæbrətɔːri/", meaning: "phòng thí nghiệm", example: "They are doing some scientific tests in the laboratory.", exampleVi: "Họ đang làm một số thí nghiệm khoa học trong phòng thí nghiệm." },
    { word: "playground", pos: "n", ipa: "/ˈpleɪɡraʊnd/", meaning: "sân chơi", example: "Our school's new playground is very large.", exampleVi: "Sân chơi mới của trường tôi rất rộng." },
    { word: "in front of", pos: "phrase", ipa: "/ɪn frʌnt əv/", meaning: "ở phía trước", example: "The teacher stands right in front of the class.", exampleVi: "Giáo viên đứng ngay phía trước lớp." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'bằng, chứng chỉ':", options: { A: "diploma", B: "certificate holder", C: "degree candidate", D: "scholarship" }, correct: "A", explanation: "<b>diploma</b> (n) = bằng, chứng chỉ." },
      { id: "vp2", prompt: "\"Monash University was ______ in 1958.\"", options: { A: "established", B: "emphasized", C: "confident", D: "assisted" }, correct: "A", explanation: "\"be <b>established</b> in + năm\" (được thành lập vào năm) là cấu trúc bị động phổ biến khi giới thiệu lịch sử một trường." },
      { id: "vp3", prompt: "Choose the word that means 'nổi tiếng, lỗi lạc':", options: { A: "prominent", B: "ordinary", C: "unknown", D: "private" }, correct: "A", explanation: "<b>prominent</b> (adj) = nổi tiếng, lỗi lạc." },
      { id: "vp4", prompt: "\"The university was originally intended to have an ______ on science and technology.\"", options: { A: "emphasis", B: "entrance", C: "activity", D: "facility" }, correct: "A", explanation: "\"have an <b>emphasis</b> on + N\" (nhấn mạnh vào, tập trung vào) khớp với nội dung bài đọc về Monash." },
      { id: "vp5", prompt: "Choose the word that means 'đổi mới, sáng tạo':", options: { A: "innovative", B: "traditional", C: "boring", D: "difficult" }, correct: "A", explanation: "<b>innovative</b> (adj) = đổi mới, sáng tạo." },
      { id: "vp6", prompt: "Choose the word that means 'sự hỗ trợ, giúp đỡ':", options: { A: "assistance", B: "punishment", C: "confusion", D: "entrance" }, correct: "A", explanation: "<b>assistance</b> (n) = sự hỗ trợ, giúp đỡ." }
    ],
    fillblank: [
      { id: "vf1", prompt: "In the USA, students start their ______________ (giáo dục trung học) at the age of 11.", accepted: ["secondary education"], correct: "secondary education", explanation: "<b>secondary education</b> (phrase) = giáo dục bậc trung học." },
      { id: "vf2", prompt: "Most of the private schools in the USA are ______________ (thuộc tôn giáo) schools.", accepted: ["religious"], correct: "religious", explanation: "<b>religious</b> (adj) = thuộc tôn giáo." },
      { id: "vf3", prompt: "Monash was best known for its ______________ (đổi mới) teaching in law and medicine.", accepted: ["innovative"], correct: "innovative", explanation: "<b>innovative</b> (adj) = đổi mới, sáng tạo." },
      { id: "vf4", prompt: "Staff members are always available to give ______________ (sự hỗ trợ) to visitors.", accepted: ["assistance"], correct: "assistance", explanation: "<b>assistance</b> (n) = sự hỗ trợ, giúp đỡ." },
      { id: "vf5", prompt: "Going camping helps teenagers build up their ______________ (sự tự tin) safely.", accepted: ["confidence"], correct: "confidence", explanation: "<b>confidence</b> (n) = sự tự tin." },
      { id: "vf6", prompt: "You need a high score to pass the ______________ (kỳ thi đầu vào) to this university.", accepted: ["entrance exam"], correct: "entrance exam", explanation: "<b>entrance exam</b> (phrase) = kỳ thi đầu vào." }
    ],
    matching: {
      left: ["diploma", "prominent", "undergraduate", "postgraduate", "facility", "in front of"],
      right: ["bằng, chứng chỉ", "nổi tiếng, lỗi lạc", "sinh viên đại học", "sau đại học", "cơ sở vật chất", "ở phía trước"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"We love doing experiments in our school's ______ laboratory.\" (SCIENTIST)", options: { A: "scientist", B: "science", C: "scientific", D: "scientifically" }, correct: "B", explanation: "Cần danh từ bổ nghĩa cho \"laboratory\" → scientist (n) → <b>science</b> (n, khoa học)." },
      { id: "cw2", prompt: "\"The school organized many outdoor ______ for students this summer.\" (ACT)", options: { A: "act", B: "action", C: "activities", D: "active" }, correct: "C", explanation: "Cần danh từ số nhiều sau \"outdoor\" → act (v) → <b>activities</b> (n, các hoạt động)." },
      { id: "cw3", prompt: "\"Our school has great modern ______, including a large playground.\" (FACILITY)", options: { A: "facility", B: "facilities", C: "facilitate", D: "facilitator" }, correct: "B", explanation: "Cần danh từ số nhiều sau \"modern\" → facility (n) → <b>facilities</b> (số nhiều)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'prominent' mean?", options: { A: "nổi tiếng, lỗi lạc", B: "bình thường", C: "riêng tư", D: "trẻ tuổi" }, correct: "A", explanation: "prominent (adj) = nổi tiếng, lỗi lạc." },
      { id: "wm2", prompt: "What does 'innovative' mean?", options: { A: "đổi mới, sáng tạo", B: "truyền thống", C: "nhàm chán", D: "khó khăn" }, correct: "A", explanation: "innovative (adj) = đổi mới, sáng tạo." },
      { id: "wm3", prompt: "What does 'emphasis' mean?", options: { A: "sự nhấn mạnh, trọng tâm", B: "sự nhầm lẫn", C: "sự tự tin", D: "sự hỗ trợ" }, correct: "A", explanation: "emphasis (n) = sự nhấn mạnh, trọng tâm." }
    ],
    wordForm: [
      { id: "wf1", prompt: "We love doing experiments in our school's ______________ (SCIENTIST) laboratory.", accepted: ["science"], correct: "science", explanation: "scientist (n) → science (n)." },
      { id: "wf2", prompt: "The school organized many outdoor ______________ (ACT) for students this summer.", accepted: ["activities"], correct: "activities", explanation: "act (v) → activities (n)." },
      { id: "wf3", prompt: "Our school has great modern ______________ (FACILITY), including a large playground.", accepted: ["facilities"], correct: "facilities", explanation: "facility (n) → facilities (số nhiều)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "It's a good idea to + V ⇄ S + had better + V (bare-inf)",
      usage: "\"It's a good idea to do sth\" (nên làm gì) có thể viết lại bằng cấu trúc lời khuyên \"S + had better + V (bare-inf)\", giữ nguyên nghĩa khuyên nhủ.",
      formulas: [
        "It's a good idea (for S) to + V.  →  S + 'd better + V (bare-inf).",
        "It's cold today, so taking warm clothes is a good idea. → You'd better take warm clothes because it's cold today."
      ],
      signals: ["It's a good idea to...", "'d better + V (bare-inf)"],
      examples: [
        { en: "It's cold today, so taking warm clothes is a good idea.", vi: "Hôm nay trời lạnh, nên mang theo áo ấm là một ý hay." },
        { en: "You'd better take warm clothes because it's cold today.", vi: "Bạn nên mang theo áo ấm vì hôm nay trời lạnh." }
      ],
      mistakes: [
        { wrong: "You'd better to take warm clothes.", right: "You'd better take warm clothes. (không dùng \"to\" trước động từ nguyên thể sau \"had better\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "It's raining, so bringing an umbrella is a good idea. → You'd better ______________ (bring) an umbrella.", accepted: ["bring"], correct: "bring", explanation: "had better + V (bare-inf), không thêm \"to\"." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'It's a good idea to study hard before the exam.' → You'd better ______________ (study) hard before the exam.", accepted: ["study"], correct: "study", explanation: "had better + V (bare-inf)." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It's a good idea for you to leave early.' → ______________ (You'd better leave early).", accepted: ["you'd better leave early", "you had better leave early"], correct: "You'd better leave early", explanation: "It's a good idea to V → S 'd better V." }
        ]
      }
    },
    {
      id: "g2", name: "S + always + V + O ⇄ S's + game/activity + always + takes place + (time)",
      usage: "Câu chủ động với trạng từ tần suất \"always\" có thể viết lại bằng cách danh từ hóa hành động và dùng \"takes place\" (diễn ra), giữ nguyên nghĩa.",
      formulas: [
        "S + always + V(s) + O + (time).  →  S's + game/activity (of O) + always + takes place + (time).",
        "They always play badminton on Thursday. → Their game of badminton always takes place on Thursday."
      ],
      signals: ["S + always + V", "N + always + takes place"],
      examples: [
        { en: "They always play badminton on Thursday.", vi: "Họ luôn chơi cầu lông vào thứ Năm." },
        { en: "Their game of badminton always takes place on Thursday.", vi: "Trận cầu lông của họ luôn diễn ra vào thứ Năm." }
      ],
      mistakes: [
        { wrong: "Their game of badminton always take place on Thursday.", right: "Their game of badminton always takes place on Thursday. (chủ ngữ số ít \"game\" cần động từ chia \"takes\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "They always practise football on Sunday. → Their game of football always ______________ (takes place) on Sunday.", accepted: ["takes place"], correct: "takes place", explanation: "S always V O → N's game always takes place." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'We always have our music lesson on Monday.' → Our music lesson always ______________ (takes place) on Monday.", accepted: ["takes place"], correct: "takes place", explanation: "S always V O → N always takes place." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The students always do their chemistry experiment on Friday.' → ______________ (Their chemistry experiment always takes place on Friday).", accepted: ["their chemistry experiment always takes place on friday"], correct: "Their chemistry experiment always takes place on Friday", explanation: "S always V O → N always takes place." }
        ]
      }
    },
    {
      id: "g3", name: "S + is + adj + because + clause ⇄ S + is + such (a/an) + adj + N + that + clause",
      usage: "\"S + is + adj + because + mệnh đề kết quả\" (giải thích lý do) có thể viết lại bằng cấu trúc nhấn mạnh \"S + is + such (a/an) + adj + N + that + mệnh đề kết quả\", giữ nguyên nghĩa.",
      formulas: [
        "S + V + adj + because + clause (kết quả/lợi ích).  →  S + is + such (a/an) + adj + N + that + clause.",
        "I think gardening is fun because it helps me learn about plants. → Gardening is such a fun activity that it helps me learn about plants."
      ],
      signals: ["is + adj + because", "such (a/an) + adj + N + that"],
      examples: [
        { en: "I think gardening is fun because it helps me learn about plants.", vi: "Tôi nghĩ làm vườn thật thú vị vì nó giúp tôi học hỏi về thực vật." },
        { en: "Gardening is such a fun activity that it helps me learn about plants.", vi: "Làm vườn là một hoạt động thú vị đến mức nó giúp tôi học hỏi về thực vật." }
      ],
      mistakes: [
        { wrong: "Gardening is such fun activity that it helps me learn about plants.", right: "Gardening is such a fun activity that it helps me learn about plants. (cần mạo từ \"a/an\" trước danh từ đếm được số ít sau \"such\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "Swimming is relaxing because it helps me reduce stress. → Swimming is ______________ (such a relaxing activity) that it helps me reduce stress.", accepted: ["such a relaxing activity"], correct: "such a relaxing activity", explanation: "is adj because clause → is such a/an adj N that clause." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'Reading is useful because it improves my vocabulary.' → Reading is ______________ (such a useful hobby) that it improves my vocabulary.", accepted: ["such a useful hobby"], correct: "such a useful hobby", explanation: "is adj because clause → is such a/an adj N that clause." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'I think painting is interesting because it helps me express my feelings.' → ______________ (Painting is such an interesting activity that it helps me express my feelings).", accepted: ["painting is such an interesting activity that it helps me express my feelings"], correct: "Painting is such an interesting activity that it helps me express my feelings", explanation: "is adj because clause → is such a/an adj N that clause." }
        ]
      }
    },
    {
      id: "g4", name: "We'll + V (đề nghị) ⇄ Let's + V (bare-inf)",
      usage: "Câu đề nghị cùng làm gì dùng \"We'll + V\" có thể viết lại bằng cấu trúc rủ rê thân mật \"Let's + V (bare-inf)\", giữ nguyên nghĩa.",
      formulas: [
        "We'll + V (bare-inf) + (time/place).  →  Let's + V (bare-inf) + (time/place).",
        "We'll meet at 7 pm outside the theatre tonight. → Let's meet at 7 pm outside the theatre tonight."
      ],
      signals: ["We'll + V", "Let's + V (bare-inf)"],
      examples: [
        { en: "We'll meet at 7 pm outside the theatre tonight.", vi: "Chúng ta sẽ gặp nhau lúc 7 giờ tối bên ngoài rạp hát tối nay." },
        { en: "Let's meet at 7 pm outside the theatre tonight.", vi: "Hãy cùng gặp nhau lúc 7 giờ tối bên ngoài rạp hát tối nay." }
      ],
      mistakes: [
        { wrong: "Let's to meet at 7 pm.", right: "Let's meet at 7 pm. (không dùng \"to\" trước động từ nguyên thể sau \"Let's\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "We'll go to the museum this weekend. → ______________ (Let's) go to the museum this weekend.", accepted: ["let's"], correct: "Let's", explanation: "We'll + V → Let's + V (bare-inf)." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'We'll have lunch at the school canteen.' → ______________ (Let's) have lunch at the school canteen.", accepted: ["let's"], correct: "Let's", explanation: "We'll + V → Let's + V (bare-inf)." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'We'll visit the information desk first.' → ______________ (Let's visit the information desk first).", accepted: ["let's visit the information desk first"], correct: "Let's visit the information desk first", explanation: "We'll + V → Let's + V (bare-inf)." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) It was the first time (that) + S + had + V3 (Past Perfect)",
      usage: "Sau cụm \"It was the first time (that)\", mệnh đề theo sau dùng thì quá khứ hoàn thành \"had + V3\" để nhấn mạnh một sự việc chưa từng xảy ra trước thời điểm đó trong quá khứ.",
      formulas: [
        "It was the first time (that) + S + had (+ not) + V3.",
        "This was the first time in Australia that a university had been named after a person."
      ],
      signals: ["the first time (that)", "had + V3"],
      examples: [
        { en: "This was the first time in Australia that a university had been named after a person, rather than a city or state.", vi: "Đây là lần đầu tiên ở Úc một trường đại học được đặt theo tên một người, thay vì tên một thành phố hay tiểu bang." },
        { en: "It was the first time that she had visited a university campus.", vi: "Đó là lần đầu tiên cô ấy đến thăm một khuôn viên đại học." }
      ],
      mistakes: [
        { wrong: "It was the first time that she visited a university campus.", right: "It was the first time that she had visited a university campus. (cần dùng quá khứ hoàn thành \"had visited\" sau \"the first time that\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "It was the first time that he ______________ (had seen) such a large library. (see)", accepted: ["had seen"], correct: "had seen", explanation: "the first time (that) + S + had + V3." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite using past perfect: 'This was the first time a school named a building after a student.' → This was the first time a school ______________ (had named) a building after a student.", accepted: ["had named"], correct: "had named", explanation: "the first time (that) + S + had + V3." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'It was the first time that the university ______________ (offer) a scholarship like this.' (offer)", accepted: ["had offered"], correct: "had offered", explanation: "the first time (that) + S + had + V3." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "<mark data-w=\"Monash University is a public university located in Melbourne, Australia\">Monash University is a public university located in Melbourne, Australia</mark>. It was established in 1958 by an Act of the State Parliament of Victoria and is the second oldest university in the State of Victoria. <mark data-w=\"The university was named after the prominent Australian general Sir John Monash\">The university was named after the prominent Australian general Sir John Monash</mark>. This was the first time in Australia that a university had been named after a person, rather than a city or state. <mark data-w=\"It was originally intended to have an emphasis on science and technology\">It was originally intended to have an emphasis on science and technology</mark>. However, it quickly expanded beyond this. <mark data-w=\"In its early years, it offered undergraduate and postgraduate degrees in engineering, medicine, science, arts, economics and politics, education and law\">In its early years, it offered undergraduate and postgraduate degrees in engineering, medicine, science, arts, economics and politics, education and law</mark>. <mark data-w=\"Initially, it was best known for its strong research capacity in the sciences and for its innovative teaching in law and medicine\">Initially, it was best known for its strong research capacity in the sciences and for its innovative teaching in law and medicine</mark>.",
    vocabInContext: {
      "Monash University is a public university located in Melbourne, Australia": "Đại học Monash là một trường đại học công lập tọa lạc tại Melbourne, Úc",
      "The university was named after the prominent Australian general Sir John Monash": "trường được đặt theo tên vị tướng lỗi lạc người Úc Sir John Monash",
      "It was originally intended to have an emphasis on science and technology": "ban đầu trường được định hướng tập trung vào khoa học và công nghệ",
      "In its early years, it offered undergraduate and postgraduate degrees in engineering, medicine, science, arts, economics and politics, education and law": "trong những năm đầu, trường cung cấp các bằng đại học và sau đại học trong các ngành kỹ thuật, y khoa, khoa học, nghệ thuật, kinh tế và chính trị, giáo dục và luật",
      "Initially, it was best known for its strong research capacity in the sciences and for its innovative teaching in law and medicine": "ban đầu, trường nổi tiếng nhất về năng lực nghiên cứu khoa học mạnh mẽ và phương pháp giảng dạy đổi mới trong luật và y khoa"
    },
    translation: "<b>ĐẠI HỌC MONASH</b><br><br>Đại học Monash là một trường đại học công lập tọa lạc tại Melbourne, Úc. Trường được thành lập vào năm 1958 theo một Đạo luật của Nghị viện Bang Victoria và là trường đại học lâu đời thứ hai trong Bang Victoria. Trường được đặt theo tên vị tướng lỗi lạc người Úc Sir John Monash. Đây là lần đầu tiên ở Úc một trường đại học được đặt theo tên một người, thay vì tên một thành phố hay tiểu bang. Ban đầu trường được định hướng tập trung vào khoa học và công nghệ. Tuy nhiên, trường đã nhanh chóng mở rộng ra ngoài phạm vi đó. Trong những năm đầu, trường cung cấp các bằng đại học và sau đại học trong các ngành kỹ thuật, y khoa, khoa học, nghệ thuật, kinh tế và chính trị, giáo dục và luật. Ban đầu, trường nổi tiếng nhất về năng lực nghiên cứu khoa học mạnh mẽ và phương pháp giảng dạy đổi mới trong luật và y khoa.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Monash University is located in the State of Victoria.", correct: "True", explanation: "Đúng. Bài đọc: \"Monash University is a public university located in Melbourne, Australia... is the second oldest university in the State of Victoria.\"" },
      { id: "r2", type: "truefalse", prompt: "Monash University is the oldest university in its state.", correct: "False", explanation: "Sai. Bài đọc: \"...is the second oldest university in the State of Victoria\", không phải trường lâu đời nhất." },
      { id: "r3", type: "truefalse", prompt: "The university was named after a famous Australian city.", correct: "False", explanation: "Sai. Bài đọc: \"The university was named after the prominent Australian general Sir John Monash\", được đặt theo tên một vị tướng, không phải tên thành phố." },
      { id: "r4", type: "truefalse", prompt: "At first, the university wanted to focus mainly on science and technology.", correct: "True", explanation: "Đúng. Bài đọc: \"It was originally intended to have an emphasis on science and technology.\"" },
      { id: "r5", type: "mcq", prompt: "Who or what was Monash University named after?", options: { A: "A famous general", B: "An old city", C: "An Australian state", D: "A famous doctor" }, correct: "A", explanation: "Bài đọc: \"The university was named after the prominent Australian general Sir John Monash.\"" },
      { id: "r6", type: "mcq", prompt: "In its early years, what was the university well-known for?", options: { A: "Only teaching arts and economics", B: "Good research in sciences and new teaching ways in law and medicine", C: "Being the only university in Melbourne", D: "Having no courses in technology and engineering" }, correct: "B", explanation: "Bài đọc: \"Initially, it was best known for its strong research capacity in the sciences and for its innovative teaching in law and medicine.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the year in the passage when Monash University was established.", accepted: ["1958"], correct: "1958", explanation: "\"It was established in 1958 by an Act of the State Parliament of Victoria.\"" },
      { id: "r8", type: "mcq", prompt: "What was special about the way Monash University was named, compared to other Australian universities at that time?", options: { A: "It was the first time a university was named after a person, rather than a city or state.", B: "It was the first university to be named after a city.", C: "It was named after a famous doctor.", D: "It was named after its founder's daughter." }, correct: "A", explanation: "Bài đọc: \"This was the first time in Australia that a university had been named after a person, rather than a city or state.\"" },
      { id: "r9", type: "truefalse", prompt: "Monash University only ever offered degrees in science and technology.", correct: "False", explanation: "Sai. Bài đọc: trường \"quickly expanded beyond this\" và cung cấp bằng cấp trong nhiều lĩnh vực như kỹ thuật, y khoa, nghệ thuật, kinh tế, giáo dục và luật." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Monash University is a public university located in Melbourne, Australia.", suggested: "Đại học Monash là một trường đại học công lập tọa lạc tại Melbourne, Úc.", notes: "\"be located in + place\" (tọa lạc tại)." },
    { id: "t2", en: "The university was named after the prominent Australian general Sir John Monash.", suggested: "Trường được đặt theo tên vị tướng lỗi lạc người Úc Sir John Monash.", notes: "\"be named after + N\" (được đặt tên theo) — cấu trúc bị động." },
    { id: "t3", en: "It was originally intended to have an emphasis on science and technology.", suggested: "Ban đầu trường được định hướng tập trung vào khoa học và công nghệ.", notes: "\"have an emphasis on + N\" (nhấn mạnh vào, tập trung vào)." },
    { id: "t4", en: "In its early years, it offered undergraduate and postgraduate degrees in many fields.", suggested: "Trong những năm đầu, trường cung cấp các bằng đại học và sau đại học trong nhiều lĩnh vực.", notes: "\"offer degrees in + N\" (cung cấp bằng cấp trong lĩnh vực nào đó)." },
    { id: "t5", en: "It was best known for its innovative teaching in law and medicine.", suggested: "Trường nổi tiếng nhất với phương pháp giảng dạy đổi mới trong luật và y khoa.", notes: "\"be best known for + N\" (nổi tiếng nhất về)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "It's a good idea to + V ⇄ S + had better + V (bare-inf)",
      formula: "It's a good idea (for S) to + V.  →  S + 'd better + V (bare-inf).",
      example: { before: "It's cold today, so taking warm clothes is a good idea.", after: "You'd better take warm clothes because it's cold today." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "It's raining, so bringing an umbrella is a good idea. → You'd better ______________ (bring) an umbrella.", accepted: ["bring"], correct: "bring", explanation: "had better + V (bare-inf)." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'It's a good idea to study hard before the exam.' → You'd better ______________ (study) hard before the exam.", accepted: ["study"], correct: "study", explanation: "had better + V (bare-inf)." }
      ]
    },
    {
      id: "tr2", name: "S + always + V + O ⇄ N + always + takes place",
      formula: "S + always + V(s) + O + (time).  →  S's + game/activity (of O) + always + takes place + (time).",
      example: { before: "They always play badminton on Thursday.", after: "Their game of badminton always takes place on Thursday." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "They always practise football on Sunday. → Their game of football always ______________ (takes place) on Sunday.", accepted: ["takes place"], correct: "takes place", explanation: "S always V O → N's game always takes place." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'We always have our music lesson on Monday.' → Our music lesson always ______________ (takes place) on Monday.", accepted: ["takes place"], correct: "takes place", explanation: "S always V O → N always takes place." }
      ]
    },
    {
      id: "tr3", name: "is + adj + because + clause ⇄ is + such (a/an) + adj + N + that + clause",
      formula: "S + V + adj + because + clause.  →  S + is + such (a/an) + adj + N + that + clause.",
      example: { before: "I think gardening is fun because it helps me learn about plants.", after: "Gardening is such a fun activity that it helps me learn about plants." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "Swimming is relaxing because it helps me reduce stress. → Swimming is ______________ (such a relaxing activity) that it helps me reduce stress.", accepted: ["such a relaxing activity"], correct: "such a relaxing activity", explanation: "is adj because clause → is such a/an adj N that clause." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'Reading is useful because it improves my vocabulary.' → Reading is ______________ (such a useful hobby) that it improves my vocabulary.", accepted: ["such a useful hobby"], correct: "such a useful hobby", explanation: "is adj because clause → is such a/an adj N that clause." }
      ]
    },
    {
      id: "tr4", name: "We'll + V ⇄ Let's + V (bare-inf)",
      formula: "We'll + V (bare-inf) + (time/place).  →  Let's + V (bare-inf) + (time/place).",
      example: { before: "We'll meet at 7 pm outside the theatre tonight.", after: "Let's meet at 7 pm outside the theatre tonight." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "We'll go to the museum this weekend. → ______________ (Let's) go to the museum this weekend.", accepted: ["let's"], correct: "Let's", explanation: "We'll + V → Let's + V (bare-inf)." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'We'll have lunch at the school canteen.' → ______________ (Let's) have lunch at the school canteen.", accepted: ["let's"], correct: "Let's", explanation: "We'll + V → Let's + V (bare-inf)." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Prominent' means:", options: { A: "nổi tiếng, lỗi lạc", B: "bình thường", C: "riêng tư", D: "trẻ tuổi" }, correct: "A", explanation: "prominent (adj) = nổi tiếng, lỗi lạc." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Innovative' means:", options: { A: "đổi mới, sáng tạo", B: "truyền thống", C: "nhàm chán", D: "khó khăn" }, correct: "A", explanation: "innovative (adj) = đổi mới, sáng tạo." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "You need a high score to pass the ______________ (kỳ thi đầu vào) to this university.", accepted: ["entrance exam"], correct: "entrance exam", explanation: "entrance exam (phrase) = kỳ thi đầu vào." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "It's cold today, so taking warm clothes is a good idea. → You'd ______ take warm clothes.", options: { A: "better", B: "rather", C: "should", D: "must" }, correct: "A", explanation: "'d better + V (bare-inf)." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "They always play badminton on Thursday. → Their game of badminton always ______ place on Thursday.", options: { A: "takes", B: "take", C: "taking", D: "took" }, correct: "A", explanation: "Chủ ngữ số ít \"game\" cần động từ chia \"takes\"." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "I think gardening is fun because it helps me learn about plants. → Gardening is ______________ (such a fun activity) that it helps me learn about plants.", accepted: ["such a fun activity"], correct: "such a fun activity", explanation: "is adj because clause → is such a/an adj N that clause." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "We'll meet at 7 pm outside the theatre tonight. → ______________ (Let's) meet at 7 pm outside the theatre tonight.", accepted: ["let's"], correct: "Let's", explanation: "We'll + V → Let's + V (bare-inf)." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Monash University is the oldest university in its state.", correct: "False", explanation: "Sai theo bài đọc — Monash là trường lâu đời thứ hai trong bang." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "The university was named after a famous Australian city.", correct: "False", explanation: "Sai theo bài đọc — trường được đặt theo tên một vị tướng, không phải tên thành phố." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Who or what was Monash University named after?", options: { A: "A famous general", B: "An old city", C: "An Australian state", D: "A famous doctor" }, correct: "A", explanation: "Bài đọc nêu rõ trường được đặt theo tên tướng Sir John Monash." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "We love doing experiments in our school's ______________ (SCIENTIST) laboratory.", accepted: ["science"], correct: "science", explanation: "scientist (n) → science (n)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The school organized many outdoor ______________ (ACT) for students this summer.", accepted: ["activities"], correct: "activities", explanation: "act (v) → activities (n)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Our school has great modern ______________ (FACILITY), including a large playground.", accepted: ["facilities"], correct: "facilities", explanation: "facility (n) → facilities (số nhiều)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'sự tự tin'?", options: { A: "confidence", B: "assistance", C: "emphasis", D: "diploma" }, correct: "A", explanation: "confidence (n) = sự tự tin." }
  ]
};
