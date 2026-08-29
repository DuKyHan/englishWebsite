const REVIEW = {
  id: "test45",
  testFile: "test45.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 5: Vietnamese Food and Drink",
  title: "Knowledge Review — Unit 5, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "ingredient", pos: "n", ipa: "/ɪnˈɡriːdiənt/", meaning: "nguyên liệu", example: "What are the main ingredients of Pho, Hoa?", exampleVi: "Nguyên liệu chính của Phở là gì vậy Hoa?" },
    { word: "refreshing", pos: "adj", ipa: "/rɪˈfreʃɪŋ/", meaning: "sảng khoái, mát mẻ", example: "That sounds refreshing.", exampleVi: "Nghe có vẻ sảng khoái đấy." },
    { word: "recipe", pos: "n", ipa: "/ˈresəpi/", meaning: "công thức nấu ăn", example: "My mother did. She has many great recipes.", exampleVi: "Mẹ tôi dạy. Bà có rất nhiều công thức tuyệt vời." },
    { word: "look forward to", pos: "phrase", ipa: "/lʊk ˈfɔːrwərd tuː/", meaning: "mong chờ", example: "She's looking forward to receiving the letter from her mother.", exampleVi: "Cô ấy đang mong chờ nhận được lá thư từ mẹ." },
    { word: "minced", pos: "adj", ipa: "/mɪnst/", meaning: "băm nhỏ", example: "It is an omelette with minced tomatoes.", exampleVi: "Đó là món trứng chiên với cà chua băm nhỏ." },
    { word: "calorie", pos: "n", ipa: "/ˈkæləri/", meaning: "calo (đơn vị năng lượng)", example: "It may give us more calories than the amount that our body needs.", exampleVi: "Nó có thể cung cấp nhiều calo hơn mức cơ thể chúng ta cần." },
    { word: "dairy", pos: "n/adj", ipa: "/ˈderi/", meaning: "sản phẩm từ sữa", example: "Dairy products like milk, cheese, and yoghurt are great because they contain calcium.", exampleVi: "Các sản phẩm từ sữa như sữa, phô mai và sữa chua rất tốt vì chúng chứa canxi." },
    { word: "calcium", pos: "n", ipa: "/ˈkælsiəm/", meaning: "canxi", example: "Dairy products contain calcium and keep your teeth and bones healthy.", exampleVi: "Các sản phẩm từ sữa chứa canxi và giúp răng, xương chắc khỏe." },
    { word: "whole grain", pos: "phrase", ipa: "/hoʊl ɡreɪn/", meaning: "ngũ cốc nguyên hạt", example: "Whole grains are an important part of every meal.", exampleVi: "Ngũ cốc nguyên hạt là một phần quan trọng của mỗi bữa ăn." },
    { word: "vitamin", pos: "n", ipa: "/ˈvaɪtəmɪn/", meaning: "vitamin", example: "Fruit and vegetables with darker colours have more vitamins.", exampleVi: "Trái cây và rau củ có màu sẫm hơn chứa nhiều vitamin hơn." },
    { word: "traditional", pos: "adj", ipa: "/trəˈdɪʃənl/", meaning: "truyền thống", example: "We are looking forward to the exciting traditional Food Fair this Friday.", exampleVi: "Chúng tôi đang mong chờ Hội chợ Ẩm thực truyền thống thú vị vào thứ Sáu này." },
    { word: "central", pos: "adj", ipa: "/ˈsentrəl/", meaning: "thuộc miền trung/trung tâm", example: "Bun Bo Hue originates from Hue, a city in central Vietnam.", exampleVi: "Bún bò Huế có nguồn gốc từ Huế, một thành phố ở miền Trung Việt Nam." },
    { word: "demonstration", pos: "n", ipa: "/ˌdemənˈstreɪʃn/", meaning: "buổi trình diễn, hướng dẫn", example: "The chef gave a short cooking demonstration on how to make a clear broth.", exampleVi: "Đầu bếp đã có một buổi hướng dẫn nấu ăn ngắn về cách làm nước dùng trong." },
    { word: "incredible", pos: "adj", ipa: "/ɪnˈkredəbl/", meaning: "tuyệt vời, khó tin", example: "My mother always makes incredible omelettes for breakfast.", exampleVi: "Mẹ tôi luôn làm những món trứng chiên tuyệt vời cho bữa sáng." },
    { word: "fresh", pos: "adj", ipa: "/freʃ/", meaning: "tươi", example: "After selecting fresh beef in the market, we boil it with bones.", exampleVi: "Sau khi chọn thịt bò tươi ở chợ, chúng tôi ninh nó với xương." },
    { word: "typical", pos: "adj", ipa: "/ˈtɪpɪkl/", meaning: "điển hình", example: "This hot pot is a typical version of local Vietnamese food.", exampleVi: "Món lẩu này là một phiên bản điển hình của ẩm thực địa phương Việt Nam." },
    { word: "secret recipe", pos: "phrase", ipa: "/ˈsiːkrət ˈresəpi/", meaning: "công thức bí mật", example: "This restaurant is famous because they use a secret recipe passed down for generations.", exampleVi: "Nhà hàng này nổi tiếng vì họ sử dụng công thức bí mật được truyền qua nhiều thế hệ." },
    { word: "follow a recipe", pos: "phrase", ipa: "/ˈfɒloʊ ə ˈresəpi/", meaning: "làm theo công thức nấu ăn", example: "If you want the cookies to taste perfect, you must follow a recipe exactly.", exampleVi: "Nếu muốn bánh quy có vị hoàn hảo, bạn phải làm theo công thức thật chính xác." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'nguyên liệu':", options: { A: "ingredient", B: "recipe", C: "calorie", D: "vitamin" }, correct: "A", explanation: "<b>ingredient</b> (n) = nguyên liệu." },
      { id: "vp2", prompt: "Choose the word that means 'canxi':", options: { A: "calcium", B: "calorie", C: "vitamin", D: "protein" }, correct: "A", explanation: "<b>calcium</b> (n) = canxi." },
      { id: "vp3", prompt: "\"Dairy products contain calcium and keep your teeth and bones ______.\"", options: { A: "healthy", B: "sick", C: "weak", D: "broken" }, correct: "A", explanation: "\"keep... <b>healthy</b>\" (giữ cho khỏe mạnh) phù hợp với ngữ cảnh nói về lợi ích của canxi." },
      { id: "vp4", prompt: "Choose the word that means 'tươi':", options: { A: "fresh", B: "rotten", C: "frozen", D: "dry" }, correct: "A", explanation: "<b>fresh</b> (adj) = tươi." },
      { id: "vp5", prompt: "\"She's looking ______ to receiving the letter from her mother.\"", options: { A: "forward", B: "back", C: "up", D: "over" }, correct: "A", explanation: "\"look <b>forward</b> to\" (mong chờ) là cụm cố định." },
      { id: "vp6", prompt: "Choose the word that means 'điển hình':", options: { A: "typical", B: "unusual", C: "rare", D: "strange" }, correct: "A", explanation: "<b>typical</b> (adj) = điển hình." }
    ],
    fillblank: [
      { id: "vf1", prompt: "What are the main ______________ (nguyên liệu) of Pho?", accepted: ["ingredients"], correct: "ingredients", explanation: "<b>ingredient</b> (n) = nguyên liệu." },
      { id: "vf2", prompt: "It is an omelette with ______________ (băm nhỏ) tomatoes.", accepted: ["minced"], correct: "minced", explanation: "<b>minced</b> (adj) = băm nhỏ." },
      { id: "vf3", prompt: "______________ (sản phẩm từ sữa) products like milk, cheese, and yoghurt are great.", accepted: ["dairy"], correct: "dairy", explanation: "<b>dairy</b> (n/adj) = sản phẩm từ sữa." },
      { id: "vf4", prompt: "______________ (ngũ cốc nguyên hạt) are an important part of every meal.", accepted: ["whole grains"], correct: "whole grains", explanation: "<b>whole grain</b> (phrase) = ngũ cốc nguyên hạt." },
      { id: "vf5", prompt: "Fruit and vegetables with darker colours have more ______________ (vitamin).", accepted: ["vitamins"], correct: "vitamins", explanation: "<b>vitamin</b> (n) = vitamin." },
      { id: "vf6", prompt: "This restaurant is famous because they use a ______________ (công thức bí mật) passed down for generations.", accepted: ["secret recipe"], correct: "secret recipe", explanation: "<b>secret recipe</b> (phrase) = công thức bí mật." }
    ],
    matching: {
      left: ["refreshing", "calorie", "central", "demonstration", "incredible", "follow a recipe"],
      right: ["sảng khoái, mát mẻ", "calo", "thuộc miền trung", "buổi trình diễn/hướng dẫn", "tuyệt vời, khó tin", "làm theo công thức nấu ăn"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"We are looking forward to the exciting ______ Food Fair this Friday.\" (TRADITION)", options: { A: "tradition", B: "traditional", C: "traditionally", D: "traditions" }, correct: "B", explanation: "Cần tính từ trước \"Food Fair\" → tradition (n) → <b>traditional</b> (adj, +al)." },
      { id: "cw2", prompt: "\"Bun Bo Hue originates from Hue, a city in ______ Vietnam.\" (CENTRE)", options: { A: "centre", B: "central", C: "centrally", D: "centred" }, correct: "B", explanation: "Cần tính từ trước \"Vietnam\" → centre (n) → <b>central</b> (adj, +al)." },
      { id: "cw3", prompt: "\"The chef gave a short cooking ______ on how to make a clear broth.\" (DEMONSTRATE)", options: { A: "demonstrate", B: "demonstrating", C: "demonstration", D: "demonstrated" }, correct: "C", explanation: "Cần danh từ sau \"cooking\" → demonstrate (v) → <b>demonstration</b> (n, +ion)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'ingredient' mean?", options: { A: "nguyên liệu", B: "công thức", C: "món ăn", D: "hương vị" }, correct: "A", explanation: "ingredient (n) = nguyên liệu." },
      { id: "wm2", prompt: "What does 'calcium' mean?", options: { A: "canxi", B: "chất béo", C: "đường", D: "chất đạm" }, correct: "A", explanation: "calcium (n) = canxi." },
      { id: "wm3", prompt: "What does 'refreshing' mean?", options: { A: "sảng khoái, mát mẻ", B: "buồn ngủ", C: "cay nồng", D: "béo ngậy" }, correct: "A", explanation: "refreshing (adj) = sảng khoái, mát mẻ." }
    ],
    wordForm: [
      { id: "wf1", prompt: "We are looking forward to the exciting ______________ (TRADITION) Food Fair this Friday.", accepted: ["traditional"], correct: "traditional", explanation: "tradition (n) → traditional (adj)." },
      { id: "wf2", prompt: "Bun Bo Hue originates from Hue, a city in ______________ (CENTRE) Vietnam.", accepted: ["central"], correct: "central", explanation: "centre (n) → central (adj)." },
      { id: "wf3", prompt: "The chef gave a short cooking ______________ (DEMONSTRATE) on how to make a clear broth.", accepted: ["demonstration"], correct: "demonstration", explanation: "demonstrate (v) → demonstration (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "What is the price of N? ⇄ How much does/is N (cost)?",
      usage: "\"What is the price of + N?\" (giá của cái gì là bao nhiêu) có thể viết lại bằng \"How much does/is + N (+ cost)?\", giữ nguyên nghĩa hỏi về giá cả.",
      formulas: [
        "What is the price of + N?  →  How much does + N + cost? / How much is + N?",
        "What is the price of a kilo of this pork? → How much does a kilo of this pork cost?"
      ],
      signals: ["What is the price of N?", "How much does/is N (cost)?"],
      examples: [
        { en: "What is the price of a kilo of this pork?", vi: "Giá của một ký thịt heo này là bao nhiêu?" },
        { en: "How much does a kilo of this pork cost?", vi: "Một ký thịt heo này giá bao nhiêu?" }
      ],
      mistakes: [
        { wrong: "How much cost a kilo of this pork?", right: "How much does a kilo of this pork cost? (cần trợ động từ \"does\" đứng trước chủ ngữ trong câu hỏi)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "What is the price of this cake? → How much ______________ (does) this cake cost?", accepted: ["does"], correct: "does", explanation: "What is the price of N? → How much does N cost?" }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'What is the price of a bowl of noodles?' → How much ______________ (does) a bowl of noodles cost?", accepted: ["does"], correct: "does", explanation: "What is the price of N? → How much does N cost?" }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'What is the price of a bottle of fish sauce?' → ______________ (How much does a bottle of fish sauce cost?).", accepted: ["how much does a bottle of fish sauce cost"], correct: "How much does a bottle of fish sauce cost?", explanation: "What is the price of N? → How much does N cost?" }
        ]
      }
    },
    {
      id: "g2", name: "There is no + N ⇄ There isn't any + N",
      usage: "\"There is no + N\" (không có gì) có thể viết lại bằng \"There isn't any + N\", giữ nguyên nghĩa phủ định.",
      formulas: [
        "There is no + N.  →  There isn't any + N.",
        "There is no bread left at the bakery. → There isn't any bread left at the bakery."
      ],
      signals: ["There is no N", "There isn't any N"],
      examples: [
        { en: "There is no bread left at the bakery.", vi: "Không còn bánh mì nào ở tiệm bánh." },
        { en: "There isn't any bread left at the bakery.", vi: "Không còn bánh mì nào ở tiệm bánh." }
      ],
      mistakes: [
        { wrong: "There isn't no bread left.", right: "There isn't any bread left. (không dùng hai từ phủ định \"isn't\" và \"no\" trong cùng một câu)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "There is no milk in the fridge. → There isn't ______________ (any) milk in the fridge.", accepted: ["any"], correct: "any", explanation: "There is no N → There isn't any N." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'There is no sugar in the jar.' → There isn't ______________ (any) sugar in the jar.", accepted: ["any"], correct: "any", explanation: "There is no N → There isn't any N." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'There is no rice left in the pot.' → ______________ (There isn't any rice left in the pot).", accepted: ["there isn't any rice left in the pot"], correct: "There isn't any rice left in the pot", explanation: "There is no N → There isn't any N." }
        ]
      }
    },
    {
      id: "g3", name: "No other + N + as well as + S ⇄ superlative / comparative",
      usage: "Câu so sánh phủ định \"No other + N + V + as well as + S\" (không ai/cái gì làm giỏi bằng S) có thể viết lại bằng so sánh nhất \"S + V + the best\" hoặc so sánh hơn \"S + V + better than any other + N\", giữ nguyên nghĩa.",
      formulas: [
        "No other + N + V + as well as + S.  →  S + V + the best (in N). / S + V + better than any other + N.",
        "No other student in the class plays the guitar as well as John. → John plays the guitar the best in the class."
      ],
      signals: ["No other N as well as S", "S plays the best / better than any other N"],
      examples: [
        { en: "No other student in the class plays the guitar as well as John.", vi: "Không có học sinh nào khác trong lớp chơi guitar giỏi bằng John." },
        { en: "John plays the guitar the best in the class.", vi: "John chơi guitar giỏi nhất lớp." }
      ],
      mistakes: [
        { wrong: "John plays the guitar the best than any student.", right: "John plays the guitar the best in the class. (không trộn \"the best\" với \"than\" trong cùng một cấu trúc)" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "No other cook in the restaurant cooks as well as Mai. → Mai cooks the ______________ (best) in the restaurant.", accepted: ["best"], correct: "best", explanation: "No other N as well as S → S + the best." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'No other singer in the group sings as well as Lan.' → Lan sings the ______________ (best) in the group.", accepted: ["best"], correct: "best", explanation: "No other N as well as S → S + the best." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'No other student in the school runs as well as Nam.' → ______________ (Nam runs the best in the school).", accepted: ["nam runs the best in the school"], correct: "Nam runs the best in the school", explanation: "No other N as well as S → S + the best." }
        ]
      }
    },
    {
      id: "g4", name: "V-ing... is quite + adj/N ⇄ It is quite + adj/N + to V",
      usage: "\"V-ing... is quite + adj/N\" (việc gì đó khá là...) có thể viết lại bằng chủ ngữ giả \"It is quite + adj/N + to V\", giữ nguyên nghĩa.",
      formulas: [
        "V-ing + is quite + adj/N.  →  It is quite + adj/N + to + V.",
        "Learning how to make a clear broth is quite a difficult task. → It is quite a difficult task to learn how to make a clear broth."
      ],
      signals: ["V-ing is quite adj/N", "It is quite adj/N to V"],
      examples: [
        { en: "Learning how to make a clear broth from beef bones is quite a difficult task.", vi: "Việc học cách nấu nước dùng trong từ xương bò khá là một nhiệm vụ khó." },
        { en: "It is quite a difficult task to learn how to make a clear broth from beef bones.", vi: "Thật là một nhiệm vụ khá khó khi học cách nấu nước dùng trong từ xương bò." }
      ],
      mistakes: [
        { wrong: "It is quite a difficult task learning how to make a clear broth.", right: "It is quite a difficult task to learn how to make a clear broth. (cần \"to V\" sau danh từ trong cấu trúc chủ ngữ giả \"it\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "Cooking Pho is quite a challenging task. → It is quite a challenging task ______________ (to cook) Pho.", accepted: ["to cook"], correct: "to cook", explanation: "V-ing is quite adj/N → It is quite adj/N to V." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'Making spring rolls is quite easy.' → It is quite easy ______________ (to make) spring rolls.", accepted: ["to make"], correct: "to make", explanation: "V-ing is quite adj/N → It is quite adj/N to V." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Preparing a traditional Tet meal is quite a big job.' → ______________ (It is quite a big job to prepare a traditional Tet meal).", accepted: ["it is quite a big job to prepare a traditional tet meal"], correct: "It is quite a big job to prepare a traditional Tet meal", explanation: "V-ing is quite adj/N → It is quite adj/N to V." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) look forward to + N / V-ing",
      usage: "Cấu trúc \"look forward to + N/V-ing\" dùng để nói về việc mong chờ điều gì sắp xảy ra. Lưu ý \"to\" ở đây là giới từ, nên theo sau là danh từ hoặc V-ing, không dùng động từ nguyên thể.",
      formulas: [
        "S + look(s) forward to + N/V-ing.",
        "She's looking forward to receiving the letter from her mother."
      ],
      signals: ["look forward to + N/V-ing (mong chờ)"],
      examples: [
        { en: "She's looking forward to receiving the letter from her mother.", vi: "Cô ấy đang mong chờ nhận được lá thư từ mẹ." },
        { en: "We are looking forward to the exciting traditional Food Fair this Friday.", vi: "Chúng tôi đang mong chờ Hội chợ Ẩm thực truyền thống thú vị vào thứ Sáu này." }
      ],
      mistakes: [
        { wrong: "I look forward to receive your reply.", right: "I look forward to receiving your reply. (theo sau \"to\" là giới từ nên cần V-ing, không dùng động từ nguyên thể)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "I look forward to ______________ (seeing) you soon.", accepted: ["seeing"], correct: "seeing", explanation: "look forward to + V-ing." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'We hope to try the new restaurant next week.' → We are looking forward to ______________ (trying) the new restaurant next week.", accepted: ["trying"], correct: "trying", explanation: "look forward to + V-ing." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'The students are looking forward ______________ (to) the Food Fair this Friday.'", accepted: ["to"], correct: "to", explanation: "look forward to + N/V-ing." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Healthy eating is about feeling great and having more energy. If you choose the right foods, <mark data-w=\"your healthy diet will be a tasty diet, too\">your healthy diet will be a tasty diet, too</mark>. You can still enjoy your favourite sweet and salty foods, but too much sugar and salt is bad for your body. <mark data-w=\"Dairy products like milk, cheese, and yoghurt are great because they contain calcium and keep your teeth and bones healthy\">Dairy products like milk, cheese, and yoghurt are great because they contain calcium and keep your teeth and bones healthy</mark>. You should choose low-fat dairy products. Meat, fish, eggs, beans, and nuts are important, too. They keep our bodies healthy and they give us energy to work and play. <mark data-w=\"Whole grains are an important part of every meal\">Whole grains are an important part of every meal</mark>. If you eat lots of whole grains, you will have a healthy heart. Whole grains are in bread, cereal, pasta, and rice. Dark bread and brown rice are great sources of whole grains. <mark data-w=\"Fruit and vegetables are the most important part of a healthy diet\">Fruit and vegetables are the most important part of a healthy diet</mark>. They are low in calories and full of vitamins. Eat lots of fruit and vegetables with every meal, and as snacks during the day. <mark data-w=\"Fruit and vegetables with darker colours have more vitamins\">Fruit and vegetables with darker colours have more vitamins</mark>.",
    vocabInContext: {
      "your healthy diet will be a tasty diet, too": "chế độ ăn lành mạnh của bạn cũng sẽ là một chế độ ăn ngon",
      "Dairy products like milk, cheese, and yoghurt are great because they contain calcium and keep your teeth and bones healthy": "các sản phẩm từ sữa như sữa, phô mai và sữa chua rất tốt vì chúng chứa canxi và giúp răng, xương chắc khỏe",
      "Whole grains are an important part of every meal": "ngũ cốc nguyên hạt là một phần quan trọng của mỗi bữa ăn",
      "Fruit and vegetables are the most important part of a healthy diet": "trái cây và rau củ là phần quan trọng nhất của một chế độ ăn lành mạnh",
      "Fruit and vegetables with darker colours have more vitamins": "trái cây và rau củ có màu sẫm hơn chứa nhiều vitamin hơn"
    },
    translation: "<b>CHẾ ĐỘ ĂN LÀNH MẠNH</b><br><br>Ăn uống lành mạnh là để cảm thấy khỏe khoắn và có nhiều năng lượng hơn. Nếu bạn chọn đúng loại thực phẩm, chế độ ăn lành mạnh của bạn cũng sẽ là một chế độ ăn ngon. Bạn vẫn có thể thưởng thức những món ngọt và mặn yêu thích, nhưng quá nhiều đường và muối lại không tốt cho cơ thể. Các sản phẩm từ sữa như sữa, phô mai và sữa chua rất tốt vì chúng chứa canxi và giúp răng, xương chắc khỏe. Bạn nên chọn các sản phẩm từ sữa ít béo. Thịt, cá, trứng, đậu và các loại hạt cũng quan trọng. Chúng giúp cơ thể khỏe mạnh và cung cấp năng lượng để làm việc và vui chơi. Ngũ cốc nguyên hạt là một phần quan trọng của mỗi bữa ăn. Nếu ăn nhiều ngũ cốc nguyên hạt, bạn sẽ có một trái tim khỏe mạnh. Ngũ cốc nguyên hạt có trong bánh mì, ngũ cốc ăn sáng, mì ống và gạo. Bánh mì đen và gạo lứt là nguồn ngũ cốc nguyên hạt tuyệt vời. Trái cây và rau củ là phần quan trọng nhất của một chế độ ăn lành mạnh. Chúng ít calo và giàu vitamin. Hãy ăn nhiều trái cây và rau củ trong mỗi bữa ăn, và dùng làm đồ ăn nhẹ trong ngày. Trái cây và rau củ có màu sẫm hơn chứa nhiều vitamin hơn.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "You must completely stop eating your favourite sweet and salty foods.", correct: "False", explanation: "Sai. Bài đọc: \"You can still enjoy your favourite sweet and salty foods, but too much sugar and salt is bad for your body.\"" },
      { id: "r2", type: "truefalse", prompt: "Dairy products are good for your teeth and bones.", correct: "True", explanation: "Đúng. Bài đọc: \"Dairy products like milk, cheese, and yoghurt are great because they contain calcium and keep your teeth and bones healthy.\"" },
      { id: "r3", type: "truefalse", prompt: "Whole grains can help you have a healthy heart.", correct: "True", explanation: "Đúng. Bài đọc: \"If you eat lots of whole grains, you will have a healthy heart.\"" },
      { id: "r4", type: "truefalse", prompt: "Light-coloured fruit and vegetables have more vitamins than darker ones.", correct: "False", explanation: "Sai. Bài đọc: \"Fruit and vegetables with darker colours have more vitamins.\"" },
      { id: "r5", type: "mcq", prompt: "Why are meat, fish, eggs, beans, and nuts important for us?", options: { A: "They give us energy to work and play.", B: "They have a lot of sugar and salt.", C: "They are the only sources of calcium.", D: "They contain very few vitamins." }, correct: "A", explanation: "Bài đọc: \"They keep our bodies healthy and they give us energy to work and play.\"" },
      { id: "r6", type: "mcq", prompt: "According to the text, when should you eat fruit and vegetables?", options: { A: "With every meal and as snacks.", B: "Only before you go to sleep.", C: "Only when you feel tired.", D: "Instead of eating whole grains." }, correct: "A", explanation: "Bài đọc: \"Eat lots of fruit and vegetables with every meal, and as snacks during the day.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'nguồn ngũ cốc nguyên hạt tuyệt vời'.", accepted: ["great sources of whole grains"], correct: "great sources of whole grains", explanation: "\"Dark bread and brown rice are great sources of whole grains.\" — great sources of whole grains = nguồn ngũ cốc nguyên hạt tuyệt vời." },
      { id: "r8", type: "mcq", prompt: "Which foods are described as great sources of whole grains?", options: { A: "Dark bread and brown rice.", B: "Milk and cheese.", C: "Meat and fish.", D: "Sweet and salty foods." }, correct: "A", explanation: "Bài đọc: \"Dark bread and brown rice are great sources of whole grains.\"" },
      { id: "r9", type: "truefalse", prompt: "The passage says healthy eating cannot also be tasty.", correct: "False", explanation: "Sai. Bài đọc: \"If you choose the right foods, your healthy diet will be a tasty diet, too.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Healthy eating is about feeling great and having more energy.", suggested: "Ăn uống lành mạnh là để cảm thấy khỏe khoắn và có nhiều năng lượng hơn.", notes: "\"be about + V-ing\" (là để làm gì, mục đích của việc gì)." },
    { id: "t2", en: "Dairy products like milk, cheese, and yoghurt are great because they contain calcium.", suggested: "Các sản phẩm từ sữa như sữa, phô mai và sữa chua rất tốt vì chúng chứa canxi.", notes: "\"like + N\" (như, ví dụ như) để liệt kê." },
    { id: "t3", en: "Whole grains are an important part of every meal.", suggested: "Ngũ cốc nguyên hạt là một phần quan trọng của mỗi bữa ăn.", notes: "\"an important part of + N\" (một phần quan trọng của)." },
    { id: "t4", en: "Fruit and vegetables are the most important part of a healthy diet.", suggested: "Trái cây và rau củ là phần quan trọng nhất của một chế độ ăn lành mạnh.", notes: "So sánh nhất \"the most important\"." },
    { id: "t5", en: "Fruit and vegetables with darker colours have more vitamins.", suggested: "Trái cây và rau củ có màu sẫm hơn chứa nhiều vitamin hơn.", notes: "\"with + N\" bổ nghĩa cho danh từ đứng trước (có đặc điểm gì)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "What is the price of N? ⇄ How much does/is N (cost)?",
      formula: "What is the price of + N?  →  How much does + N + cost? / How much is + N?",
      example: { before: "What is the price of a kilo of this pork?", after: "How much does a kilo of this pork cost?" },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "What is the price of this cake? → How much ______________ (does) this cake cost?", accepted: ["does"], correct: "does", explanation: "What is the price of N? → How much does N cost?" },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'What is the price of a bowl of noodles?' → How much ______________ (does) a bowl of noodles cost?", accepted: ["does"], correct: "does", explanation: "What is the price of N? → How much does N cost?" }
      ]
    },
    {
      id: "tr2", name: "There is no + N ⇄ There isn't any + N",
      formula: "There is no + N.  →  There isn't any + N.",
      example: { before: "There is no bread left at the bakery.", after: "There isn't any bread left at the bakery." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "There is no milk in the fridge. → There isn't ______________ (any) milk in the fridge.", accepted: ["any"], correct: "any", explanation: "There is no N → There isn't any N." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'There is no sugar in the jar.' → There isn't ______________ (any) sugar in the jar.", accepted: ["any"], correct: "any", explanation: "There is no N → There isn't any N." }
      ]
    },
    {
      id: "tr3", name: "No other + N + as well as + S ⇄ superlative",
      formula: "No other + N + V + as well as + S.  →  S + V + the best (in N).",
      example: { before: "No other student in the class plays the guitar as well as John.", after: "John plays the guitar the best in the class." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "No other cook in the restaurant cooks as well as Mai. → Mai cooks the ______________ (best) in the restaurant.", accepted: ["best"], correct: "best", explanation: "No other N as well as S → S + the best." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'No other singer in the group sings as well as Lan.' → Lan sings the ______________ (best) in the group.", accepted: ["best"], correct: "best", explanation: "No other N as well as S → S + the best." }
      ]
    },
    {
      id: "tr4", name: "V-ing... is quite + adj/N ⇄ It is quite + adj/N + to V",
      formula: "V-ing + is quite + adj/N.  →  It is quite + adj/N + to + V.",
      example: { before: "Learning how to make a clear broth is quite a difficult task.", after: "It is quite a difficult task to learn how to make a clear broth." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "Cooking Pho is quite a challenging task. → It is quite a challenging task ______________ (to cook) Pho.", accepted: ["to cook"], correct: "to cook", explanation: "V-ing is quite adj/N → It is quite adj/N to V." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'Making spring rolls is quite easy.' → It is quite easy ______________ (to make) spring rolls.", accepted: ["to make"], correct: "to make", explanation: "V-ing is quite adj/N → It is quite adj/N to V." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Ingredient' means:", options: { A: "nguyên liệu", B: "công thức", C: "món ăn", D: "hương vị" }, correct: "A", explanation: "ingredient (n) = nguyên liệu." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Calcium' means:", options: { A: "canxi", B: "chất béo", C: "đường", D: "chất đạm" }, correct: "A", explanation: "calcium (n) = canxi." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "This restaurant is famous because they use a ______________ (công thức bí mật).", accepted: ["secret recipe"], correct: "secret recipe", explanation: "secret recipe (phrase) = công thức bí mật." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "What is the price of this cake? → How much ______ this cake cost?", options: { A: "does", B: "is", C: "do", D: "did" }, correct: "A", explanation: "How much does N cost?" },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "There is no bread left. → There isn't ______ bread left.", options: { A: "any", B: "some", C: "no", D: "much" }, correct: "A", explanation: "There is no N → There isn't any N." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "No other student plays as well as John. → John plays the ______________ (best) in the class.", accepted: ["best"], correct: "best", explanation: "No other N as well as S → S + the best." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "I look forward to ______________ (seeing) you soon.", accepted: ["seeing"], correct: "seeing", explanation: "look forward to + V-ing." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "You must completely stop eating your favourite sweet and salty foods.", correct: "False", explanation: "Sai theo bài đọc — vẫn có thể ăn nhưng không nên ăn quá nhiều." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Whole grains can help you have a healthy heart.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Why are meat, fish, eggs, beans, and nuts important for us?", options: { A: "They give us energy to work and play.", B: "They have a lot of sugar and salt.", C: "They are the only sources of calcium.", D: "They contain very few vitamins." }, correct: "A", explanation: "Bài đọc nêu rõ lý do." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "We are looking forward to the exciting ______________ (TRADITION) Food Fair this Friday.", accepted: ["traditional"], correct: "traditional", explanation: "tradition (n) → traditional (adj)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Bun Bo Hue originates from Hue, a city in ______________ (CENTRE) Vietnam.", accepted: ["central"], correct: "central", explanation: "centre (n) → central (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The chef gave a short cooking ______________ (DEMONSTRATE) on how to make a clear broth.", accepted: ["demonstration"], correct: "demonstration", explanation: "demonstrate (v) → demonstration (n)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'ngũ cốc nguyên hạt'?", options: { A: "whole grain", B: "dairy product", C: "fresh fruit", D: "fizzy drink" }, correct: "A", explanation: "whole grain (phrase) = ngũ cốc nguyên hạt." }
  ]
};
