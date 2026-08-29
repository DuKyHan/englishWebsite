const REVIEW = {
  id: "test44",
  testFile: "test44.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 4: Music and Arts",
  title: "Knowledge Review — Unit 4, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "gold dust", pos: "phrase", ipa: "/ɡoʊld dʌst/", meaning: "thứ cực kỳ khan hiếm, khó kiếm", example: "They couldn't buy tickets for the concert. They are like gold dust!", exampleVi: "Họ không thể mua được vé cho buổi hòa nhạc. Chúng khan hiếm như vàng vậy!" },
    { word: "mural", pos: "n", ipa: "/ˈmjʊrəl/", meaning: "tranh tường", example: "The public spaces in the city are home to many works of art, including murals and sculptures.", exampleVi: "Các không gian công cộng trong thành phố có nhiều tác phẩm nghệ thuật, bao gồm tranh tường và tượng điêu khắc." },
    { word: "sculpture", pos: "n", ipa: "/ˈskʌlptʃər/", meaning: "tác phẩm điêu khắc, tượng", example: "Marco sometimes sees a nice photo or sculpture online.", exampleVi: "Marco thỉnh thoảng xem một bức ảnh hoặc tác phẩm điêu khắc đẹp trên mạng." },
    { word: "works of art", pos: "phrase", ipa: "/wɜːrks əv ɑːrt/", meaning: "các tác phẩm nghệ thuật", example: "The public spaces in the city are home to many works of art.", exampleVi: "Các không gian công cộng trong thành phố có nhiều tác phẩm nghệ thuật." },
    { word: "well-known", pos: "adj", ipa: "/ˌwelˈnoʊn/", meaning: "nổi tiếng", example: "The group is well-known for their albums and tours around the world.", exampleVi: "Ban nhạc nổi tiếng nhờ các album và các chuyến lưu diễn khắp thế giới." },
    { word: "atmosphere", pos: "n", ipa: "/ˈætməsfɪr/", meaning: "bầu không khí, không khí (nơi nào đó)", example: "The concert hall has a wonderful atmosphere on festival nights.", exampleVi: "Phòng hòa nhạc có bầu không khí tuyệt vời vào những đêm lễ hội." },
    { word: "permission", pos: "n", ipa: "/pərˈmɪʃn/", meaning: "sự cho phép", example: "The teacher gave the student permission to go out to capture some photos.", exampleVi: "Giáo viên đã cho phép học sinh ra ngoài để chụp một số bức ảnh." },
    { word: "contain", pos: "v", ipa: "/kənˈteɪn/", meaning: "chứa đựng", example: "The Louvre Museum now contains more than 380,000 historic objects.", exampleVi: "Bảo tàng Louvre hiện chứa hơn 380.000 hiện vật lịch sử." },
    { word: "portrait", pos: "n", ipa: "/ˈpɔːrtrət/", meaning: "chân dung", example: "This portrait is the same as that portrait.", exampleVi: "Bức chân dung này giống hệt bức chân dung kia." },
    { word: "exhibition", pos: "n", ipa: "/ˌeksɪˈbɪʃn/", meaning: "buổi triển lãm", example: "Many young artists feel anxious before an exhibition.", exampleVi: "Nhiều nghệ sĩ trẻ cảm thấy lo lắng trước một buổi triển lãm." },
    { word: "art gallery", pos: "phrase", ipa: "/ɑːrt ˈɡæləri/", meaning: "phòng trưng bày nghệ thuật", example: "Anna often visits art galleries at the weekend with her family.", exampleVi: "Anna thường đến các phòng trưng bày nghệ thuật vào cuối tuần cùng gia đình." },
    { word: "primary colours", pos: "phrase", ipa: "/ˈpraɪmeri ˈkʌlərz/", meaning: "các màu cơ bản", example: "The primary colours are red, yellow, and blue.", exampleVi: "Các màu cơ bản là đỏ, vàng và xanh dương." },
    { word: "secondary colours", pos: "phrase", ipa: "/ˈsekənderi ˈkʌlərz/", meaning: "các màu thứ cấp", example: "The secondary colours are orange, green, and violet.", exampleVi: "Các màu thứ cấp là cam, lục và tím." },
    { word: "neutral colours", pos: "phrase", ipa: "/ˈnuːtrəl ˈkʌlərz/", meaning: "các màu trung tính", example: "Black, white, and gray are called neutral colours.", exampleVi: "Đen, trắng và xám được gọi là các màu trung tính." },
    { word: "colour wheel", pos: "phrase", ipa: "/ˈkʌlər wiːl/", meaning: "bánh xe màu sắc", example: "Artists use the colour wheel to help them know which colours they want to use together.", exampleVi: "Các nghệ sĩ sử dụng bánh xe màu sắc để giúp họ biết nên phối những màu nào với nhau." },
    { word: "energetic", pos: "adj", ipa: "/ˌenərˈdʒetɪk/", meaning: "tràn đầy năng lượng", example: "Bright colours make us feel happy and energetic.", exampleVi: "Những màu sắc tươi sáng khiến chúng ta cảm thấy vui vẻ và tràn đầy năng lượng." },
    { word: "artifact", pos: "n", ipa: "/ˈɑːrtɪfækt/", meaning: "hiện vật, đồ tạo tác", example: "The museum displays many ancient artifacts.", exampleVi: "Bảo tàng trưng bày nhiều hiện vật cổ." },
    { word: "permanently", pos: "adv", ipa: "/ˈpɜːrmənəntli/", meaning: "vĩnh viễn", example: "The school gates will not close permanently.", exampleVi: "Cổng trường sẽ không đóng vĩnh viễn." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'tranh tường':", options: { A: "mural", B: "portrait", C: "sculpture", D: "canvas" }, correct: "A", explanation: "<b>mural</b> (n) = tranh tường." },
      { id: "vp2", prompt: "Choose the word that means 'nổi tiếng':", options: { A: "well-known", B: "unknown", C: "hidden", D: "forgotten" }, correct: "A", explanation: "<b>well-known</b> (adj) = nổi tiếng." },
      { id: "vp3", prompt: "\"They couldn't buy tickets. They are like ______!\"", options: { A: "gold dust", B: "silver coins", C: "diamond rings", D: "paper money" }, correct: "A", explanation: "\"be like <b>gold dust</b>\" (khan hiếm như vàng) là thành ngữ chỉ vật rất khó kiếm." },
      { id: "vp4", prompt: "Choose the word that means 'chứa đựng':", options: { A: "contain", B: "remove", C: "empty", D: "waste" }, correct: "A", explanation: "<b>contain</b> (v) = chứa đựng." },
      { id: "vp5", prompt: "\"The teacher gave the student ______ to go out to capture some photos.\"", options: { A: "permission", B: "permanent", C: "permit card", D: "permanently" }, correct: "A", explanation: "\"gave... <b>permission</b>\" (cho phép) — cần danh từ sau \"gave the student\"." },
      { id: "vp6", prompt: "Choose the word that means 'buổi triển lãm':", options: { A: "exhibition", B: "concert", C: "competition", D: "ceremony" }, correct: "A", explanation: "<b>exhibition</b> (n) = buổi triển lãm." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The public spaces are home to many ______________ (tranh tường) and sculptures.", accepted: ["murals"], correct: "murals", explanation: "<b>mural</b> (n) = tranh tường." },
      { id: "vf2", prompt: "The group is ______________ (nổi tiếng) for their albums and tours.", accepted: ["well-known"], correct: "well-known", explanation: "<b>well-known</b> (adj) = nổi tiếng." },
      { id: "vf3", prompt: "The Louvre Museum now ______________ (chứa) more than 380,000 historic objects.", accepted: ["contains"], correct: "contains", explanation: "<b>contain</b> (v) = chứa đựng." },
      { id: "vf4", prompt: "Many young artists feel anxious before an ______________ (buổi triển lãm).", accepted: ["exhibition"], correct: "exhibition", explanation: "<b>exhibition</b> (n) = buổi triển lãm." },
      { id: "vf5", prompt: "Bright colours make us feel happy and ______________ (tràn đầy năng lượng).", accepted: ["energetic"], correct: "energetic", explanation: "<b>energetic</b> (adj) = tràn đầy năng lượng." },
      { id: "vf6", prompt: "Black, white, and gray are called ______________ (các màu trung tính).", accepted: ["neutral colours"], correct: "neutral colours", explanation: "<b>neutral colours</b> (phrase) = các màu trung tính." }
    ],
    matching: {
      left: ["sculpture", "portrait", "art gallery", "colour wheel", "artifact", "permanently"],
      right: ["tác phẩm điêu khắc", "chân dung", "phòng trưng bày nghệ thuật", "bánh xe màu sắc", "hiện vật", "vĩnh viễn"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The natural beauty of the countryside made a deep ______ on the young artist.\" (IMPRESS)", options: { A: "impress", B: "impression", C: "impressive", D: "impressed" }, correct: "B", explanation: "Cần danh từ sau \"deep\" → impress (v) → <b>impression</b> (n, +ion)." },
      { id: "cw2", prompt: "\"The kids are looking at the beautiful ______ at the school art gallery.\" (PAINT)", options: { A: "paint", B: "painter", C: "paintings", D: "painted" }, correct: "C", explanation: "Cần danh từ số nhiều sau \"beautiful\" → paint (v) → <b>paintings</b> (n, +ing, số nhiều)." },
      { id: "cw3", prompt: "\"Regular practice helps young musicians improve their ______ skills.\" (PERFORM)", options: { A: "perform", B: "performer", C: "performance", D: "performing" }, correct: "C", explanation: "Cần danh từ ghép trước \"skills\" → perform (v) → <b>performance</b> (n, +ance)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'mural' mean?", options: { A: "tranh tường", B: "tượng điêu khắc", C: "ảnh chụp", D: "bức thư pháp" }, correct: "A", explanation: "mural (n) = tranh tường." },
      { id: "wm2", prompt: "What does 'well-known' mean?", options: { A: "xa lạ", B: "nổi tiếng", C: "cũ kỹ", D: "đắt tiền" }, correct: "B", explanation: "well-known (adj) = nổi tiếng." },
      { id: "wm3", prompt: "What does 'exhibition' mean?", options: { A: "buổi triển lãm", B: "buổi hòa nhạc", C: "cuộc thi", D: "lễ hội" }, correct: "A", explanation: "exhibition (n) = buổi triển lãm." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The natural beauty of the countryside made a deep ______________ (IMPRESS) on the young artist.", accepted: ["impression"], correct: "impression", explanation: "impress (v) → impression (n)." },
      { id: "wf2", prompt: "The kids are looking at the beautiful ______________ (PAINT) at the school art gallery.", accepted: ["paintings"], correct: "paintings", explanation: "paint (v) → paintings (n, số nhiều)." },
      { id: "wf3", prompt: "Regular practice helps young musicians improve their ______________ (PERFORM) skills.", accepted: ["performance"], correct: "performance", explanation: "perform (v) → performance (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "be just like + N ⇄ be the same as + N",
      usage: "\"S + be just like + N\" (giống hệt cái gì) có thể viết lại bằng \"S + be the same as + N\", giữ nguyên nghĩa.",
      formulas: [
        "S + be just like + N.  →  S + be the same as + N.",
        "This portrait is just like that portrait. → This portrait is the same as that portrait."
      ],
      signals: ["be just like N", "be the same as N"],
      examples: [
        { en: "This portrait is just like that portrait.", vi: "Bức chân dung này giống hệt bức chân dung kia." },
        { en: "This portrait is the same as that portrait.", vi: "Bức chân dung này giống với bức chân dung kia." }
      ],
      mistakes: [
        { wrong: "This portrait is the same like that portrait.", right: "This portrait is the same as that portrait. (dùng giới từ \"as\" với \"the same\", không dùng \"like\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "Her dress is just like mine. → Her dress is the same ______________ (as) mine.", accepted: ["as"], correct: "as", explanation: "be just like N → be the same as N." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'This song is just like the one from last year.' → This song is the same ______________ (as) the one from last year.", accepted: ["as"], correct: "as", explanation: "be just like N → be the same as N." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'His costume is just like his brother's costume.' → ______________ (His costume is the same as his brother's costume).", accepted: ["his costume is the same as his brother's costume"], correct: "His costume is the same as his brother's costume", explanation: "be just like N → be the same as N." }
        ]
      }
    },
    {
      id: "g2", name: "A is adj. B is adj, too. ⇄ A is as + adj + as B",
      usage: "Hai câu riêng biệt cùng nói một đặc điểm ở cùng mức độ (\"A is adj. B is adj, too.\") có thể gộp lại thành một câu so sánh ngang bằng \"A is as + adj + as + B\", giữ nguyên nghĩa.",
      formulas: [
        "A is adj. B is adj, too.  →  A is as + adj + as + B.",
        "Don Giovanni of Mozart is famous. Moonlight Sonata of Beethoven is famous, too. → Don Giovanni of Mozart is as famous as Moonlight Sonata of Beethoven."
      ],
      signals: ["A is adj. B is adj, too.", "A is as adj as B"],
      examples: [
        { en: "Don Giovanni of Mozart is famous. Moonlight Sonata of Beethoven is famous, too.", vi: "Don Giovanni của Mozart nổi tiếng. Moonlight Sonata của Beethoven cũng nổi tiếng." },
        { en: "Don Giovanni of Mozart is as famous as Moonlight Sonata of Beethoven.", vi: "Don Giovanni của Mozart nổi tiếng ngang với Moonlight Sonata của Beethoven." }
      ],
      mistakes: [
        { wrong: "Don Giovanni is as famous than Moonlight Sonata.", right: "Don Giovanni is as famous as Moonlight Sonata. (dùng \"as...as\", không trộn với \"than\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "This painting is beautiful. That painting is beautiful, too. → This painting is as ______________ (beautiful) as that painting.", accepted: ["beautiful"], correct: "beautiful", explanation: "A is adj. B is adj, too. → A is as adj as B." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'The orchestra was talented. The choir was talented, too.' → The orchestra was as ______________ (talented) as the choir.", accepted: ["talented"], correct: "talented", explanation: "A is adj. B is adj, too. → A is as adj as B." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The Mona Lisa is famous. The Starry Night is famous, too.' → ______________ (The Mona Lisa is as famous as The Starry Night).", accepted: ["the mona lisa is as famous as the starry night"], correct: "The Mona Lisa is as famous as The Starry Night", explanation: "A is adj. B is adj, too. → A is as adj as B." }
        ]
      }
    },
    {
      id: "g3", name: "different from + N ⇄ not the same as / not like + N",
      usage: "\"S + be different from + N\" (khác với cái gì) có thể viết lại bằng \"S + be not the same as + N\" hoặc \"S + be not like + N\", giữ nguyên nghĩa.",
      formulas: [
        "S + be different from + N.  →  S + be not the same as / not like + N.",
        "Your ideas are different from my ideas. → Your ideas are not the same as mine. (hoặc: not like mine)"
      ],
      signals: ["different from N", "not the same as / not like N"],
      examples: [
        { en: "I don't agree with you because your ideas are different from my ideas.", vi: "Tôi không đồng ý với bạn vì ý tưởng của bạn khác với ý tưởng của tôi." },
        { en: "I don't agree with you because your ideas are not the same as mine.", vi: "Tôi không đồng ý với bạn vì ý tưởng của bạn không giống với ý tưởng của tôi." }
      ],
      mistakes: [
        { wrong: "Your ideas are not the same than mine.", right: "Your ideas are not the same as mine. (dùng \"as\" với \"the same\", không dùng \"than\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "His style is different from her style. → His style is not the same ______________ (as) hers.", accepted: ["as"], correct: "as", explanation: "different from N → not the same as N." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'This colour is different from that colour.' → This colour is not the same ______________ (as) that colour.", accepted: ["as"], correct: "as", explanation: "different from N → not the same as N." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Her painting style is different from his painting style.' → ______________ (Her painting style is not the same as his painting style).", accepted: ["her painting style is not the same as his painting style", "her painting style is not like his painting style"], correct: "Her painting style is not the same as his painting style", explanation: "different from N → not the same as N." }
        ]
      }
    },
    {
      id: "g4", name: "superlative ⇄ No other + N + is as + adj + as / adj-er than",
      usage: "Câu so sánh nhất \"S + is the + adj-est + N\" có thể viết lại bằng \"No other + N + is as + adj + as + S\" hoặc \"No other + N + is + adj-er + than + S\", giữ nguyên nghĩa (không có N nào khác bằng/hơn S).",
      formulas: [
        "S + is the + adj-est + N.  →  No other + N + is as + adj + as + S. / No other + N + is + adj-er + than + S.",
        "The Louvre is the world's largest museum. → No other museum in the world is as large as the Louvre."
      ],
      signals: ["the + adj-est", "No other + N + is as adj as / adj-er than"],
      examples: [
        { en: "The Louvre is the world's largest museum.", vi: "Louvre là bảo tàng lớn nhất thế giới." },
        { en: "No other museum in the world is as large as the Louvre.", vi: "Không bảo tàng nào khác trên thế giới lớn bằng Louvre." }
      ],
      mistakes: [
        { wrong: "No other museum in the world is as larger as the Louvre.", right: "No other museum in the world is as large as the Louvre. (dùng tính từ nguyên thể trong cấu trúc \"as...as\", không thêm \"-er\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "She is the most talented singer in the group. → No other singer in the group is as ______________ (talented) as her.", accepted: ["talented"], correct: "talented", explanation: "the + adj-est → No other N is as adj as S." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'This is the most famous painting in the museum.' → No other painting in the museum is as ______________ (famous) as this one.", accepted: ["famous"], correct: "famous", explanation: "the + adj-est → No other N is as adj as S." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The Mona Lisa is the world's most valuable painting.' → ______________ (No other painting in the world is as valuable as the Mona Lisa).", accepted: ["no other painting in the world is as valuable as the mona lisa"], correct: "No other painting in the world is as valuable as the Mona Lisa", explanation: "the + adj-est → No other N is as adj as S." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) be well-known for + N",
      usage: "Cấu trúc \"be well-known for + N\" dùng để nói một người/vật nổi tiếng vì lý do gì.",
      formulas: [
        "S + be well-known for + N.",
        "The group is well-known for their albums and tours around the world."
      ],
      signals: ["be well-known for + N (nổi tiếng vì)"],
      examples: [
        { en: "The group is well-known for their albums and tours around the world.", vi: "Ban nhạc nổi tiếng nhờ các album và các chuyến lưu diễn khắp thế giới." },
        { en: "Leonardo da Vinci is well-known for his painting the Mona Lisa.", vi: "Leonardo da Vinci nổi tiếng nhờ bức tranh Mona Lisa của ông." }
      ],
      mistakes: [
        { wrong: "The group is well-known with their albums.", right: "The group is well-known for their albums. (dùng giới từ \"for\" với \"well-known\", không dùng \"with\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "This artist is well-known ______________ (for) her colourful paintings.", accepted: ["for"], correct: "for", explanation: "be well-known for + N." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'Everyone knows this actor because of his comedy films.' → This actor is well-known ______________ (for) his comedy films.", accepted: ["for"], correct: "for", explanation: "be well-known for + N." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'The museum is well-known ______________ (for) its collection of ancient artifacts.'", accepted: ["for"], correct: "for", explanation: "be well-known for + N." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Artists use colour to create patterns. Colour can also show different moods. <mark data-w=\"Bright colours make us feel happy and energetic\">Bright colours make us feel happy and energetic</mark>. Dark colours make us feel calm or sad. The primary colours are red, yellow, and blue. They are the colours that can be mixed together to make different colours. <mark data-w=\"Mixing two primary colours makes a secondary colour\">Mixing two primary colours makes a secondary colour</mark>. The secondary colours are orange, green, and violet. Orange is made by mixing yellow and red. Green is made by mixing yellow and blue. Violet is made by mixing red and blue. <mark data-w=\"Intermediate colours can be made by mixing two primary colours and a secondary colour together\">Intermediate colours can be made by mixing two primary colours and a secondary colour together</mark>. Some intermediate colours are blue violet and red orange. <mark data-w=\"Black, white, and gray are special colours\">Black, white, and gray are special colours</mark>. They are called neutral colours. Colours have been organised into a colour wheel. It shows the three primary colours, the three secondary colours, and the six intermediate colours. <mark data-w=\"Artists use the colour wheel to help them know which colours they want to use together\">Artists use the colour wheel to help them know which colours they want to use together</mark>.",
    vocabInContext: {
      "Bright colours make us feel happy and energetic": "những màu sắc tươi sáng khiến chúng ta cảm thấy vui vẻ và tràn đầy năng lượng",
      "Mixing two primary colours makes a secondary colour": "trộn hai màu cơ bản tạo ra một màu thứ cấp",
      "Intermediate colours can be made by mixing two primary colours and a secondary colour together": "các màu trung gian có thể được tạo ra bằng cách trộn hai màu cơ bản với một màu thứ cấp",
      "Black, white, and gray are special colours": "đen, trắng và xám là những màu đặc biệt",
      "Artists use the colour wheel to help them know which colours they want to use together": "các nghệ sĩ sử dụng bánh xe màu sắc để giúp họ biết nên phối những màu nào với nhau"
    },
    translation: "<b>BÁNH XE MÀU SẮC</b><br><br>Các nghệ sĩ sử dụng màu sắc để tạo ra các họa tiết. Màu sắc cũng có thể thể hiện những tâm trạng khác nhau. Những màu sắc tươi sáng khiến chúng ta cảm thấy vui vẻ và tràn đầy năng lượng. Những màu tối khiến chúng ta cảm thấy bình tĩnh hoặc buồn. Các màu cơ bản là đỏ, vàng và xanh dương. Đó là những màu có thể trộn với nhau để tạo ra các màu khác. Trộn hai màu cơ bản tạo ra một màu thứ cấp. Các màu thứ cấp là cam, lục và tím. Màu cam được tạo ra bằng cách trộn vàng và đỏ. Màu lục được tạo ra bằng cách trộn vàng và xanh dương. Màu tím được tạo ra bằng cách trộn đỏ và xanh dương. Các màu trung gian có thể được tạo ra bằng cách trộn hai màu cơ bản với một màu thứ cấp. Một số màu trung gian là tím xanh và cam đỏ. Đen, trắng và xám là những màu đặc biệt. Chúng được gọi là các màu trung tính. Màu sắc đã được sắp xếp thành một bánh xe màu. Nó thể hiện ba màu cơ bản, ba màu thứ cấp, và sáu màu trung gian. Các nghệ sĩ sử dụng bánh xe màu sắc để giúp họ biết nên phối những màu nào với nhau.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Dark colours do not usually make people feel happy and energetic.", correct: "True", explanation: "Đúng. Bài đọc: \"Dark colours make us feel calm or sad.\"" },
      { id: "r2", type: "truefalse", prompt: "You can mix yellow and blue to make green.", correct: "True", explanation: "Đúng. Bài đọc: \"Green is made by mixing yellow and blue.\"" },
      { id: "r3", type: "truefalse", prompt: "Violet is an example of a primary colour.", correct: "False", explanation: "Sai. Bài đọc: \"The secondary colours are orange, green, and violet.\"" },
      { id: "r4", type: "truefalse", prompt: "There are six intermediate colours on the colour wheel.", correct: "True", explanation: "Đúng. Bài đọc: \"...the six intermediate colours.\"" },
      { id: "r5", type: "mcq", prompt: "What are black, white, and gray called?", options: { A: "Neutral colours", B: "Primary colours", C: "Secondary colours", D: "Intermediate colours" }, correct: "A", explanation: "Bài đọc: \"Black, white, and gray are special colours. They are called neutral colours.\"" },
      { id: "r6", type: "mcq", prompt: "Why do artists use the colour wheel?", options: { A: "To choose which colours to use together", B: "To make new intermediate colours", C: "To paint beautiful pictures of wheels", D: "To change their moods from sad to happy" }, correct: "A", explanation: "Bài đọc: \"Artists use the colour wheel to help them know which colours they want to use together.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'các màu được tạo bởi trộn hai màu cơ bản'.", accepted: ["a secondary colour", "secondary colour"], correct: "a secondary colour", explanation: "\"Mixing two primary colours makes a secondary colour.\" — secondary colour = màu thứ cấp." },
      { id: "r8", type: "mcq", prompt: "How many primary colours are shown on the colour wheel?", options: { A: "Three", B: "Six", C: "Nine", D: "Two" }, correct: "A", explanation: "Bài đọc: \"It shows the three primary colours, the three secondary colours, and the six intermediate colours.\"" },
      { id: "r9", type: "truefalse", prompt: "Bright colours usually make people feel calm or sad.", correct: "False", explanation: "Sai. Bài đọc: \"Bright colours make us feel happy and energetic.\" — đó là màu tối mới khiến người ta cảm thấy bình tĩnh hoặc buồn." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Artists use colour to create patterns.", suggested: "Các nghệ sĩ sử dụng màu sắc để tạo ra các họa tiết.", notes: "\"use N to V\" (dùng cái gì để làm gì)." },
    { id: "t2", en: "Bright colours make us feel happy and energetic.", suggested: "Những màu sắc tươi sáng khiến chúng ta cảm thấy vui vẻ và tràn đầy năng lượng.", notes: "\"make sb feel + adj\" (khiến ai cảm thấy thế nào)." },
    { id: "t3", en: "Mixing two primary colours makes a secondary colour.", suggested: "Trộn hai màu cơ bản tạo ra một màu thứ cấp.", notes: "\"V-ing\" làm chủ ngữ của câu (danh động từ)." },
    { id: "t4", en: "Black, white, and gray are called neutral colours.", suggested: "Đen, trắng và xám được gọi là các màu trung tính.", notes: "\"be called + N\" (được gọi là) — cấu trúc bị động." },
    { id: "t5", en: "Artists use the colour wheel to help them know which colours they want to use together.", suggested: "Các nghệ sĩ sử dụng bánh xe màu sắc để giúp họ biết nên phối những màu nào với nhau.", notes: "\"help sb (to) V\" (giúp ai làm gì)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "be just like + N ⇄ be the same as + N",
      formula: "S + be just like + N.  →  S + be the same as + N.",
      example: { before: "This portrait is just like that portrait.", after: "This portrait is the same as that portrait." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "Her dress is just like mine. → Her dress is the same ______________ (as) mine.", accepted: ["as"], correct: "as", explanation: "be just like N → be the same as N." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'This song is just like the one from last year.' → This song is the same ______________ (as) the one from last year.", accepted: ["as"], correct: "as", explanation: "be just like N → be the same as N." }
      ]
    },
    {
      id: "tr2", name: "A is adj. B is adj, too. ⇄ A is as + adj + as B",
      formula: "A is adj. B is adj, too.  →  A is as + adj + as + B.",
      example: { before: "Don Giovanni of Mozart is famous. Moonlight Sonata of Beethoven is famous, too.", after: "Don Giovanni of Mozart is as famous as Moonlight Sonata of Beethoven." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "This painting is beautiful. That painting is beautiful, too. → This painting is as ______________ (beautiful) as that painting.", accepted: ["beautiful"], correct: "beautiful", explanation: "A is adj. B is adj, too. → A is as adj as B." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'The orchestra was talented. The choir was talented, too.' → The orchestra was as ______________ (talented) as the choir.", accepted: ["talented"], correct: "talented", explanation: "A is adj. B is adj, too. → A is as adj as B." }
      ]
    },
    {
      id: "tr3", name: "different from + N ⇄ not the same as / not like + N",
      formula: "S + be different from + N.  →  S + be not the same as / not like + N.",
      example: { before: "Your ideas are different from my ideas.", after: "Your ideas are not the same as mine." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "His style is different from her style. → His style is not the same ______________ (as) hers.", accepted: ["as"], correct: "as", explanation: "different from N → not the same as N." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'This colour is different from that colour.' → This colour is not the same ______________ (as) that colour.", accepted: ["as"], correct: "as", explanation: "different from N → not the same as N." }
      ]
    },
    {
      id: "tr4", name: "superlative ⇄ No other + N + is as + adj + as",
      formula: "S + is the + adj-est + N.  →  No other + N + is as + adj + as + S.",
      example: { before: "The Louvre is the world's largest museum.", after: "No other museum in the world is as large as the Louvre." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "She is the most talented singer in the group. → No other singer in the group is as ______________ (talented) as her.", accepted: ["talented"], correct: "talented", explanation: "the + adj-est → No other N is as adj as S." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'This is the most famous painting in the museum.' → No other painting in the museum is as ______________ (famous) as this one.", accepted: ["famous"], correct: "famous", explanation: "the + adj-est → No other N is as adj as S." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Mural' means:", options: { A: "tranh tường", B: "tượng điêu khắc", C: "ảnh chụp", D: "bức thư pháp" }, correct: "A", explanation: "mural (n) = tranh tường." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Well-known' means:", options: { A: "xa lạ", B: "nổi tiếng", C: "cũ kỹ", D: "đắt tiền" }, correct: "B", explanation: "well-known (adj) = nổi tiếng." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Many young artists feel anxious before an ______________ (buổi triển lãm).", accepted: ["exhibition"], correct: "exhibition", explanation: "exhibition (n) = buổi triển lãm." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "This portrait is just like that portrait. → This portrait is the same ______ that portrait.", options: { A: "as", B: "like", C: "than", D: "with" }, correct: "A", explanation: "be the same as N." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Don Giovanni is famous. Moonlight Sonata is famous, too. → Don Giovanni is as famous ______ Moonlight Sonata.", options: { A: "as", B: "than", C: "like", D: "with" }, correct: "A", explanation: "A is as adj as B." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Your ideas are different from my ideas. → Your ideas are not the same ______________ (as) mine.", accepted: ["as"], correct: "as", explanation: "different from N → not the same as N." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "The Louvre is the world's largest museum. → No other museum in the world is as ______________ (large) as the Louvre.", accepted: ["large"], correct: "large", explanation: "the + adj-est → No other N is as adj as S." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Violet is an example of a primary colour.", correct: "False", explanation: "Sai theo bài đọc — violet là màu thứ cấp." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "There are six intermediate colours on the colour wheel.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Why do artists use the colour wheel?", options: { A: "To choose which colours to use together", B: "To make new intermediate colours", C: "To paint beautiful pictures of wheels", D: "To change their moods from sad to happy" }, correct: "A", explanation: "Bài đọc nêu rõ mục đích này." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The natural beauty of the countryside made a deep ______________ (IMPRESS) on the young artist.", accepted: ["impression"], correct: "impression", explanation: "impress (v) → impression (n)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The kids are looking at the beautiful ______________ (PAINT) at the school art gallery.", accepted: ["paintings"], correct: "paintings", explanation: "paint (v) → paintings (n, số nhiều)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Regular practice helps young musicians improve their ______________ (PERFORM) skills.", accepted: ["performance"], correct: "performance", explanation: "perform (v) → performance (n)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'các màu cơ bản'?", options: { A: "primary colours", B: "secondary colours", C: "neutral colours", D: "dark colours" }, correct: "A", explanation: "primary colours (phrase) = các màu cơ bản." }
  ]
};
