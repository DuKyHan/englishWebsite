const REVIEW = {
  id: "test28",
  testFile: "test28.html",
  grade: "Grade 6 — Global Success",
  unit: "Unit 2: My house",
  title: "Knowledge Review — Unit 2, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "schoolyard", pos: "n", ipa: "/ˈskuːljɑːrd/", meaning: "sân trường", example: "The students usually gather in the schoolyard because it is very large.", exampleVi: "Học sinh thường tụ tập ở sân trường vì nó rất rộng." },
    { word: "stilt houses", pos: "n phr", ipa: "/stɪlt ˈhaʊzɪz/", meaning: "nhà sàn", example: "The Tay and Nung people mostly live in stilt houses made of wood and bamboo.", exampleVi: "Người Tày và Nùng chủ yếu sống trong những ngôi nhà sàn làm bằng gỗ và tre." },
    { word: "in front of", pos: "prep phr", ipa: "/ɪn frʌnt ʌv/", meaning: "phía trước", example: "There is a small green garden in front of the house where we grow flowers.", exampleVi: "Có một khu vườn nhỏ màu xanh phía trước ngôi nhà, nơi chúng tôi trồng hoa." },
    { word: "hold a contest", pos: "v phr", ipa: "/hoʊld ə ˈkɑːntest/", meaning: "tổ chức một cuộc thi", example: "My school is holding a \"Design Your Dream House\" contest.", exampleVi: "Trường tôi đang tổ chức một cuộc thi \"Thiết kế ngôi nhà mơ ước của bạn\"." },
    { word: "cottage", pos: "n", ipa: "/ˈkɑːtɪdʒ/", meaning: "nhà tranh, nhà nhỏ xinh", example: "I'm drawing a big cottage with tall towers.", exampleVi: "Tôi đang vẽ một ngôi nhà tranh lớn với những tòa tháp cao." },
    { word: "fireplace", pos: "n", ipa: "/ˈfaɪərpleɪs/", meaning: "lò sưởi", example: "There's a living room where there's a lovely old fireplace.", exampleVi: "Có một phòng khách với một lò sưởi cổ rất đẹp." },
    { word: "attic", pos: "n", ipa: "/ˈætɪk/", meaning: "gác mái", example: "My house also has an attic where we store lots of old things.", exampleVi: "Nhà tôi còn có một gác mái, nơi chúng tôi cất giữ nhiều đồ cũ." },
    { word: "garage", pos: "n", ipa: "/ɡəˈrɑːʒ/", meaning: "nhà để xe, ga-ra", example: "My parents park beautiful cars in the garage.", exampleVi: "Bố mẹ tôi đỗ những chiếc xe đẹp trong ga-ra." },
    { word: "collection", pos: "n", ipa: "/kəˈlekʃn/", meaning: "bộ sưu tập", example: "There are over eighty stamps in Tom's unique collection.", exampleVi: "Có hơn tám mươi con tem trong bộ sưu tập độc đáo của Tom." },
    { word: "stamp", pos: "n", ipa: "/stæmp/", meaning: "con tem", example: "There are over eighty stamps in Tom's unique collection.", exampleVi: "Có hơn tám mươi con tem trong bộ sưu tập độc đáo của Tom." },
    { word: "lovely", pos: "adj", ipa: "/ˈlʌvli/", meaning: "đáng yêu, xinh đẹp", example: "The house looks so lovely with a beautiful garden full of trees and flowers.", exampleVi: "Ngôi nhà trông thật đáng yêu với một khu vườn đẹp đầy cây cối và hoa." },
    { word: "colorful", pos: "adj", ipa: "/ˈkʌlərfl/", meaning: "nhiều màu sắc", example: "The school hall is decorated with many colorful posters for the contest.", exampleVi: "Hội trường trường học được trang trí bằng nhiều áp phích nhiều màu sắc cho cuộc thi." },
    { word: "messy", pos: "adj", ipa: "/ˈmesi/", meaning: "bừa bộn", example: "Her bedroom is very messy, so she always cleans it every weekend.", exampleVi: "Phòng ngủ của cô ấy rất bừa bộn, nên cô ấy luôn dọn dẹp vào mỗi cuối tuần." },
    { word: "keen on", pos: "adj phr", ipa: "/kiːn ɒn/", meaning: "thích, hứng thú với", example: "I am not keen on sharing my room with my sister.", exampleVi: "Tôi không thích chia sẻ phòng của mình với em gái." },
    { word: "grow flowers", pos: "v phr", ipa: "/ɡroʊ ˈflaʊərz/", meaning: "trồng hoa", example: "There is a small green garden in front of the house where we grow flowers.", exampleVi: "Có một khu vườn nhỏ phía trước nhà nơi chúng tôi trồng hoa." },
    { word: "visitor", pos: "n", ipa: "/ˈvɪzɪtər/", meaning: "khách đến thăm", example: "I live with my parents, and we have a lot of visitors.", exampleVi: "Tôi sống cùng bố mẹ, và chúng tôi có rất nhiều khách đến thăm." },
    { word: "view", pos: "n", ipa: "/vjuː/", meaning: "tầm nhìn, quang cảnh", example: "The best thing is the view from my bedroom window.", exampleVi: "Điều tuyệt nhất là tầm nhìn từ cửa sổ phòng ngủ của tôi." },
    { word: "century", pos: "n", ipa: "/ˈsentʃəri/", meaning: "thế kỷ", example: "It's an old house, about a century old.", exampleVi: "Đó là một ngôi nhà cũ, khoảng một thế kỷ tuổi." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the phrase that means 'nhà sàn':", options: { A: "stilt houses", B: "town houses", C: "apartments", D: "villas" }, correct: "A", explanation: "<b>stilt houses</b> (n phr) = nhà sàn." },
      { id: "vp2", prompt: "Choose the word that means 'gác mái':", options: { A: "attic", B: "garage", C: "fireplace", D: "cottage" }, correct: "A", explanation: "<b>attic</b> (n) = gác mái." },
      { id: "vp3", prompt: "\"There's a living room where there's a lovely old ______.\"", options: { A: "fireplace", B: "garage", C: "attic", D: "collection" }, correct: "A", explanation: "\"lovely old <b>fireplace</b>\" (lò sưởi cổ đẹp) khớp với ngữ cảnh phòng khách." },
      { id: "vp4", prompt: "Choose the word that means 'bộ sưu tập':", options: { A: "collection", B: "view", C: "century", D: "visitor" }, correct: "A", explanation: "<b>collection</b> (n) = bộ sưu tập." },
      { id: "vp5", prompt: "\"My school is ______ a 'Design Your Dream House' contest.\"", options: { A: "holding", B: "growing", C: "visiting", D: "collecting" }, correct: "A", explanation: "\"<b>hold</b> a contest\" (tổ chức một cuộc thi) là cụm cố định." },
      { id: "vp6", prompt: "Choose the phrase that means 'thích, hứng thú với':", options: { A: "keen on", B: "close to", C: "far from", D: "full of" }, correct: "A", explanation: "<b>keen on</b> (adj phr) = thích, hứng thú với." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The students usually gather in the ______________ (sân trường) because it is very large.", accepted: ["schoolyard"], correct: "schoolyard", explanation: "<b>schoolyard</b> (n) = sân trường." },
      { id: "vf2", prompt: "My parents park beautiful cars in the ______________ (nhà để xe).", accepted: ["garage"], correct: "garage", explanation: "<b>garage</b> (n) = nhà để xe, ga-ra." },
      { id: "vf3", prompt: "There are over eighty ______________ (con tem) in Tom's unique collection.", accepted: ["stamps"], correct: "stamps", explanation: "<b>stamp</b> (n) → stamps (số nhiều) = con tem." },
      { id: "vf4", prompt: "The best thing about my house is the ______________ (tầm nhìn) from my bedroom window.", accepted: ["view"], correct: "view", explanation: "<b>view</b> (n) = tầm nhìn, quang cảnh." },
      { id: "vf5", prompt: "I live with my parents, and we have a lot of ______________ (khách đến thăm).", accepted: ["visitors"], correct: "visitors", explanation: "<b>visitor</b> (n) → visitors (số nhiều) = khách đến thăm." },
      { id: "vf6", prompt: "It's an old house, about a ______________ (thế kỷ) old.", accepted: ["century"], correct: "century", explanation: "<b>century</b> (n) = thế kỷ." }
    ],
    matching: {
      left: ["schoolyard", "attic", "fireplace", "cottage", "visitor", "century"],
      right: ["sân trường", "gác mái", "lò sưởi", "nhà tranh, nhà nhỏ xinh", "khách đến thăm", "thế kỷ"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The house looks so ______ with a beautiful garden.\" (LOVE)", options: { A: "love", B: "loving", C: "lovely", D: "lovable" }, correct: "C", explanation: "Cần tính từ sau \"looks so\" → love (n/v) → <b>lovely</b> (adj, +ly)." },
      { id: "cw2", prompt: "\"The school hall is decorated with many ______ posters.\" (COLOR)", options: { A: "color", B: "colored", C: "colorful", D: "colory" }, correct: "C", explanation: "Cần tính từ đứng trước \"posters\" → color (n) → <b>colorful</b> (adj, +ful)." },
      { id: "cw3", prompt: "\"Her bedroom is very ______, so she always cleans it.\" (MESS)", options: { A: "mess", B: "messy", C: "messily", D: "messiness" }, correct: "B", explanation: "Cần tính từ sau \"is very\" → mess (n) → <b>messy</b> (adj, +y)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'lovely' mean?", options: { A: "đáng yêu, xinh đẹp", B: "bừa bộn", C: "nguy hiểm", D: "chật hẹp" }, correct: "A", explanation: "lovely (adj) = đáng yêu, xinh đẹp." },
      { id: "wm2", prompt: "What does 'keen on' mean?", options: { A: "thích, hứng thú với", B: "sợ hãi", C: "chán ghét", D: "xa lạ với" }, correct: "A", explanation: "keen on (adj phr) = thích, hứng thú với." },
      { id: "wm3", prompt: "What does 'view' mean?", options: { A: "tầm nhìn, quang cảnh", B: "âm thanh", C: "mùi hương", D: "cảm giác" }, correct: "A", explanation: "view (n) = tầm nhìn, quang cảnh." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The house looks so ______________ (LOVE) with a beautiful garden.", accepted: ["lovely"], correct: "lovely", explanation: "love (n/v) → lovely (adj, +ly)." },
      { id: "wf2", prompt: "The school hall is decorated with many ______________ (COLOR) posters.", accepted: ["colorful", "colourful"], correct: "colorful", explanation: "color (n) → colorful (adj, +ful)." },
      { id: "wf3", prompt: "Her bedroom is very ______________ (MESS), so she always cleans it.", accepted: ["messy"], correct: "messy", explanation: "mess (n) → messy (adj, +y)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "A + is to the left of + B ⇄ B + is to the right of + A",
      usage: "\"A + is to the left of + B\" (A ở bên trái B) có nghĩa tương đương với \"B + is to the right of + A\" (B ở bên phải A) — chỉ cần đổi chiều chủ ngữ và \"left\"/\"right\".",
      formulas: [
        "A + is to the left of + B.  →  B + is to the right of + A.",
        "The bookstore is to the left of her house. → Her house is to the right of the bookstore."
      ],
      signals: ["to the left of", "to the right of"],
      examples: [
        { en: "The bookstore is to the left of her house.", vi: "Nhà sách ở bên trái nhà cô ấy." },
        { en: "Her house is to the right of the bookstore.", vi: "Nhà cô ấy ở bên phải nhà sách." }
      ],
      mistakes: [
        { wrong: "Her house is to the right the bookstore.", right: "Her house is to the right of the bookstore. (cần giới từ \"of\" sau \"right\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "The park is to the left of the school. → The school is to the right ______________ (of) the park.", accepted: ["of"], correct: "of", explanation: "to the left of → to the right of." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'The bakery is to the left of the bank.' → The bank is to the right ______________ (of) the bakery.", accepted: ["of"], correct: "of", explanation: "to the left of → to the right of." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The supermarket is to the left of my house.' → ______________ (My house is to the right of the supermarket).", accepted: ["my house is to the right of the supermarket"], correct: "My house is to the right of the supermarket", explanation: "to the left of → to the right of." }
        ]
      }
    },
    {
      id: "g2", name: "There are + số lượng + N + in + N's + N2 ⇄ N's + N2 + has + số lượng + N",
      usage: "Giống cấu trúc \"There are... in...\" đã học, khi nơi chốn là sở hữu cách (N's), ta vẫn có thể chuyển thành chủ ngữ với động từ \"has\".",
      formulas: [
        "There are + số lượng + N + in + N's + N2.  →  N's + N2 + has + số lượng + N.",
        "There are over eight hundred stamps in Tom's collection. → Tom's collection has over eight hundred stamps."
      ],
      signals: ["There are + N + in + N's", "N's + has + N"],
      examples: [
        { en: "There are over eight hundred stamps in Tom's collection.", vi: "Có hơn tám trăm con tem trong bộ sưu tập của Tom." },
        { en: "Tom's collection has over eight hundred stamps.", vi: "Bộ sưu tập của Tom có hơn tám trăm con tem." }
      ],
      mistakes: [
        { wrong: "Tom's collection have over eight hundred stamps.", right: "Tom's collection has over eight hundred stamps. (chủ ngữ số ít \"Tom's collection\" dùng \"has\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "There are fifty books in Lan's collection. → Lan's collection ______________ (has) fifty books.", accepted: ["has"], correct: "has", explanation: "There are + N + in + N's → N's + has + N." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'There are twenty toy cars in Nam's collection.' → Nam's collection ______________ (has) twenty toy cars.", accepted: ["has"], correct: "has", explanation: "There are + N + in + N's → N's + has + N." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'There are a hundred coins in Mai's collection.' → ______________ (Mai's collection has a hundred coins).", accepted: ["mai's collection has a hundred coins"], correct: "Mai's collection has a hundred coins", explanation: "There are + N + in + N's → N's + has + N." }
        ]
      }
    },
    {
      id: "g3", name: "S + don't/doesn't like + V-ing ⇄ S + am/is/are + not keen on + V-ing",
      usage: "\"S + don't/doesn't like + V-ing\" (không thích làm gì) có nghĩa tương đương với \"S + am/is/are + not keen on + V-ing\" (không hứng thú với việc gì).",
      formulas: [
        "S + don't/doesn't like + V-ing.  →  S + am/is/are + not keen on + V-ing.",
        "I don't like sharing my room with my sister. → I am not keen on sharing my room with my sister."
      ],
      signals: ["don't/doesn't like + V-ing", "not keen on + V-ing"],
      examples: [
        { en: "I don't like sharing my room with my sister.", vi: "Tôi không thích chia sẻ phòng của mình với em gái." },
        { en: "I am not keen on sharing my room with my sister.", vi: "Tôi không hứng thú với việc chia sẻ phòng của mình với em gái." }
      ],
      mistakes: [
        { wrong: "I am not keen on share my room with my sister.", right: "I am not keen on sharing my room with my sister. (sau giới từ \"on\" cần V-ing)" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "He doesn't like cleaning the house. → He is not keen on ______________ (cleaning) the house.", accepted: ["cleaning"], correct: "cleaning", explanation: "don't/doesn't like + V-ing → not keen on + V-ing." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'They don't like doing housework.' → They are not keen on ______________ (doing) housework.", accepted: ["doing"], correct: "doing", explanation: "don't like + V-ing → not keen on + V-ing." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'She doesn't like tidying her bedroom.' → ______________ (She is not keen on tidying her bedroom).", accepted: ["she is not keen on tidying her bedroom"], correct: "She is not keen on tidying her bedroom", explanation: "doesn't like + V-ing → is not keen on + V-ing." }
        ]
      }
    },
    {
      id: "g4", name: "There are + some + adj + N + on + nơi chốn ⇄ Nơi chốn + has + some + adj + N + on it",
      usage: "Cấu trúc \"There are\" mô tả vật trang trí ở một bề mặt có thể chuyển thành \"nơi chốn + has + N + on it\", trong đó \"it\" thay thế cho nơi chốn đã nêu.",
      formulas: [
        "There are + some + adj + N + on + nơi chốn.  →  Nơi chốn + has + some + adj + N + on it.",
        "There are some colorful posters on the bedroom wall. → The bedroom wall has some colorful posters on it."
      ],
      signals: ["There are + N + on + nơi chốn", "Nơi chốn + has + N + on it"],
      examples: [
        { en: "There are some colorful posters on the bedroom wall.", vi: "Có vài tấm áp phích nhiều màu sắc trên tường phòng ngủ." },
        { en: "The bedroom wall has some colorful posters on it.", vi: "Tường phòng ngủ có vài tấm áp phích nhiều màu sắc trên đó." }
      ],
      mistakes: [
        { wrong: "The bedroom wall has some colorful posters.", right: "The bedroom wall has some colorful posters on it. (nên giữ \"on it\" để nhấn mạnh vị trí, dù có thể lược bỏ trong văn nói)" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "There are some family photos on the shelf. → The shelf has some family photos ______________ (on it).", accepted: ["on it"], correct: "on it", explanation: "There are + N + on + nơi chốn → Nơi chốn + has + N + on it." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'There are two clocks on the living room wall.' → The living room wall has two clocks ______________ (on it).", accepted: ["on it"], correct: "on it", explanation: "There are + N + on + nơi chốn → Nơi chốn + has + N + on it." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'There are some old maps on the classroom wall.' → ______________ (The classroom wall has some old maps on it).", accepted: ["the classroom wall has some old maps on it"], correct: "The classroom wall has some old maps on it", explanation: "There are + N + on + nơi chốn → Nơi chốn + has + N + on it." }
        ]
      }
    },
    {
      id: "g5", name: "\"some\" (câu khẳng định) ⇄ \"any\" (câu hỏi/phủ định)",
      usage: "\"some\" thường dùng trong câu khẳng định, còn \"any\" thường dùng trong câu hỏi và câu phủ định — cả hai đều đi với danh từ không xác định số lượng cụ thể.",
      formulas: [
        "S + V + some + N. (khẳng định)",
        "Do/Does/Is/Are + S + any + N? (câu hỏi)  /  S + don't/doesn't/isn't/aren't + any + N. (phủ định)"
      ],
      signals: ["some (khẳng định)", "any (câu hỏi/phủ định)"],
      examples: [
        { en: "I have a few posters on the wall.", vi: "Tôi có vài tấm áp phích trên tường." },
        { en: "Are there any pictures in your bedroom?", vi: "Có bức ảnh nào trong phòng ngủ của bạn không?" }
      ],
      mistakes: [
        { wrong: "Are there some pictures in your bedroom?", right: "Are there any pictures in your bedroom? (câu hỏi dùng \"any\", không dùng \"some\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "Rewrite as a question: 'There are some posters on the wall.' → Are there ______________ (any) posters on the wall?", accepted: ["any"], correct: "any", explanation: "Câu hỏi với There is/are dùng \"any\"." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite in the negative: 'There are some flowers in the garden.' → There aren't ______________ (any) flowers in the garden.", accepted: ["any"], correct: "any", explanation: "Câu phủ định với There is/are dùng \"any\"." },
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Choose the correct word: 'I have ______________ (some) posters of my favorite football team on the wall.' (câu khẳng định)", accepted: ["some"], correct: "some", explanation: "Câu khẳng định thường dùng \"some\"." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "My name is Peter. I live in a house near the sea. It's an old house, about <mark data-w=\"a century old\">a century old</mark>, and it's very small. There are two bedrooms upstairs but no bathroom. The bathroom is downstairs <mark data-w=\"next to the kitchen\">next to the kitchen</mark> and there's a living room where there's <mark data-w=\"a lovely old fireplace\">a lovely old fireplace</mark>. There's a garden in front of the house. The garden goes down to the beach and in spring and summer there are flowers everywhere. I live with my parents, and we have <mark data-w=\"a lot of visitors\">a lot of visitors</mark>. I love my house for many reasons: the garden, the flowers in summer, the fire in winter, but the best thing is <mark data-w=\"the view from my bedroom window\">the view from my bedroom window</mark>.",
    vocabInContext: {
      "a century old": "khoảng một thế kỷ tuổi",
      "next to the kitchen": "cạnh nhà bếp",
      "a lovely old fireplace": "một lò sưởi cổ rất đẹp",
      "a lot of visitors": "rất nhiều khách đến thăm",
      "the view from my bedroom window": "tầm nhìn từ cửa sổ phòng ngủ"
    },
    translation: "<b>NGÔI NHÀ CỦA PETER</b><br><br>Tên tôi là Peter. Tôi sống trong một ngôi nhà gần biển. Đó là một ngôi nhà cũ, khoảng một thế kỷ tuổi, và rất nhỏ. Có hai phòng ngủ trên tầng nhưng không có phòng tắm. Phòng tắm ở tầng trệt, cạnh nhà bếp, và có một phòng khách với một lò sưởi cổ rất đẹp. Phía trước nhà có một khu vườn. Khu vườn trải dài xuống tận bãi biển và vào mùa xuân, mùa hè có hoa nở khắp nơi. Tôi sống cùng bố mẹ, và chúng tôi có rất nhiều khách đến thăm. Tôi yêu ngôi nhà của mình vì nhiều lý do: khu vườn, những bông hoa vào mùa hè, ngọn lửa vào mùa đông, nhưng điều tuyệt nhất là tầm nhìn từ cửa sổ phòng ngủ của tôi.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Peter's house is big and new.", correct: "False", explanation: "Sai. Nhà của Peter cũ và nhỏ, không to và mới." },
      { id: "r2", type: "truefalse", prompt: "The bathroom is on the ground floor.", correct: "True", explanation: "Đúng. \"The bathroom is downstairs next to the kitchen.\"" },
      { id: "r3", type: "truefalse", prompt: "Peter lives alone in the house.", correct: "False", explanation: "Sai. \"I live with my parents, and we have a lot of visitors.\"" },
      { id: "r4", type: "truefalse", prompt: "There are flowers in the garden during spring and summer.", correct: "True", explanation: "Đúng. \"in spring and summer there are flowers everywhere.\"" },
      { id: "r5", type: "mcq", prompt: "Where is the living room?", options: { A: "Downstairs with a fireplace", B: "Next to the kitchen", C: "Upstairs near the bedrooms", D: "In front of the garden" }, correct: "A", explanation: "Phòng khách ở tầng trệt và có một lò sưởi cổ." },
      { id: "r6", type: "mcq", prompt: "What does Peter like most about his house?", options: { A: "The beautiful view from his bedroom window", B: "The large number of visitors", C: "The lovely old fireplace", D: "The flowers in the garden" }, correct: "A", explanation: "\"the best thing is the view from my bedroom window.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'cạnh nhà bếp'.", accepted: ["next to the kitchen"], correct: "next to the kitchen", explanation: "\"The bathroom is downstairs next to the kitchen.\" — next to the kitchen = cạnh nhà bếp." },
      { id: "r8", type: "mcq", prompt: "Where does the garden go down to?", options: { A: "The beach", B: "The forest", C: "The street", D: "The school" }, correct: "A", explanation: "Bài đọc: \"The garden goes down to the beach.\"" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, there are two bedrooms upstairs in Peter's house.", correct: "True", explanation: "Đúng. Bài đọc: \"There are two bedrooms upstairs but no bathroom.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "It's an old house, about a century old, and it's very small.", suggested: "Đó là một ngôi nhà cũ, khoảng một thế kỷ tuổi, và rất nhỏ.", notes: "\"about + số lượng\" (khoảng) dùng để ước lượng." },
    { id: "t2", en: "The bathroom is downstairs next to the kitchen.", suggested: "Phòng tắm ở tầng trệt, cạnh nhà bếp.", notes: "\"next to\" (cạnh, kế bên) là giới từ chỉ vị trí liền kề." },
    { id: "t3", en: "The garden goes down to the beach.", suggested: "Khu vườn trải dài xuống tận bãi biển.", notes: "\"go down to\" (trải dài xuống, dẫn xuống) diễn tả địa hình nối tiếp nhau." },
    { id: "t4", en: "I live with my parents, and we have a lot of visitors.", suggested: "Tôi sống cùng bố mẹ, và chúng tôi có rất nhiều khách đến thăm.", notes: "\"a lot of\" (rất nhiều) dùng được với cả danh từ đếm được và không đếm được." },
    { id: "t5", en: "The best thing is the view from my bedroom window.", suggested: "Điều tuyệt nhất là tầm nhìn từ cửa sổ phòng ngủ của tôi.", notes: "\"the best thing is + N\" (điều tuyệt nhất là) dùng để nhấn mạnh một điểm nổi bật." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "to the left of ⇄ to the right of",
      formula: "A + is to the left of + B  →  B + is to the right of + A",
      example: { before: "The bookstore is to the left of her house.", after: "Her house is to the right of the bookstore." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "The park is to the left of the school. → The school is to the right ______________ (of) the park.", accepted: ["of"], correct: "of", explanation: "to the left of → to the right of." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'The bakery is to the left of the bank.' → The bank is to the right ______________ (of) the bakery.", accepted: ["of"], correct: "of", explanation: "to the left of → to the right of." }
      ]
    },
    {
      id: "tr2", name: "There are + N + in + N's ⇄ N's + has + N",
      formula: "There are + số lượng + N + in + N's + N2  →  N's + N2 + has + số lượng + N",
      example: { before: "There are over eight hundred stamps in Tom's collection.", after: "Tom's collection has over eight hundred stamps." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "There are fifty books in Lan's collection. → Lan's collection ______________ (has) fifty books.", accepted: ["has"], correct: "has", explanation: "There are + N + in + N's → N's + has + N." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'There are twenty toy cars in Nam's collection.' → Nam's collection ______________ (has) twenty toy cars.", accepted: ["has"], correct: "has", explanation: "There are + N + in + N's → N's + has + N." }
      ]
    },
    {
      id: "tr3", name: "don't/doesn't like + V-ing ⇄ not keen on + V-ing",
      formula: "S + don't/doesn't like + V-ing  →  S + am/is/are + not keen on + V-ing",
      example: { before: "I don't like sharing my room with my sister.", after: "I am not keen on sharing my room with my sister." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "He doesn't like cleaning the house. → He is not keen on ______________ (cleaning) the house.", accepted: ["cleaning"], correct: "cleaning", explanation: "don't/doesn't like + V-ing → not keen on + V-ing." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'They don't like doing housework.' → They are not keen on ______________ (doing) housework.", accepted: ["doing"], correct: "doing", explanation: "don't like + V-ing → not keen on + V-ing." }
      ]
    },
    {
      id: "tr4", name: "There are + N + on + nơi chốn ⇄ Nơi chốn + has + N + on it",
      formula: "There are + some + adj + N + on + nơi chốn  →  Nơi chốn + has + some + adj + N + on it",
      example: { before: "There are some colorful posters on the bedroom wall.", after: "The bedroom wall has some colorful posters on it." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "There are some family photos on the shelf. → The shelf has some family photos ______________ (on it).", accepted: ["on it"], correct: "on it", explanation: "There are + N + on + nơi chốn → Nơi chốn + has + N + on it." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'There are two clocks on the living room wall.' → The living room wall has two clocks ______________ (on it).", accepted: ["on it"], correct: "on it", explanation: "There are + N + on + nơi chốn → Nơi chốn + has + N + on it." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Stilt houses' means:", options: { A: "nhà sàn", B: "chung cư", C: "biệt thự", D: "lều trại" }, correct: "A", explanation: "stilt houses (n phr) = nhà sàn." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Fireplace' means:", options: { A: "lò sưởi", B: "gác mái", C: "nhà để xe", D: "sân trường" }, correct: "A", explanation: "fireplace (n) = lò sưởi." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "There are over eighty ______________ (con tem) in Tom's unique collection.", accepted: ["stamps"], correct: "stamps", explanation: "stamp (n) = con tem." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "The bookstore is to the left of her house. → Her house is to the ______ of the bookstore.", options: { A: "left", B: "right", C: "front", D: "back" }, correct: "B", explanation: "to the left of → to the right of." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "There are over eight hundred stamps in Tom's collection. → Tom's collection ______ over eight hundred stamps.", options: { A: "has", B: "have", C: "is", D: "are" }, correct: "A", explanation: "There are + N + in + N's → N's + has + N." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "I don't like sharing my room with my sister. → I am not keen ______________ (on) sharing my room with my sister.", accepted: ["on"], correct: "on", explanation: "not keen on + V-ing (không hứng thú với việc gì)." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "There are some colorful posters on the bedroom wall. → The bedroom wall has some colorful posters ______________ (on it).", accepted: ["on it"], correct: "on it", explanation: "There are + N + on + nơi chốn → Nơi chốn + has + N + on it." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "The bathroom is on the ground floor.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Peter lives alone in the house.", correct: "False", explanation: "Sai. Peter sống cùng bố mẹ." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What does Peter like most about his house?", options: { A: "The beautiful view from his bedroom window", B: "The large number of visitors", C: "The lovely old fireplace", D: "The flowers in the garden" }, correct: "A", explanation: "Bài đọc nêu rõ điều Peter thích nhất là tầm nhìn từ cửa sổ phòng ngủ." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The house looks so ______________ (LOVE) with a beautiful garden.", accepted: ["lovely"], correct: "lovely", explanation: "love (n/v) → lovely (adj, +ly)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The school hall is decorated with many ______________ (COLOR) posters.", accepted: ["colorful", "colourful"], correct: "colorful", explanation: "color (n) → colorful (adj, +ful)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Her bedroom is very ______________ (MESS), so she always cleans it.", accepted: ["messy"], correct: "messy", explanation: "mess (n) → messy (adj, +y)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'bộ sưu tập'?", options: { A: "collection", B: "attic", C: "garage", D: "cottage" }, correct: "A", explanation: "collection (n) = bộ sưu tập." }
  ]
};
