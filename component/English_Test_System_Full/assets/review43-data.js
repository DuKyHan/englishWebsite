const REVIEW = {
  id: "test43",
  testFile: "test43.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 4: Music and Arts",
  title: "Knowledge Review — Unit 4, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "orchestra", pos: "n", ipa: "/ˈɔːrkɪstrə/", meaning: "dàn nhạc", example: "The orchestra performed its final concert of the season perfectly.", exampleVi: "Dàn nhạc đã biểu diễn hoàn hảo buổi hòa nhạc cuối mùa của mình." },
    { word: "compose", pos: "v", ipa: "/kəmˈpoʊz/", meaning: "sáng tác (nhạc)", example: "He composes lots of good songs in his free time.", exampleVi: "Anh ấy sáng tác rất nhiều bài hát hay trong thời gian rảnh." },
    { word: "poet", pos: "n", ipa: "/ˈpoʊət/", meaning: "nhà thơ", example: "Nguyen Dinh Chieu was known as one of the most famous poets in Viet Nam.", exampleVi: "Nguyễn Đình Chiểu được biết đến là một trong những nhà thơ nổi tiếng nhất Việt Nam." },
    { word: "comedy", pos: "n", ipa: "/ˈkɒmədi/", meaning: "hài kịch", example: "It's comedy. It makes me laugh a lot.", exampleVi: "Đó là hài kịch. Nó khiến tôi cười rất nhiều." },
    { word: "costume", pos: "n", ipa: "/ˈkɒstuːm/", meaning: "trang phục biểu diễn", example: "The leading actress changed her costume many times during the play.", exampleVi: "Nữ diễn viên chính đã thay trang phục nhiều lần trong vở kịch." },
    { word: "palace", pos: "n", ipa: "/ˈpæləs/", meaning: "cung điện", example: "Their house is really big. It looks like a palace.", exampleVi: "Ngôi nhà của họ thực sự rất lớn. Nó trông giống như một cung điện." },
    { word: "talent", pos: "n", ipa: "/ˈtælənt/", meaning: "tài năng, năng khiếu", example: "As a child, Leonardo showed great talent in drawing and music.", exampleVi: "Khi còn nhỏ, Leonardo đã bộc lộ tài năng lớn trong việc vẽ và âm nhạc." },
    { word: "apprentice", pos: "n", ipa: "/əˈprentɪs/", meaning: "người học việc", example: "Leonardo became an apprentice to a well-known artist.", exampleVi: "Leonardo trở thành người học việc của một nghệ sĩ nổi tiếng." },
    { word: "admire", pos: "v", ipa: "/ədˈmaɪər/", meaning: "ngưỡng mộ", example: "People still admire his work and creativity.", exampleVi: "Mọi người vẫn ngưỡng mộ tác phẩm và sự sáng tạo của ông." },
    { word: "creativity", pos: "n", ipa: "/ˌkriːeɪˈtɪvəti/", meaning: "sự sáng tạo", example: "People still admire his work and creativity.", exampleVi: "Mọi người vẫn ngưỡng mộ tác phẩm và sự sáng tạo của ông." },
    { word: "genius", pos: "n", ipa: "/ˈdʒiːniəs/", meaning: "thiên tài", example: "Leonardo da Vinci is often called a genius.", exampleVi: "Leonardo da Vinci thường được gọi là một thiên tài." },
    { word: "impression", pos: "n", ipa: "/ɪmˈpreʃn/", meaning: "ấn tượng", example: "The young artist made a great impression on the judges with her skills.", exampleVi: "Nghệ sĩ trẻ đã gây ấn tượng lớn với ban giám khảo bằng kỹ năng của mình." },
    { word: "performance", pos: "n", ipa: "/pərˈfɔːrməns/", meaning: "màn trình diễn", example: "The actors gave a wonderful performance in the school play yesterday.", exampleVi: "Các diễn viên đã có một màn trình diễn tuyệt vời trong vở kịch của trường hôm qua." },
    { word: "celebration", pos: "n", ipa: "/ˌseləˈbreɪʃn/", meaning: "lễ kỷ niệm", example: "We are planning a big celebration for the school's music festival.", exampleVi: "Chúng tôi đang lên kế hoạch cho một lễ kỷ niệm lớn cho lễ hội âm nhạc của trường." },
    { word: "photography", pos: "n", ipa: "/fəˈtɒɡrəfi/", meaning: "nhiếp ảnh", example: "Digital photography allows people to capture beautiful moments easily.", exampleVi: "Nhiếp ảnh kỹ thuật số cho phép mọi người dễ dàng ghi lại những khoảnh khắc đẹp." },
    { word: "singer", pos: "n", ipa: "/ˈsɪŋər/", meaning: "ca sĩ", example: "Taylor Swift is a very talented singer who has millions of fans worldwide.", exampleVi: "Taylor Swift là một ca sĩ rất tài năng với hàng triệu người hâm mộ trên toàn thế giới." },
    { word: "puppet", pos: "n", ipa: "/ˈpʌpɪt/", meaning: "con rối", example: "The traditional water puppet show attracted a lot of foreign tourists.", exampleVi: "Buổi biểu diễn múa rối nước truyền thống đã thu hút rất nhiều khách du lịch nước ngoài." },
    { word: "relax", pos: "v", ipa: "/rɪˈlæks/", meaning: "thư giãn", example: "Listening to music helped me relax and feel more creative after school.", exampleVi: "Nghe nhạc giúp tôi thư giãn và cảm thấy sáng tạo hơn sau giờ học." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'dàn nhạc':", options: { A: "orchestra", B: "audience", C: "chorus", D: "band member" }, correct: "A", explanation: "<b>orchestra</b> (n) = dàn nhạc." },
      { id: "vp2", prompt: "Choose the word that means 'nhà thơ':", options: { A: "poet", B: "painter", C: "actor", D: "composer" }, correct: "A", explanation: "<b>poet</b> (n) = nhà thơ." },
      { id: "vp3", prompt: "\"The leading actress changed her ______ many times during the play.\"", options: { A: "costume", B: "voice", C: "role", D: "custom" }, correct: "A", explanation: "\"<b>costume</b>\" (trang phục biểu diễn) phù hợp với ngữ cảnh về trang phục của diễn viên." },
      { id: "vp4", prompt: "Choose the word that means 'ngưỡng mộ':", options: { A: "admire", B: "avoid", C: "ignore", D: "compose" }, correct: "A", explanation: "<b>admire</b> (v) = ngưỡng mộ." },
      { id: "vp5", prompt: "\"As a child, Leonardo showed great ______ in drawing and music.\"", options: { A: "talent", B: "custom", C: "costume", D: "palace" }, correct: "A", explanation: "\"showed great <b>talent</b>\" (bộc lộ tài năng) là cụm cố định." },
      { id: "vp6", prompt: "Choose the word that means 'thư giãn':", options: { A: "relax", B: "worry", C: "rush", D: "shout" }, correct: "A", explanation: "<b>relax</b> (v) = thư giãn." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The ______________ (dàn nhạc) performed its final concert of the season perfectly.", accepted: ["orchestra"], correct: "orchestra", explanation: "<b>orchestra</b> (n) = dàn nhạc." },
      { id: "vf2", prompt: "Nguyen Dinh Chieu was known as one of the most famous ______________ (nhà thơ) in Viet Nam.", accepted: ["poets"], correct: "poets", explanation: "<b>poet</b> (n) = nhà thơ (số nhiều: poets)." },
      { id: "vf3", prompt: "Leonardo became an ______________ (người học việc) to a well-known artist.", accepted: ["apprentice"], correct: "apprentice", explanation: "<b>apprentice</b> (n) = người học việc." },
      { id: "vf4", prompt: "People still admire his work and ______________ (sự sáng tạo).", accepted: ["creativity"], correct: "creativity", explanation: "<b>creativity</b> (n) = sự sáng tạo." },
      { id: "vf5", prompt: "Leonardo da Vinci is often called a ______________ (thiên tài).", accepted: ["genius"], correct: "genius", explanation: "<b>genius</b> (n) = thiên tài." },
      { id: "vf6", prompt: "The traditional water ______________ (con rối) show attracted a lot of foreign tourists.", accepted: ["puppet"], correct: "puppet", explanation: "<b>puppet</b> (n) = con rối." }
    ],
    matching: {
      left: ["comedy", "palace", "impression", "celebration", "photography", "relax"],
      right: ["hài kịch", "cung điện", "ấn tượng", "lễ kỷ niệm", "nhiếp ảnh", "thư giãn"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The young artist made a great ______ on the judges with her skills.\" (IMPRESS)", options: { A: "impress", B: "impression", C: "impressive", D: "impressively" }, correct: "B", explanation: "Cần danh từ sau \"great\" → impress (v) → <b>impression</b> (n, +ion)." },
      { id: "cw2", prompt: "\"The actors gave a wonderful ______ in the school play yesterday.\" (PERFORM)", options: { A: "perform", B: "performer", C: "performance", D: "performing" }, correct: "C", explanation: "Cần danh từ sau \"wonderful\" → perform (v) → <b>performance</b> (n, +ance)." },
      { id: "cw3", prompt: "\"We are planning a big ______ for the school's music festival.\" (CELEBRATE)", options: { A: "celebrate", B: "celebration", C: "celebrating", D: "celebrated" }, correct: "B", explanation: "Cần danh từ sau \"big\" → celebrate (v) → <b>celebration</b> (n, +ion)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'orchestra' mean?", options: { A: "dàn nhạc", B: "khán giả", C: "bài hát", D: "sân khấu" }, correct: "A", explanation: "orchestra (n) = dàn nhạc." },
      { id: "wm2", prompt: "What does 'genius' mean?", options: { A: "người bình thường", B: "thiên tài", C: "học sinh", D: "giáo viên" }, correct: "B", explanation: "genius (n) = thiên tài." },
      { id: "wm3", prompt: "What does 'apprentice' mean?", options: { A: "người học việc", B: "ông chủ", C: "khách hàng", D: "nghệ sĩ nổi tiếng" }, correct: "A", explanation: "apprentice (n) = người học việc." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The young artist made a great ______________ (IMPRESS) on the judges with her skills.", accepted: ["impression"], correct: "impression", explanation: "impress (v) → impression (n)." },
      { id: "wf2", prompt: "The actors gave a wonderful ______________ (PERFORM) in the school play yesterday.", accepted: ["performance"], correct: "performance", explanation: "perform (v) → performance (n)." },
      { id: "wf3", prompt: "We are planning a big ______________ (CELEBRATE) for the school's music festival.", accepted: ["celebration"], correct: "celebration", explanation: "celebrate (v) → celebration (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "like + V-ing ⇄ would like + to V",
      usage: "\"like + V-ing\" (thích làm gì nói chung) khi được dùng trong câu hỏi lời mời/hỏi ý kiến cụ thể có thể viết lại bằng \"would like + to + V\", giữ nguyên nghĩa nhưng lịch sự và cụ thể hơn.",
      formulas: [
        "Do you like + V-ing?  →  Would you like + to + V?",
        "Do you like seeing a water puppet show? → Would you like to see a water puppet show?"
      ],
      signals: ["Do you like V-ing?", "Would you like to V?"],
      examples: [
        { en: "Do you like seeing a water puppet show?", vi: "Bạn có thích xem múa rối nước không?" },
        { en: "Would you like to see a water puppet show?", vi: "Bạn có muốn xem múa rối nước không?" }
      ],
      mistakes: [
        { wrong: "Would you like seeing a water puppet show?", right: "Would you like to see a water puppet show? (cần \"to V\" sau \"would like\", không dùng V-ing)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "Do you like watching cartoons? → Would you like ______________ (to watch) cartoons?", accepted: ["to watch"], correct: "to watch", explanation: "Do you like V-ing? → Would you like to V?" }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'Do you like listening to jazz music?' → Would you like ______________ (to listen) to jazz music?", accepted: ["to listen"], correct: "to listen", explanation: "Do you like V-ing? → Would you like to V?" }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Do you like visiting the art gallery this weekend?' → ______________ (Would you like to visit the art gallery this weekend?).", accepted: ["would you like to visit the art gallery this weekend"], correct: "Would you like to visit the art gallery this weekend?", explanation: "Do you like V-ing? → Would you like to V?" }
        ]
      }
    },
    {
      id: "g2", name: "N1 is better than N2 ⇄ be better at N1 than N2",
      usage: "\"N1 + is better than + N2\" (cái gì giỏi hơn cái gì) khi chủ ngữ là người, có thể viết lại bằng \"S + be better at + N1 + than + N2\", giữ nguyên nghĩa.",
      formulas: [
        "My N1 is better than my N2.  →  I am better at N1 than N2.",
        "My English is better than my French. → I am better at English than French."
      ],
      signals: ["N1 is better than N2", "be better at N1 than N2"],
      examples: [
        { en: "My English is better than my French.", vi: "Tiếng Anh của tôi giỏi hơn tiếng Pháp của tôi." },
        { en: "I am better at English than French.", vi: "Tôi giỏi tiếng Anh hơn tiếng Pháp." }
      ],
      mistakes: [
        { wrong: "I am better in English than French.", right: "I am better at English than French. (dùng giới từ \"at\" với \"be good/better at\", không dùng \"in\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "My maths is better than my art. → I am better ______________ (at) maths than art.", accepted: ["at"], correct: "at", explanation: "be better at N1 than N2." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Her singing is better than her dancing.' → She is better ______________ (at) singing than dancing.", accepted: ["at"], correct: "at", explanation: "be better at N1 than N2." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'His drawing is better than his painting.' → ______________ (He is better at drawing than painting).", accepted: ["he is better at drawing than painting"], correct: "He is better at drawing than painting", explanation: "N1 is better than N2 → be better at N1 than N2." }
        ]
      }
    },
    {
      id: "g3", name: "not as + adj + as ⇄ comparative (-er/more)",
      usage: "\"A + isn't as + adj + as + B\" (A không... bằng B) có nghĩa là B hơn A về đặc điểm đó, nên có thể viết lại bằng câu so sánh hơn \"B + is + adj-er/more adj + than + A\", giữ nguyên nghĩa.",
      formulas: [
        "A + isn't as + adj + as + B.  →  B + is + adj-er/more + adj + than + A.",
        "Grapefruit juice isn't as sweet as orange juice. → Orange juice is sweeter than grapefruit juice."
      ],
      signals: ["A isn't as adj as B", "B is adj-er than A"],
      examples: [
        { en: "Grapefruit juice isn't as sweet as orange juice.", vi: "Nước ép bưởi không ngọt bằng nước cam." },
        { en: "Orange juice is sweeter than grapefruit juice.", vi: "Nước cam ngọt hơn nước ép bưởi." }
      ],
      mistakes: [
        { wrong: "Orange juice is more sweeter than grapefruit juice.", right: "Orange juice is sweeter than grapefruit juice. (không dùng \"more\" cùng lúc với đuôi \"-er\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "This song isn't as popular as that one. → That song is ______________ (more popular) than this one.", accepted: ["more popular"], correct: "more popular", explanation: "not as adj as → comparative." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'His voice isn't as loud as hers.' → Her voice is ______________ (louder) than his.", accepted: ["louder"], correct: "louder", explanation: "not as adj as → comparative." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'This painting isn't as expensive as that one.' → ______________ (That painting is more expensive than this one).", accepted: ["that painting is more expensive than this one"], correct: "That painting is more expensive than this one", explanation: "not as adj as → comparative." }
        ]
      }
    },
    {
      id: "g4", name: "look like + N ⇄ look similar to + N",
      usage: "\"S + look like + N\" (trông giống ai/cái gì) có thể viết lại bằng \"S + look similar to + N\", giữ nguyên nghĩa.",
      formulas: [
        "S + look(s) like + N.  →  S + look(s) similar to + N.",
        "I think your sister looks like singer Hong Nhung. → I think your sister looks similar to singer Hong Nhung."
      ],
      signals: ["look like N", "look similar to N"],
      examples: [
        { en: "I think your sister looks like singer Hong Nhung.", vi: "Tôi nghĩ chị/em gái của bạn trông giống ca sĩ Hồng Nhung." },
        { en: "I think your sister looks similar to singer Hong Nhung.", vi: "Tôi nghĩ chị/em gái của bạn trông tương tự ca sĩ Hồng Nhung." }
      ],
      mistakes: [
        { wrong: "She looks similar with her mother.", right: "She looks similar to her mother. (dùng giới từ \"to\" với \"similar\", không dùng \"with\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "He looks like his father. → He looks ______________ (similar to) his father.", accepted: ["similar to"], correct: "similar to", explanation: "look like N → look similar to N." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'This song sounds like the one from the movie.' → This song sounds ______________ (similar to) the one from the movie.", accepted: ["similar to"], correct: "similar to", explanation: "sound/look like N → sound/look similar to N." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'That statue looks like a real person.' → ______________ (That statue looks similar to a real person).", accepted: ["that statue looks similar to a real person"], correct: "That statue looks similar to a real person", explanation: "look like N → look similar to N." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) used to + V",
      usage: "Cấu trúc \"used to + V\" dùng để nói về một thói quen hoặc hành động lặp lại trong quá khứ nhưng không còn đúng ở hiện tại.",
      formulas: [
        "S + used to + V.",
        "I used to have music lessons at school. / We used to go to clubs and pop concerts."
      ],
      signals: ["used to + V (thói quen trong quá khứ, không còn tiếp diễn)"],
      examples: [
        { en: "The songs my mother used to sing to me when I was three or four years old.", vi: "Những bài hát mẹ tôi từng hát cho tôi nghe khi tôi khoảng ba, bốn tuổi." },
        { en: "When I was a teenager, we used to go to clubs and pop concerts.", vi: "Khi còn là thiếu niên, chúng tôi thường đi đến các câu lạc bộ và buổi hòa nhạc pop." }
      ],
      mistakes: [
        { wrong: "I used to going to concerts.", right: "I used to go to concerts. (\"used to\" theo sau bởi động từ nguyên thể, không dùng V-ing)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "When I was young, I ______________ (used to) play the piano every day.", accepted: ["used to"], correct: "used to", explanation: "used to + V (thói quen trong quá khứ)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'She played the guitar every weekend when she was a student.' → She ______________ (used to play) the guitar every weekend when she was a student.", accepted: ["used to play"], correct: "used to play", explanation: "used to + V (thói quen trong quá khứ)." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'They ______________ (used to) go to pop concerts a lot, but they don't anymore.'", accepted: ["used to"], correct: "used to", explanation: "used to + V (thói quen trong quá khứ, không còn đúng ở hiện tại)." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Hi! My name is Andrew. I'm twenty years old. I love music. My earliest memory of music is <mark data-w=\"the songs my mother used to sing to me when I was about three or four years old\">the songs my mother used to sing to me when I was about three or four years old</mark>. I used to have music lessons at school too. My mother wanted me to take up the piano, but I didn't like it at all because <mark data-w=\"I loved to play the guitar\">I loved to play the guitar</mark>. When I was ten, I bought my first record with some birthday money. I think it was the record by the Beatles. As I grew older, <mark data-w=\"my musical taste changed\">my musical taste changed</mark>. When I was a teenager, we used to go to clubs and pop concerts to see groups playing live, mostly rock and pop. At that time, I didn't like classical music at all. Later, when I went to university, <mark data-w=\"I really got into classical music and started going to concerts\">I really got into classical music and started going to concerts</mark>. I was particularly keen on opera. Nowadays, I listen to all sorts of music, but I'm not too keen on loud rock music. On the whole, I prefer classical music and opera, but I still listen to pop music in my car and play the guitar sometimes. I haven't been to any concerts for ages, but I've always got a CD at home. <mark data-w=\"Music is an important part of my life\">Music is an important part of my life</mark>.",
    vocabInContext: {
      "the songs my mother used to sing to me when I was about three or four years old": "những bài hát mẹ tôi từng hát cho tôi nghe khi tôi khoảng ba, bốn tuổi",
      "I loved to play the guitar": "tôi thích chơi đàn guitar",
      "my musical taste changed": "gu âm nhạc của tôi đã thay đổi",
      "I really got into classical music and started going to concerts": "tôi thực sự thích nhạc cổ điển và bắt đầu đi xem các buổi hòa nhạc",
      "Music is an important part of my life": "âm nhạc là một phần quan trọng trong cuộc sống của tôi"
    },
    translation: "<b>ÂM NHẠC VÀ NGHỆ THUẬT</b><br><br>Chào! Tên tôi là Andrew. Tôi hai mươi tuổi. Tôi yêu âm nhạc. Ký ức sớm nhất của tôi về âm nhạc là những bài hát mẹ tôi từng hát cho tôi nghe khi tôi khoảng ba, bốn tuổi. Tôi cũng từng học nhạc ở trường. Mẹ tôi muốn tôi học piano, nhưng tôi hoàn toàn không thích vì tôi thích chơi đàn guitar. Khi tôi mười tuổi, tôi đã mua chiếc đĩa nhạc đầu tiên của mình bằng tiền mừng sinh nhật. Tôi nghĩ đó là đĩa nhạc của ban nhạc The Beatles. Khi lớn hơn, gu âm nhạc của tôi đã thay đổi. Khi còn là thiếu niên, chúng tôi thường đi đến các câu lạc bộ và buổi hòa nhạc pop để xem các ban nhạc biểu diễn trực tiếp, chủ yếu là nhạc rock và pop. Lúc đó, tôi hoàn toàn không thích nhạc cổ điển. Sau này, khi vào đại học, tôi thực sự thích nhạc cổ điển và bắt đầu đi xem các buổi hòa nhạc. Tôi đặc biệt yêu thích nhạc opera. Ngày nay, tôi nghe đủ loại nhạc, nhưng tôi không quá thích nhạc rock ồn ào. Nhìn chung, tôi thích nhạc cổ điển và opera, nhưng tôi vẫn nghe nhạc pop trong xe và thỉnh thoảng chơi guitar. Tôi đã không đi xem hòa nhạc từ lâu rồi, nhưng tôi luôn có đĩa CD ở nhà. Âm nhạc là một phần quan trọng trong cuộc sống của tôi.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Andrew's mother wanted him to learn how to play the guitar.", correct: "False", explanation: "Sai. Bài đọc: \"My mother wanted me to take up the piano, but I didn't like it at all because I loved to play the guitar.\"" },
      { id: "r2", type: "truefalse", prompt: "Andrew did not like classical music when he was a teenager.", correct: "True", explanation: "Đúng. Bài đọc: \"At that time, I didn't like classical music at all.\"" },
      { id: "r3", type: "truefalse", prompt: "Andrew started to like opera music when he was a university student.", correct: "True", explanation: "Đúng. Bài đọc: \"Later, when I went to university... I was particularly keen on opera.\"" },
      { id: "r4", type: "truefalse", prompt: "Andrew still plays a musical instrument nowadays.", correct: "True", explanation: "Đúng. Bài đọc: \"I still listen to pop music in my car and play the guitar sometimes.\"" },
      { id: "r5", type: "mcq", prompt: "What was the first record Andrew bought when he was ten?", options: { A: "A record by the Beatles.", B: "A piano album.", C: "A classical music CD.", D: "A collection of opera songs." }, correct: "A", explanation: "Bài đọc: \"I bought my first record... I think it was the record by the Beatles.\"" },
      { id: "r6", type: "mcq", prompt: "Which kind of music does Andrew NOT like very much now?", options: { A: "Loud rock music.", B: "Pop music.", C: "Classical music.", D: "Opera music." }, correct: "A", explanation: "Bài đọc: \"I'm not too keen on loud rock music.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'gu âm nhạc thay đổi'.", accepted: ["my musical taste changed"], correct: "my musical taste changed", explanation: "\"my musical taste changed\" = gu âm nhạc của tôi đã thay đổi." },
      { id: "r8", type: "mcq", prompt: "How does Andrew describe music at the end of the passage?", options: { A: "An important part of his life.", B: "A waste of time.", C: "Something he no longer enjoys.", D: "A subject he studies at university." }, correct: "A", explanation: "Bài đọc kết thúc: \"Music is an important part of my life.\"" },
      { id: "r9", type: "truefalse", prompt: "Andrew has been to a lot of concerts recently.", correct: "False", explanation: "Sai. Bài đọc: \"I haven't been to any concerts for ages.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "My earliest memory of music is the songs my mother used to sing to me.", suggested: "Ký ức sớm nhất của tôi về âm nhạc là những bài hát mẹ tôi từng hát cho tôi nghe.", notes: "\"used to + V\" diễn tả thói quen trong quá khứ." },
    { id: "t2", en: "My mother wanted me to take up the piano, but I loved to play the guitar.", suggested: "Mẹ tôi muốn tôi học piano, nhưng tôi thích chơi đàn guitar.", notes: "\"want sb to V\" (muốn ai làm gì); \"take up + N\" (bắt đầu học/theo đuổi một môn gì)." },
    { id: "t3", en: "As I grew older, my musical taste changed.", suggested: "Khi lớn hơn, gu âm nhạc của tôi đã thay đổi.", notes: "\"as + mệnh đề\" (khi, trong khi)." },
    { id: "t4", en: "I really got into classical music and started going to concerts.", suggested: "Tôi thực sự thích nhạc cổ điển và bắt đầu đi xem các buổi hòa nhạc.", notes: "\"get into + N\" (bắt đầu thích/quan tâm đến); \"start + V-ing\"." },
    { id: "t5", en: "Music is an important part of my life.", suggested: "Âm nhạc là một phần quan trọng trong cuộc sống của tôi.", notes: "\"an important part of + N\" (một phần quan trọng của)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "like + V-ing ⇄ would like + to V",
      formula: "Do you like + V-ing?  →  Would you like + to + V?",
      example: { before: "Do you like seeing a water puppet show?", after: "Would you like to see a water puppet show?" },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "Do you like watching cartoons? → Would you like ______________ (to watch) cartoons?", accepted: ["to watch"], correct: "to watch", explanation: "Do you like V-ing? → Would you like to V?" },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'Do you like listening to jazz music?' → Would you like ______________ (to listen) to jazz music?", accepted: ["to listen"], correct: "to listen", explanation: "Do you like V-ing? → Would you like to V?" }
      ]
    },
    {
      id: "tr2", name: "N1 is better than N2 ⇄ be better at N1 than N2",
      formula: "My N1 is better than my N2.  →  I am better at N1 than N2.",
      example: { before: "My English is better than my French.", after: "I am better at English than French." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "My maths is better than my art. → I am better ______________ (at) maths than art.", accepted: ["at"], correct: "at", explanation: "be better at N1 than N2." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'Her singing is better than her dancing.' → She is better ______________ (at) singing than dancing.", accepted: ["at"], correct: "at", explanation: "be better at N1 than N2." }
      ]
    },
    {
      id: "tr3", name: "not as + adj + as ⇄ comparative (-er/more)",
      formula: "A + isn't as + adj + as + B.  →  B + is + adj-er/more + adj + than + A.",
      example: { before: "Grapefruit juice isn't as sweet as orange juice.", after: "Orange juice is sweeter than grapefruit juice." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "This song isn't as popular as that one. → That song is ______________ (more popular) than this one.", accepted: ["more popular"], correct: "more popular", explanation: "not as adj as → comparative." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'His voice isn't as loud as hers.' → Her voice is ______________ (louder) than his.", accepted: ["louder"], correct: "louder", explanation: "not as adj as → comparative." }
      ]
    },
    {
      id: "tr4", name: "look like + N ⇄ look similar to + N",
      formula: "S + look(s) like + N.  →  S + look(s) similar to + N.",
      example: { before: "I think your sister looks like singer Hong Nhung.", after: "I think your sister looks similar to singer Hong Nhung." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "He looks like his father. → He looks ______________ (similar to) his father.", accepted: ["similar to"], correct: "similar to", explanation: "look like N → look similar to N." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'This song sounds like the one from the movie.' → This song sounds ______________ (similar to) the one from the movie.", accepted: ["similar to"], correct: "similar to", explanation: "sound/look like N → sound/look similar to N." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Orchestra' means:", options: { A: "dàn nhạc", B: "khán giả", C: "bài hát", D: "sân khấu" }, correct: "A", explanation: "orchestra (n) = dàn nhạc." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Genius' means:", options: { A: "người bình thường", B: "thiên tài", C: "học sinh", D: "giáo viên" }, correct: "B", explanation: "genius (n) = thiên tài." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "As a child, Leonardo showed great ______________ (tài năng) in drawing and music.", accepted: ["talent"], correct: "talent", explanation: "talent (n) = tài năng." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Do you like seeing a water puppet show? → Would you like ______ see a water puppet show?", options: { A: "to", B: "for", C: "of", D: "at" }, correct: "A", explanation: "Would you like to V?" },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "My English is better than my French. → I am better ______ English than French.", options: { A: "at", B: "in", C: "for", D: "with" }, correct: "A", explanation: "be better at N1 than N2." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Grapefruit juice isn't as sweet as orange juice. → Orange juice is ______________ (sweeter) than grapefruit juice.", accepted: ["sweeter"], correct: "sweeter", explanation: "not as adj as → comparative." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "I think your sister looks ______________ (similar to) singer Hong Nhung.", accepted: ["similar to"], correct: "similar to", explanation: "look like N → look similar to N." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Andrew's mother wanted him to learn how to play the guitar.", correct: "False", explanation: "Sai theo bài đọc — mẹ Andrew muốn anh học piano." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Andrew still plays a musical instrument nowadays.", correct: "True", explanation: "Đúng theo bài đọc — anh vẫn chơi guitar." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What was the first record Andrew bought when he was ten?", options: { A: "A record by the Beatles.", B: "A piano album.", C: "A classical music CD.", D: "A collection of opera songs." }, correct: "A", explanation: "Bài đọc nêu rõ đó là đĩa nhạc của The Beatles." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The young artist made a great ______________ (IMPRESS) on the judges.", accepted: ["impression"], correct: "impression", explanation: "impress (v) → impression (n)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The actors gave a wonderful ______________ (PERFORM) in the school play.", accepted: ["performance"], correct: "performance", explanation: "perform (v) → performance (n)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "We are planning a big ______________ (CELEBRATE) for the school's music festival.", accepted: ["celebration"], correct: "celebration", explanation: "celebrate (v) → celebration (n)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'trang phục biểu diễn'?", options: { A: "costume", B: "custom", C: "uniform", D: "fashion" }, correct: "A", explanation: "costume (n) = trang phục biểu diễn." }
  ]
};
