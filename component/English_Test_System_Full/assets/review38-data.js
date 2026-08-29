const REVIEW = {
  id: "test38",
  testFile: "test38.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 1: Hobbies",
  title: "Knowledge Review — Unit 1, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "dangerous", pos: "adj", ipa: "/ˈdeɪndʒərəs/", meaning: "nguy hiểm", example: "I think ice-skating is too dangerous for me.", exampleVi: "Tôi nghĩ trượt băng quá nguy hiểm đối với tôi." },
    { word: "comedy", pos: "n", ipa: "/ˈkɒmədi/", meaning: "phim/chương trình hài", example: "She adores watching comedies on TV. She laughs all day.", exampleVi: "Cô ấy rất thích xem phim hài trên TV. Cô ấy cười cả ngày." },
    { word: "collection", pos: "n", ipa: "/kəˈlekʃn/", meaning: "bộ sưu tập", example: "My younger sister has a very nice collection of old key rings.", exampleVi: "Em gái tôi có một bộ sưu tập móc chìa khóa cổ rất đẹp." },
    { word: "benefit", pos: "n", ipa: "/ˈbenɪfɪt/", meaning: "lợi ích", example: "Playing sports brings a lot of health benefits to teenagers.", exampleVi: "Chơi thể thao mang lại nhiều lợi ích sức khỏe cho thanh thiếu niên." },
    { word: "strength", pos: "n", ipa: "/streŋθ/", meaning: "sức mạnh", example: "Doing outdoor activities together can make family relationships stronger.", exampleVi: "Cùng nhau làm các hoạt động ngoài trời có thể làm mối quan hệ gia đình mạnh mẽ hơn." },
    { word: "surprisingly", pos: "adv", ipa: "/sərˈpraɪzɪŋli/", meaning: "đáng ngạc nhiên", example: "Regular exercise is surprisingly helpful for people who work all day.", exampleVi: "Tập thể dục thường xuyên đáng ngạc nhiên là rất hữu ích cho người làm việc cả ngày." },
    { word: "excited", pos: "adj", ipa: "/ɪkˈsaɪtɪd/", meaning: "phấn khích, hào hứng", example: "The child looked excited when his parents gave him a camera.", exampleVi: "Đứa trẻ trông rất phấn khích khi bố mẹ tặng nó một chiếc máy ảnh." },
    { word: "pleasure", pos: "n", ipa: "/ˈpleʒər/", meaning: "niềm vui thích, sự hài lòng", example: "It gives me great pleasure to welcome our guest speaker tonight.", exampleVi: "Tôi rất vui mừng được chào đón diễn giả khách mời của chúng ta tối nay." },
    { word: "rewarding", pos: "adj", ipa: "/rɪˈwɔːrdɪŋ/", meaning: "bổ ích, xứng đáng công sức", example: "Vegetable gardening is very rewarding because it makes us feel better.", exampleVi: "Trồng rau rất bổ ích vì nó khiến chúng ta cảm thấy khỏe hơn." },
    { word: "refresh", pos: "v", ipa: "/rɪˈfreʃ/", meaning: "làm mới, giải tỏa (tinh thần)", example: "Gardening gives us an opportunity to refresh our mind after working or studying time.", exampleVi: "Làm vườn cho chúng ta cơ hội giải tỏa tinh thần sau thời gian làm việc hoặc học tập." },
    { word: "widen", pos: "v", ipa: "/ˈwaɪdn/", meaning: "mở rộng", example: "Reading helps me discover new things and widen my knowledge.", exampleVi: "Đọc sách giúp tôi khám phá những điều mới và mở rộng kiến thức." },
    { word: "fascinating", pos: "adj", ipa: "/ˈfæsɪneɪtɪŋ/", meaning: "hấp dẫn, thú vị", example: "I can learn about huge whales, tiny viruses and other fascinating things of our world.", exampleVi: "Tôi có thể học về những con cá voi khổng lồ, những con virus nhỏ bé và những điều thú vị khác của thế giới." },
    { word: "profitably", pos: "adv", ipa: "/ˈprɒfɪtəbli/", meaning: "một cách hữu ích, có lợi", example: "Beside being more informed about the world, I also spend my time profitably.", exampleVi: "Ngoài việc hiểu biết hơn về thế giới, tôi còn sử dụng thời gian của mình một cách hữu ích." },
    { word: "achievement", pos: "n", ipa: "/əˈtʃiːvmənt/", meaning: "thành tựu", example: "I can learn about how people lived in past days and human achievements.", exampleVi: "Tôi có thể học về cách con người sống trong quá khứ và những thành tựu của loài người." },
    { word: "be fond of", pos: "phrase", ipa: "/fɒnd ɒv/", meaning: "yêu thích, ham thích", example: "I am fond of keeping the bottles after drinking the water.", exampleVi: "Tôi rất thích giữ lại những chai lọ sau khi uống hết nước." },
    { word: "attract", pos: "v", ipa: "/əˈtrækt/", meaning: "thu hút", example: "Her collections are exciting and they really attract me.", exampleVi: "Những bộ sưu tập của cô ấy rất thú vị và thực sự thu hút tôi." },
    { word: "produce", pos: "v", ipa: "/prəˈdjuːs/", meaning: "tạo ra, sản xuất", example: "Vegetable gardening produces delicious vegetables for us to eat.", exampleVi: "Trồng rau tạo ra những loại rau ngon để chúng ta ăn." },
    { word: "stay up", pos: "phrasal v", ipa: "/steɪ ʌp/", meaning: "thức khuya", example: "You shouldn't stay up so late to listen to music.", exampleVi: "Bạn không nên thức khuya như vậy để nghe nhạc." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'nguy hiểm':", options: { A: "dangerous", B: "rewarding", C: "fascinating", D: "profitable" }, correct: "A", explanation: "<b>dangerous</b> (adj) = nguy hiểm." },
      { id: "vp2", prompt: "Choose the word that means 'bộ sưu tập':", options: { A: "collection", B: "benefit", C: "pleasure", D: "achievement" }, correct: "A", explanation: "<b>collection</b> (n) = bộ sưu tập." },
      { id: "vp3", prompt: "\"Playing sports brings a lot of health ______ to teenagers.\"", options: { A: "benefits", B: "pleasures", C: "achievements", D: "comedies" }, correct: "A", explanation: "\"<b>benefits</b>\" (lợi ích) phù hợp với ngữ cảnh chơi thể thao tốt cho sức khỏe." },
      { id: "vp4", prompt: "Choose the word that means 'thu hút':", options: { A: "attract", B: "produce", C: "refresh", D: "widen" }, correct: "A", explanation: "<b>attract</b> (v) = thu hút." },
      { id: "vp5", prompt: "\"You shouldn't ______ so late to listen to music.\"", options: { A: "stay up", B: "stay down", C: "stay off", D: "stay out" }, correct: "A", explanation: "\"<b>stay up</b>\" (thức khuya) là cụm động từ phù hợp." },
      { id: "vp6", prompt: "Choose the word that means 'bổ ích, xứng đáng công sức':", options: { A: "rewarding", B: "boring", C: "harmful", D: "dangerous" }, correct: "A", explanation: "<b>rewarding</b> (adj) = bổ ích, xứng đáng công sức." }
    ],
    fillblank: [
      { id: "vf1", prompt: "Gardening gives us an opportunity to ______________ (làm mới) our mind after working or studying time.", accepted: ["refresh"], correct: "refresh", explanation: "<b>refresh</b> (v) = làm mới, giải tỏa." },
      { id: "vf2", prompt: "Reading helps me discover new things and ______________ (mở rộng) my knowledge.", accepted: ["widen"], correct: "widen", explanation: "<b>widen</b> (v) = mở rộng." },
      { id: "vf3", prompt: "I can learn about huge whales, tiny viruses and other ______________ (hấp dẫn, thú vị) things of our world.", accepted: ["fascinating"], correct: "fascinating", explanation: "<b>fascinating</b> (adj) = hấp dẫn, thú vị." },
      { id: "vf4", prompt: "Beside being more informed, I also spend my time ______________ (một cách hữu ích).", accepted: ["profitably"], correct: "profitably", explanation: "<b>profitably</b> (adv) = một cách hữu ích, có lợi." },
      { id: "vf5", prompt: "I am ______________ (yêu thích) keeping the bottles after drinking the water.", accepted: ["fond of"], correct: "fond of", explanation: "<b>be fond of</b> (phrase) = yêu thích, ham thích." },
      { id: "vf6", prompt: "Vegetable gardening ______________ (tạo ra) delicious vegetables for us to eat.", accepted: ["produces"], correct: "produces", explanation: "<b>produce(s)</b> (v) = tạo ra, sản xuất." }
    ],
    matching: {
      left: ["achievement", "comedy", "pleasure", "attract", "stay up", "strength"],
      right: ["thành tựu", "phim/chương trình hài", "niềm vui thích, sự hài lòng", "thu hút", "thức khuya", "sức mạnh"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"I think it is too ______ for me.\" (DANGER)", options: { A: "danger", B: "dangerous", C: "endanger", D: "dangerously" }, correct: "B", explanation: "Cần tính từ sau \"too\" → danger (n) → <b>dangerous</b> (adj, +ous)." },
      { id: "cw2", prompt: "\"Doing outdoor activities together can make family relationships ______.\" (STRENGTH)", options: { A: "strength", B: "strengthen", C: "stronger", D: "strongly" }, correct: "C", explanation: "Cần tính từ so sánh hơn sau \"make + O\" → strength (n) → strong (adj) → <b>stronger</b>." },
      { id: "cw3", prompt: "\"Regular exercise is ______ helpful for people who work all day.\" (SURPRISE)", options: { A: "surprise", B: "surprised", C: "surprising", D: "surprisingly" }, correct: "D", explanation: "Cần trạng từ bổ nghĩa cho tính từ \"helpful\" → surprise (n/v) → <b>surprisingly</b> (adv, +ly)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'rewarding' mean?", options: { A: "nhàm chán", B: "bổ ích, xứng đáng công sức", C: "nguy hiểm", D: "tốn kém" }, correct: "B", explanation: "rewarding (adj) = bổ ích, xứng đáng công sức." },
      { id: "wm2", prompt: "What does 'be fond of' mean?", options: { A: "ghét bỏ", B: "sợ hãi", C: "yêu thích", D: "quên đi" }, correct: "C", explanation: "be fond of (phrase) = yêu thích, ham thích." },
      { id: "wm3", prompt: "What does 'attract' mean?", options: { A: "thu hút", B: "tránh né", C: "phá hủy", D: "che giấu" }, correct: "A", explanation: "attract (v) = thu hút." }
    ],
    wordForm: [
      { id: "wf1", prompt: "My younger sister has a very nice ______________ (COLLECT) of old key rings.", accepted: ["collection"], correct: "collection", explanation: "collect (v) → collection (n, +ion)." },
      { id: "wf2", prompt: "Playing sports brings a lot of health ______________ (BENEFIT) to teenagers.", accepted: ["benefits"], correct: "benefits", explanation: "benefit (n) → benefits (số nhiều)." },
      { id: "wf3", prompt: "The child looked ______________ (EXCITE) when his parents gave him a camera.", accepted: ["excited"], correct: "excited", explanation: "excite (v) → excited (adj, +ed)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "feel excited whenever + clause ⇄ think + V-ing + is + adj",
      usage: "\"S + feel(s) excited whenever + mệnh đề\" (cảm thấy hào hứng mỗi khi) có thể viết lại bằng \"S + think(s) + V-ing + is + adj\" (nghĩ rằng việc gì đó thật thú vị), giữ nguyên thái độ tích cực.",
      formulas: [
        "S + feels excited whenever + S + V.  →  S + thinks + V-ing + is + adj.",
        "He feels excited whenever he watches a football match. → He thinks watching a football match is exciting."
      ],
      signals: ["feel(s) excited whenever...", "think(s) + V-ing + is + adj"],
      examples: [
        { en: "He feels excited whenever he watches a football match.", vi: "Cậu ấy cảm thấy hào hứng mỗi khi xem một trận bóng đá." },
        { en: "He thinks watching a football match is exciting.", vi: "Cậu ấy nghĩ rằng xem một trận bóng đá thật thú vị." }
      ],
      mistakes: [
        { wrong: "He thinks watch a football match is exciting.", right: "He thinks watching a football match is exciting. (cần V-ing làm chủ ngữ của mệnh đề sau \"thinks\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "She feels excited whenever she plays the piano. → She thinks ______________ (playing) the piano is exciting.", accepted: ["playing"], correct: "playing", explanation: "feel excited whenever + clause → think + V-ing + is + adj." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'They feel excited whenever they go camping.' → They think ______________ (going) camping is exciting.", accepted: ["going"], correct: "going", explanation: "feel excited whenever + clause → think + V-ing + is + adj." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'I feel excited whenever I collect stamps.' → ______________ (I think collecting stamps is exciting).", accepted: ["i think collecting stamps is exciting"], correct: "I think collecting stamps is exciting", explanation: "feel excited whenever + clause → think + V-ing + is + adj." }
        ]
      }
    },
    {
      id: "g2", name: "It's not good to + V ⇄ S + shouldn't + V",
      usage: "\"It's not good to + V\" (không tốt khi làm gì) có thể viết lại bằng \"S + shouldn't + V\" (không nên làm gì), giữ nguyên nghĩa khuyên nhủ.",
      formulas: [
        "It's not good to + V.  →  You/S + shouldn't + V.",
        "It's not good to stay up so late to listen to music. → You shouldn't stay up so late to listen to music."
      ],
      signals: ["It's not good to + V", "shouldn't + V (nguyên thể)"],
      examples: [
        { en: "It's not good to stay up so late to listen to music.", vi: "Thức khuya như vậy để nghe nhạc là không tốt." },
        { en: "You shouldn't stay up so late to listen to music.", vi: "Bạn không nên thức khuya như vậy để nghe nhạc." }
      ],
      mistakes: [
        { wrong: "You shouldn't to stay up so late.", right: "You shouldn't stay up so late. (\"shouldn't\" theo sau bởi động từ nguyên thể, không có \"to\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "It's not good to eat too much sugar. → You ______________ (shouldn't) eat too much sugar.", accepted: ["shouldn't"], correct: "shouldn't", explanation: "It's not good to + V → shouldn't + V." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'It's not good to play games all day.' → You ______________ (shouldn't) play games all day.", accepted: ["shouldn't"], correct: "shouldn't", explanation: "It's not good to + V → shouldn't + V." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It's not good to spend too much time on the phone.' → ______________ (You shouldn't spend too much time on the phone).", accepted: ["you shouldn't spend too much time on the phone"], correct: "You shouldn't spend too much time on the phone", explanation: "It's not good to + V → shouldn't + V." }
        ]
      }
    },
    {
      id: "g3", name: "like + V-ing ⇄ be fond of + V-ing",
      usage: "\"like + V-ing\" (thích làm gì) có thể viết lại bằng \"be fond of + V-ing\", giữ nguyên nghĩa yêu thích ở mức độ mạnh hơn.",
      formulas: [
        "S + like(s) + V-ing.  →  S + is/am/are fond of + V-ing.",
        "I like keeping the bottles after drinking the water. → I am fond of keeping the bottles after drinking the water."
      ],
      signals: ["like + V-ing", "be fond of + V-ing"],
      examples: [
        { en: "I like keeping the bottles after drinking the water.", vi: "Tôi thích giữ lại những chai lọ sau khi uống hết nước." },
        { en: "I am fond of keeping the bottles after drinking the water.", vi: "Tôi rất thích giữ lại những chai lọ sau khi uống hết nước." }
      ],
      mistakes: [
        { wrong: "I am fond of keep the bottles.", right: "I am fond of keeping the bottles. (\"be fond of\" luôn theo sau bởi V-ing)" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "She likes painting pictures. → She is fond ______________ (of) painting pictures.", accepted: ["of"], correct: "of", explanation: "like + V-ing → be fond of + V-ing." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'They like playing chess.' → They are fond of ______________ (playing) chess.", accepted: ["playing"], correct: "playing", explanation: "like + V-ing → be fond of + V-ing." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Minh likes collecting stamps.' → ______________ (Minh is fond of collecting stamps).", accepted: ["minh is fond of collecting stamps"], correct: "Minh is fond of collecting stamps", explanation: "like + V-ing → be fond of + V-ing." }
        ]
      }
    },
    {
      id: "g4", name: "S + attract sb ⇄ sb + be interested in + N",
      usage: "\"S + attract(s) sb\" (điều gì thu hút ai đó) có thể viết lại bằng \"sb + be interested in + N\" (ai đó thấy hứng thú với điều gì), đổi chủ ngữ và giữ nguyên nghĩa.",
      formulas: [
        "N + attract(s) + sb.  →  Sb + is/am/are interested in + N.",
        "Her collections attract me. → I am interested in her collections."
      ],
      signals: ["N + attract(s) + sb", "sb + be interested in + N"],
      examples: [
        { en: "Her collections are exciting and they really attract me.", vi: "Những bộ sưu tập của cô ấy rất thú vị và thực sự thu hút tôi." },
        { en: "I am interested in her collections.", vi: "Tôi rất hứng thú với những bộ sưu tập của cô ấy." }
      ],
      mistakes: [
        { wrong: "I am interested about her collections.", right: "I am interested in her collections. (\"be interested\" luôn theo sau bởi giới từ \"in\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "His stories attract many readers. → Many readers are interested ______________ (in) his stories.", accepted: ["in"], correct: "in", explanation: "N + attract(s) + sb → sb + be interested in + N." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'This hobby attracts a lot of teenagers.' → A lot of teenagers are interested ______________ (in) this hobby.", accepted: ["in"], correct: "in", explanation: "N + attract(s) + sb → sb + be interested in + N." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Her paintings attract many visitors.' → ______________ (Many visitors are interested in her paintings).", accepted: ["many visitors are interested in her paintings"], correct: "Many visitors are interested in her paintings", explanation: "N + attract(s) + sb → sb + be interested in + N." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) not only... but also...",
      usage: "Cấu trúc \"not only... but also...\" (không những... mà còn...) dùng để nối hai ý cùng nói về một chủ ngữ, nhấn mạnh cả hai điều đều đúng.",
      formulas: [
        "S + V + not only + A + but also + B.",
        "Gardening not only offers us the beauty of flowers and plants but also brings us benefits."
      ],
      signals: ["not only... but also..."],
      examples: [
        { en: "Gardening not only offers us the beauty of flowers and plants but also brings us benefits.", vi: "Làm vườn không những mang lại cho chúng ta vẻ đẹp của hoa và cây cối mà còn mang lại lợi ích." },
        { en: "Reading not only widens our knowledge but also helps us relax.", vi: "Đọc sách không những mở rộng kiến thức mà còn giúp chúng ta thư giãn." }
      ],
      mistakes: [
        { wrong: "Gardening not only offers beauty but also it brings benefits.", right: "Gardening not only offers beauty but also brings benefits. (hai vế phải song song về cấu trúc, không lặp lại chủ ngữ)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "Reading gives us knowledge. It also helps us relax. → Reading not only gives us knowledge ______________ (but also) helps us relax.", accepted: ["but also"], correct: "but also", explanation: "not only... but also... nối hai ý về cùng một chủ ngữ." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'Swimming is good for health. It is also fun.' → Swimming is not only good for health ______________ (but also) fun.", accepted: ["but also"], correct: "but also", explanation: "not only... but also..." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'Playing sports not only improves our health ______________ (but also builds) teamwork skills.'", accepted: ["but also builds"], correct: "but also builds", explanation: "not only... but also..." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Reading enables me to <mark data-w=\"learn about so many things that I do not know\">learn about so many things that I do not know</mark>. I can learn about how people lived in past days, the wonders of the world, space travel, human achievements, huge whales, tiny viruses and other fascinating things of our world. Reading helps me <mark data-w=\"discover new things and widen my knowledge\">discover new things and widen my knowledge</mark>. Books <mark data-w=\"provide me with so much information and many facts\">provide me with so much information and many facts</mark>. They have <mark data-w=\"certainly helped me in my daily life\">certainly helped me in my daily life</mark>. I am better aware of coping with living. Libraries are the source from which I get the books I need. My relatives and my friends also give me books on special occasions. I will certainly continue my reading hobby. Beside being more informed about the world, I also <mark data-w=\"spend my time profitably\">spend my time profitably</mark>. It is indeed a good hobby.",
    vocabInContext: {
      "learn about so many things that I do not know": "học được rất nhiều điều mà tôi chưa biết",
      "discover new things and widen my knowledge": "khám phá những điều mới và mở rộng kiến thức",
      "provide me with so much information and many facts": "cung cấp cho tôi rất nhiều thông tin và sự kiện",
      "certainly helped me in my daily life": "chắc chắn đã giúp ích cho tôi trong cuộc sống hằng ngày",
      "spend my time profitably": "sử dụng thời gian của tôi một cách hữu ích"
    },
    translation: "<b>SỞ THÍCH ĐỌC SÁCH</b><br><br>Đọc sách giúp tôi học được rất nhiều điều mà tôi chưa biết. Tôi có thể học về cách con người sống trong quá khứ, những kỳ quan của thế giới, du hành vũ trụ, những thành tựu của loài người, những con cá voi khổng lồ, những con virus nhỏ bé và những điều thú vị khác của thế giới. Đọc sách giúp tôi khám phá những điều mới và mở rộng kiến thức. Sách cung cấp cho tôi rất nhiều thông tin và sự kiện. Chúng chắc chắn đã giúp ích cho tôi trong cuộc sống hằng ngày. Tôi hiểu rõ hơn cách đối phó với cuộc sống. Thư viện là nguồn tôi lấy những cuốn sách mình cần. Họ hàng và bạn bè cũng tặng tôi sách nhân những dịp đặc biệt. Tôi chắc chắn sẽ tiếp tục sở thích đọc sách của mình. Bên cạnh việc hiểu biết hơn về thế giới, tôi còn sử dụng thời gian của mình một cách hữu ích. Đó thực sự là một sở thích tốt.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Reading only helps the author learn about the history of the past.", correct: "False", explanation: "Sai. Bài đọc kể ra nhiều điều khác ngoài lịch sử: \"the wonders of the world, space travel, human achievements, huge whales, tiny viruses...\"" },
      { id: "r2", type: "truefalse", prompt: "The author gets books from the library, friends, and family.", correct: "True", explanation: "Đúng. Bài đọc: \"Libraries are the source... My relatives and my friends also give me books.\"" },
      { id: "r3", type: "truefalse", prompt: "Books give useful information for the author's daily life.", correct: "True", explanation: "Đúng. Bài đọc: \"They have certainly helped me in my daily life.\"" },
      { id: "r4", type: "truefalse", prompt: "The author plans to keep reading as a hobby in the future.", correct: "True", explanation: "Đúng. Bài đọc: \"I will certainly continue my reading hobby.\"" },
      { id: "r5", type: "mcq", prompt: "According to the passage, reading helps the author to __________.", options: { A: "broaden their knowledge", B: "buy many expensive things", C: "find a high-paying job", D: "travel to space easily" }, correct: "A", explanation: "Bài đọc: \"Reading helps me discover new things and widen my knowledge.\" → mở rộng kiến thức, đáp án A." },
      { id: "r6", type: "mcq", prompt: "What does the author think about the time spent on reading?", options: { A: "It is spent usefully.", B: "It is a waste of time.", C: "It is very boring.", D: "It makes them tired." }, correct: "A", explanation: "Bài đọc: \"I also spend my time profitably.\" → thời gian được sử dụng hữu ích, đáp án A." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'hấp dẫn, thú vị'.", accepted: ["fascinating"], correct: "fascinating", explanation: "\"other fascinating things of our world\" — fascinating = hấp dẫn, thú vị." },
      { id: "r8", type: "mcq", prompt: "Where does the author get most of the books they read?", options: { A: "Libraries, relatives and friends.", B: "The school bookstore only.", C: "Online shops only.", D: "They never read books." }, correct: "A", explanation: "Bài đọc: \"Libraries are the source... My relatives and my friends also give me books.\"" },
      { id: "r9", type: "truefalse", prompt: "The passage says the author feels bored while reading.", correct: "False", explanation: "Sai. Bài đọc thể hiện thái độ tích cực: \"It is indeed a good hobby.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Reading enables me to learn about so many things that I do not know.", suggested: "Đọc sách giúp tôi học được rất nhiều điều mà tôi chưa biết.", notes: "\"enable sb to V\" (giúp/cho phép ai đó làm gì)." },
    { id: "t2", en: "Reading helps me discover new things and widen my knowledge.", suggested: "Đọc sách giúp tôi khám phá những điều mới và mở rộng kiến thức.", notes: "\"help sb + V (nguyên thể)\"." },
    { id: "t3", en: "Books provide me with so much information and many facts.", suggested: "Sách cung cấp cho tôi rất nhiều thông tin và sự kiện.", notes: "\"provide sb with sth\" (cung cấp cho ai điều gì)." },
    { id: "t4", en: "I will certainly continue my reading hobby.", suggested: "Tôi chắc chắn sẽ tiếp tục sở thích đọc sách của mình.", notes: "\"certainly\" nhấn mạnh sự chắc chắn." },
    { id: "t5", en: "I also spend my time profitably.", suggested: "Tôi cũng sử dụng thời gian của mình một cách hữu ích.", notes: "\"spend + time + adv\" (sử dụng thời gian ra sao)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "feel excited whenever + clause ⇄ think + V-ing + is + adj",
      formula: "S + feels excited whenever + S + V.  →  S + thinks + V-ing + is + adj.",
      example: { before: "He feels excited whenever he watches a football match.", after: "He thinks watching a football match is exciting." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "She feels excited whenever she plays the piano. → She thinks ______________ (playing) the piano is exciting.", accepted: ["playing"], correct: "playing", explanation: "feel excited whenever + clause → think + V-ing + is + adj." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'They feel excited whenever they go camping.' → They think ______________ (going) camping is exciting.", accepted: ["going"], correct: "going", explanation: "feel excited whenever + clause → think + V-ing + is + adj." }
      ]
    },
    {
      id: "tr2", name: "It's not good to + V ⇄ S + shouldn't + V",
      formula: "It's not good to + V.  →  You/S + shouldn't + V.",
      example: { before: "It's not good to stay up so late to listen to music.", after: "You shouldn't stay up so late to listen to music." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "It's not good to eat too much sugar. → You ______________ (shouldn't) eat too much sugar.", accepted: ["shouldn't"], correct: "shouldn't", explanation: "It's not good to + V → shouldn't + V." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'It's not good to play games all day.' → You ______________ (shouldn't) play games all day.", accepted: ["shouldn't"], correct: "shouldn't", explanation: "It's not good to + V → shouldn't + V." }
      ]
    },
    {
      id: "tr3", name: "like + V-ing ⇄ be fond of + V-ing",
      formula: "S + like(s) + V-ing.  →  S + is/am/are fond of + V-ing.",
      example: { before: "I like keeping the bottles after drinking the water.", after: "I am fond of keeping the bottles after drinking the water." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "She likes painting pictures. → She is fond ______________ (of) painting pictures.", accepted: ["of"], correct: "of", explanation: "like + V-ing → be fond of + V-ing." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'They like playing chess.' → They are fond of ______________ (playing) chess.", accepted: ["playing"], correct: "playing", explanation: "like + V-ing → be fond of + V-ing." }
      ]
    },
    {
      id: "tr4", name: "S + attract sb ⇄ sb + be interested in + N",
      formula: "N + attract(s) + sb.  →  Sb + is/am/are interested in + N.",
      example: { before: "Her collections are exciting and they really attract me.", after: "I am interested in her collections." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "His stories attract many readers. → Many readers are interested ______________ (in) his stories.", accepted: ["in"], correct: "in", explanation: "N + attract(s) + sb → sb + be interested in + N." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'This hobby attracts a lot of teenagers.' → A lot of teenagers are interested ______________ (in) this hobby.", accepted: ["in"], correct: "in", explanation: "N + attract(s) + sb → sb + be interested in + N." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Rewarding' means:", options: { A: "bổ ích, xứng đáng công sức", B: "nhàm chán", C: "nguy hiểm", D: "tốn kém" }, correct: "A", explanation: "rewarding (adj) = bổ ích, xứng đáng công sức." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Attract' means:", options: { A: "thu hút", B: "tránh né", C: "phá hủy", D: "che giấu" }, correct: "A", explanation: "attract (v) = thu hút." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Reading helps me discover new things and ______________ (mở rộng) my knowledge.", accepted: ["widen"], correct: "widen", explanation: "widen (v) = mở rộng." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "He feels excited whenever he watches a football match. → He thinks watching a football match ______ exciting.", options: { A: "is", B: "was", C: "be", D: "being" }, correct: "A", explanation: "think + V-ing + is + adj (thì hiện tại đơn)." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "It's not good to stay up late. → You ______ stay up late.", options: { A: "shouldn't", B: "should to", C: "don't should", D: "not should" }, correct: "A", explanation: "It's not good to + V → shouldn't + V." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "I like keeping the bottles. → I am fond ______________ (of) keeping the bottles.", accepted: ["of"], correct: "of", explanation: "like + V-ing → be fond of + V-ing." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Her collections attract me. → I am interested ______________ (in) her collections.", accepted: ["in"], correct: "in", explanation: "N + attract(s) sb → sb + be interested in + N." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Reading only helps the author learn about the history of the past.", correct: "False", explanation: "Sai theo bài đọc — bài đọc kể ra nhiều điều khác ngoài lịch sử." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "The author plans to keep reading as a hobby in the future.", correct: "True", explanation: "Đúng theo bài đọc: \"I will certainly continue my reading hobby.\"" },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What does the author think about the time spent on reading?", options: { A: "It is spent usefully.", B: "It is a waste of time.", C: "It is very boring.", D: "It makes them tired." }, correct: "A", explanation: "Bài đọc: \"I also spend my time profitably.\"" },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "My younger sister has a very nice ______________ (COLLECT) of old key rings.", accepted: ["collection"], correct: "collection", explanation: "collect (v) → collection (n, +ion)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Doing outdoor activities together can make family relationships ______________ (STRENGTH).", accepted: ["stronger"], correct: "stronger", explanation: "strength (n) → strong (adj) → stronger (so sánh hơn)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The child looked ______________ (EXCITE) when his parents gave him a camera.", accepted: ["excited"], correct: "excited", explanation: "excite (v) → excited (adj, +ed)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'thức khuya'?", options: { A: "stay up", B: "wake up", C: "get up", D: "grow up" }, correct: "A", explanation: "stay up (phrasal v) = thức khuya." }
  ]
};
