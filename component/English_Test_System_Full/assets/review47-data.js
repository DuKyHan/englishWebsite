const REVIEW = {
  id: "test47",
  testFile: "test47.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 6: A Visit to a School",
  title: "Knowledge Review — Unit 6, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "institution", pos: "n", ipa: "/ˌɪnstɪˈtjuːʃn/", meaning: "cơ sở, tổ chức (giáo dục)", example: "Harvard is the oldest institution of higher education in the United States.", exampleVi: "Harvard là cơ sở giáo dục đại học lâu đời nhất ở Hoa Kỳ." },
    { word: "estate", pos: "n", ipa: "/ɪˈsteɪt/", meaning: "tài sản, bất động sản", example: "John Harvard left his library and half his estate to the institution.", exampleVi: "John Harvard đã để lại thư viện của mình và một nửa tài sản cho ngôi trường." },
    { word: "alumni", pos: "n", ipa: "/əˈlʌmnaɪ/", meaning: "cựu sinh viên (số nhiều)", example: "There are more than 360,000 living alumni in the U.S. and over 190 other countries.", exampleVi: "Có hơn 360.000 cựu sinh viên còn sống ở Mỹ và hơn 190 quốc gia khác." },
    { word: "landmark", pos: "n", ipa: "/ˈlændmɑːrk/", meaning: "địa danh, biểu tượng nổi tiếng", example: "The statue of John Harvard is the University's best known landmark.", exampleVi: "Bức tượng John Harvard là biểu tượng nổi tiếng nhất của trường." },
    { word: "enrolment", pos: "n", ipa: "/ɪnˈroʊlmənt/", meaning: "số lượng ghi danh, tuyển sinh", example: "The University has grown to an enrolment of more than 20,000 degree candidates.", exampleVi: "Trường đã phát triển tới hơn 20.000 sinh viên ghi danh theo học." },
    { word: "candidate", pos: "n", ipa: "/ˈkændɪdət/", meaning: "ứng viên, người theo học", example: "Harvard has more than 20,000 degree candidates, including undergraduate and postgraduate students.", exampleVi: "Harvard có hơn 20.000 sinh viên theo học, bao gồm cả bậc đại học và sau đại học." },
    { word: "billionaire", pos: "n", ipa: "/ˌbɪljəˈner/", meaning: "tỷ phú", example: "Alumni of Harvard include more than thirty foreign heads of state and 62 living billionaires.", exampleVi: "Cựu sinh viên Harvard bao gồm hơn ba mươi nguyên thủ nước ngoài và 62 tỷ phú." },
    { word: "Nobel Prize", pos: "phrase", ipa: "/ˌnoʊbel ˈpraɪz/", meaning: "giải Nobel", example: "Harvard students and alumni have won 158 Nobel Prizes.", exampleVi: "Sinh viên và cựu sinh viên Harvard đã giành được 158 giải Nobel." },
    { word: "found", pos: "v", ipa: "/faʊnd/", meaning: "thành lập, sáng lập", example: "Harvard alumni have founded many companies worldwide.", exampleVi: "Cựu sinh viên Harvard đã thành lập nhiều công ty trên khắp thế giới." },
    { word: "prestigious", pos: "adj", ipa: "/preˈstɪdʒəs/", meaning: "danh tiếng, uy tín", example: "Oxford is one of the most prestigious universities in the world.", exampleVi: "Oxford là một trong những trường đại học danh tiếng nhất thế giới." },
    { word: "division", pos: "n", ipa: "/dɪˈvɪʒn/", meaning: "phân ban, khoa", example: "Oxford's academic departments are organised into four divisions.", exampleVi: "Các khoa học thuật của Oxford được tổ chức thành bốn phân ban." },
    { word: "scholarship", pos: "n", ipa: "/ˈskɒlərʃɪp/", meaning: "học bổng", example: "The Rhodes Scholarship is one of the oldest international graduate scholarship programmes.", exampleVi: "Học bổng Rhodes là một trong những chương trình học bổng sau đại học quốc tế lâu đời nhất." },
    { word: "notable", pos: "adj", ipa: "/ˈnoʊtəbl/", meaning: "đáng chú ý, nổi tiếng", example: "Oxford has educated many notable alumni, including Olympic gold medal winners.", exampleVi: "Oxford đã đào tạo nhiều cựu sinh viên nổi tiếng, gồm cả các nhà vô địch Olympic." },
    { word: "laboratory", pos: "n", ipa: "/ˈlæbrətɔːri/", meaning: "phòng thí nghiệm", example: "Students are doing some scientific tests in the laboratory.", exampleVi: "Các học sinh đang làm một số thí nghiệm khoa học trong phòng thí nghiệm." },
    { word: "uniform", pos: "n", ipa: "/ˈjuːnɪfɔːrm/", meaning: "đồng phục", example: "Students will be punished if they don't wear uniform at school.", exampleVi: "Học sinh sẽ bị phạt nếu không mặc đồng phục ở trường." },
    { word: "kindergarten", pos: "n", ipa: "/ˈkɪndərɡɑːrtn/", meaning: "trường mẫu giáo", example: "My little sister is just 4 years old and she is in kindergarten now.", exampleVi: "Em gái tôi mới 4 tuổi và đang học mẫu giáo." },
    { word: "playground", pos: "n", ipa: "/ˈpleɪɡraʊnd/", meaning: "sân chơi", example: "Our school's new playground is very large.", exampleVi: "Sân chơi mới của trường tôi rất rộng." },
    { word: "classmate", pos: "n", ipa: "/ˈklɑːsmeɪt/", meaning: "bạn cùng lớp", example: "I met an old classmate at the supermarket yesterday.", exampleVi: "Hôm qua tôi gặp một người bạn học cũ ở siêu thị." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'cựu sinh viên':", options: { A: "alumni", B: "teachers", C: "classmates", D: "visitors" }, correct: "A", explanation: "<b>alumni</b> (n) = cựu sinh viên." },
      { id: "vp2", prompt: "\"The statue of John Harvard is the University's best known ______.\"", options: { A: "landmark", B: "estate", C: "division", D: "enrolment" }, correct: "A", explanation: "\"best known <b>landmark</b>\" (địa danh/biểu tượng nổi tiếng nhất) phù hợp khi nói về một bức tượng mang tính biểu tượng." },
      { id: "vp3", prompt: "Choose the word that means 'danh tiếng, uy tín':", options: { A: "prestigious", B: "ordinary", C: "modern", D: "expensive" }, correct: "A", explanation: "<b>prestigious</b> (adj) = danh tiếng, uy tín." },
      { id: "vp4", prompt: "\"Oxford's academic departments are organised into four ______.\"", options: { A: "divisions", B: "scholarships", C: "candidates", D: "estates" }, correct: "A", explanation: "\"organised into four <b>divisions</b>\" (được tổ chức thành bốn phân ban) khớp với nội dung bài đọc." },
      { id: "vp5", prompt: "Choose the word that means 'học bổng':", options: { A: "scholarship", B: "salary", C: "tuition", D: "fee" }, correct: "A", explanation: "<b>scholarship</b> (n) = học bổng." },
      { id: "vp6", prompt: "Choose the word that means 'phòng thí nghiệm':", options: { A: "laboratory", B: "library", C: "canteen", D: "gym" }, correct: "A", explanation: "<b>laboratory</b> (n) = phòng thí nghiệm." }
    ],
    fillblank: [
      { id: "vf1", prompt: "John Harvard left his library and half his ______________ (tài sản) to the institution.", accepted: ["estate"], correct: "estate", explanation: "<b>estate</b> (n) = tài sản, bất động sản." },
      { id: "vf2", prompt: "Harvard students and alumni have won 158 ______________ (giải Nobel).", accepted: ["nobel prizes"], correct: "Nobel Prizes", explanation: "<b>Nobel Prize</b> (phrase) = giải Nobel." },
      { id: "vf3", prompt: "Alumni of Harvard have ______________ (thành lập) many companies worldwide.", accepted: ["founded"], correct: "founded", explanation: "<b>found</b> (v) = thành lập (quá khứ: founded)." },
      { id: "vf4", prompt: "Oxford has educated many ______________ (nổi tiếng) alumni, including Olympic gold medal winners.", accepted: ["notable"], correct: "notable", explanation: "<b>notable</b> (adj) = đáng chú ý, nổi tiếng." },
      { id: "vf5", prompt: "Students will be punished if they don't wear ______________ (đồng phục) at school.", accepted: ["uniform"], correct: "uniform", explanation: "<b>uniform</b> (n) = đồng phục." },
      { id: "vf6", prompt: "I met an old ______________ (bạn cùng lớp) at the supermarket yesterday.", accepted: ["classmate"], correct: "classmate", explanation: "<b>classmate</b> (n) = bạn cùng lớp." }
    ],
    matching: {
      left: ["institution", "billionaire", "division", "kindergarten", "playground", "candidate"],
      right: ["cơ sở, tổ chức (giáo dục)", "tỷ phú", "phân ban, khoa", "trường mẫu giáo", "sân chơi", "ứng viên, người theo học"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The presentation about Oxford University was ______ done by the group.\" (FANTASTIC)", options: { A: "fantastic", B: "fantasy", C: "fantastically", D: "fantasize" }, correct: "C", explanation: "Cần trạng từ bổ nghĩa cho động từ \"done\" → fantastic (adj) → <b>fantastically</b> (adv, +ally)." },
      { id: "cw2", prompt: "\"Students should know the ______ of learning foreign languages early.\" (IMPORTANT)", options: { A: "important", B: "importance", C: "importantly", D: "unimportant" }, correct: "B", explanation: "Cần danh từ sau \"the\" → important (adj) → <b>importance</b> (n, tầm quan trọng)." },
      { id: "cw3", prompt: "\"The city has many ancient buildings and beautiful ______.\" (LANDMARK)", options: { A: "landmark", B: "landmarks", C: "landmarked", D: "landmarking" }, correct: "B", explanation: "Cần danh từ số nhiều sau \"beautiful\" → landmark (n) → <b>landmarks</b> (số nhiều)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'alumni' mean?", options: { A: "cựu sinh viên", B: "giáo viên", C: "hiệu trưởng", D: "tân sinh viên" }, correct: "A", explanation: "alumni (n) = cựu sinh viên." },
      { id: "wm2", prompt: "What does 'prestigious' mean?", options: { A: "danh tiếng, uy tín", B: "bình thường", C: "rẻ tiền", D: "cổ xưa" }, correct: "A", explanation: "prestigious (adj) = danh tiếng, uy tín." },
      { id: "wm3", prompt: "What does 'scholarship' mean?", options: { A: "học bổng", B: "học phí", C: "lương", D: "phụ cấp" }, correct: "A", explanation: "scholarship (n) = học bổng." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The presentation about Oxford University was ______________ (FANTASTIC) done by the group.", accepted: ["fantastically"], correct: "fantastically", explanation: "fantastic (adj) → fantastically (adv)." },
      { id: "wf2", prompt: "Students should know the ______________ (IMPORTANT) of learning foreign languages early.", accepted: ["importance"], correct: "importance", explanation: "important (adj) → importance (n)." },
      { id: "wf3", prompt: "The city has many ancient buildings and beautiful ______________ (LANDMARK).", accepted: ["landmarks"], correct: "landmarks", explanation: "landmark (n) → landmarks (số nhiều)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "S + is/are + more + adj + than + O ⇄ O + isn't/aren't + as + adj + as + S",
      usage: "So sánh hơn \"A + is more + adj + than + B\" (A hơn B) có thể viết lại bằng so sánh ngang bằng dạng phủ định \"B + isn't as + adj + as + A\" (B không bằng A), giữ nguyên nghĩa.",
      formulas: [
        "S1 + is more + adj + than + S2.  →  S2 + isn't as + adj + as + S1.",
        "Your house is more modern than mine. → My house isn't as modern as yours."
      ],
      signals: ["is/are more adj than", "isn't/aren't as adj as"],
      examples: [
        { en: "Your house is more modern than mine.", vi: "Nhà bạn hiện đại hơn nhà tôi." },
        { en: "My house isn't as modern as yours.", vi: "Nhà tôi không hiện đại bằng nhà bạn." }
      ],
      mistakes: [
        { wrong: "My house isn't as modern than yours.", right: "My house isn't as modern as yours. (dùng \"as...as\" chứ không phải \"as...than\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "This school is bigger than that one. → That school isn't ______________ (as big as) this one.", accepted: ["as big as"], correct: "as big as", explanation: "S is more adj than O → O isn't as adj as S." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'The new library is more modern than the old one.' → The old one isn't ______________ (as modern as) the new library.", accepted: ["as modern as"], correct: "as modern as", explanation: "S is more adj than O → O isn't as adj as S." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Her classroom is larger than mine.' → ______________ (Mine isn't as large as hers).", accepted: ["mine isn't as large as hers"], correct: "Mine isn't as large as hers", explanation: "S is more adj than O → O isn't as adj as S." }
        ]
      }
    },
    {
      id: "g2", name: "S + isn't/aren't as + adj + as + O ⇄ O + is/are + adj-er + than + S",
      usage: "So sánh ngang bằng dạng phủ định \"A + isn't as + adj + as + B\" (A không bằng B) có thể viết lại bằng so sánh hơn \"B + is + adj-er + than + A\" (B hơn A), giữ nguyên nghĩa.",
      formulas: [
        "S1 + isn't as + adj + as + S2.  →  S2 + is + adj-er + than + S1.",
        "Los Angeles is not as big as New York. → New York is bigger than Los Angeles."
      ],
      signals: ["isn't/aren't as adj as", "is/are adj-er than"],
      examples: [
        { en: "In population, Los Angeles is not as big as New York.", vi: "Về dân số, Los Angeles không lớn bằng New York." },
        { en: "New York is bigger than Los Angeles in population.", vi: "Về dân số, New York lớn hơn Los Angeles." }
      ],
      mistakes: [
        { wrong: "New York is more bigger than Los Angeles.", right: "New York is bigger than Los Angeles. (không dùng \"more\" cùng lúc với đuôi \"-er\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "This town isn't as busy as the city. → The city is ______________ (busier) than this town.", accepted: ["busier"], correct: "busier", explanation: "S isn't as adj as O → O is adj-er than S." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'My bag isn't as heavy as yours.' → Your bag is ______________ (heavier) than mine.", accepted: ["heavier"], correct: "heavier", explanation: "S isn't as adj as O → O is adj-er than S." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'This exam isn't as difficult as the final one.' → ______________ (The final one is more difficult than this exam).", accepted: ["the final one is more difficult than this exam"], correct: "The final one is more difficult than this exam", explanation: "S isn't as adj as O → O is more adj than S." }
        ]
      }
    },
    {
      id: "g3", name: "S + V + adv (well) ⇄ S + be + good at + V-ing",
      usage: "\"S + V + well\" (làm gì giỏi) có thể viết lại bằng \"S + be + good at + V-ing\", giữ nguyên nghĩa về khả năng.",
      formulas: [
        "S + V(s) + adv (well).  →  S + is/am/are + good at + V-ing.",
        "Mary plays the piano very well. → Mary is good at playing the piano."
      ],
      signals: ["V + well", "be good at + V-ing"],
      examples: [
        { en: "Mary plays the piano very well.", vi: "Mary chơi piano rất giỏi." },
        { en: "Mary is good at playing the piano.", vi: "Mary chơi piano rất giỏi." }
      ],
      mistakes: [
        { wrong: "Mary is good at play the piano.", right: "Mary is good at playing the piano. (cần V-ing sau \"good at\", không dùng động từ nguyên thể)" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "Tom draws very well. → Tom is good ______________ (at drawing).", accepted: ["at drawing"], correct: "at drawing", explanation: "V + well → be good at + V-ing." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'She sings very well.' → She is good ______________ (at singing).", accepted: ["at singing"], correct: "at singing", explanation: "V + well → be good at + V-ing." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He plays badminton very well.' → ______________ (He is good at playing badminton).", accepted: ["he is good at playing badminton"], correct: "He is good at playing badminton", explanation: "V + well → be good at + V-ing." }
        ]
      }
    },
    {
      id: "g4", name: "Two things are different (but) ⇄ be a different N from + N",
      usage: "Hai sự vật khác nhau nêu bằng liên từ \"but\" có thể viết lại bằng cấu trúc \"S + be + a different + N + from + N\" (khác ... so với), giữ nguyên nghĩa.",
      formulas: [
        "S1 + is + adj1, but + S2 + is + adj2.  →  S1 + is + a different + N + from + S2.",
        "Your painting is green, but my painting is red. → My painting is a different color from yours."
      ],
      signals: ["..., but...", "be a different N from"],
      examples: [
        { en: "Your painting is green, but my painting is red.", vi: "Tranh của bạn màu xanh lá, còn tranh của tôi màu đỏ." },
        { en: "My painting is a different color from yours.", vi: "Tranh của tôi có màu khác với tranh của bạn." }
      ],
      mistakes: [
        { wrong: "My painting is a different color than yours.", right: "My painting is a different color from yours. (dùng giới từ \"from\" sau \"different\", không dùng \"than\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "Your bag is small, but my bag is big. → My bag is a different size ______________ (from) yours.", accepted: ["from"], correct: "from", explanation: "be a different N from + N." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'His shirt is blue, but her shirt is yellow.' → Her shirt is a different color ______________ (from) his.", accepted: ["from"], correct: "from", explanation: "be a different N from + N." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'My school uniform is white, but their school uniform is blue.' → ______________ (My school uniform is a different color from theirs).", accepted: ["my school uniform is a different color from theirs"], correct: "My school uniform is a different color from theirs", explanation: "be a different N from + N." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) Present Perfect for records & achievements",
      usage: "Thì hiện tại hoàn thành \"S + have/has + V3\" được dùng để nói về những thành tích, kỷ lục tính đến thời điểm hiện tại, không nhấn mạnh thời gian cụ thể xảy ra.",
      formulas: [
        "S + have/has + V3 (+ O).",
        "Harvard students and alumni have won 158 Nobel Prizes."
      ],
      signals: ["have/has + V3", "so far", "up to now (ngầm hiểu)"],
      examples: [
        { en: "Harvard students and alumni have won 158 Nobel Prizes, 10 Academy Awards, 48 Pulitzer Prizes.", vi: "Sinh viên và cựu sinh viên Harvard đã giành được 158 giải Nobel, 10 giải Oscar, 48 giải Pulitzer." },
        { en: "Alumni of Harvard have founded many companies worldwide.", vi: "Cựu sinh viên Harvard đã thành lập nhiều công ty trên khắp thế giới." }
      ],
      mistakes: [
        { wrong: "Harvard students have win 158 Nobel Prizes.", right: "Harvard students have won 158 Nobel Prizes. (cần dùng V3/V-ed sau \"have/has\", không dùng dạng nguyên thể)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "Our school (win) ______________ (has won) many prizes in sports competitions so far.", accepted: ["has won"], correct: "has won", explanation: "S + have/has + V3 diễn tả thành tích tính đến hiện tại." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite using present perfect: 'The university opens many new departments.' (up to now) → The university ______________ (has opened) many new departments.", accepted: ["has opened"], correct: "has opened", explanation: "S + have/has + V3 diễn tả thành tích tính đến hiện tại." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete with the correct form: 'Our alumni ______________ (found) more than 100 companies so far.' (found)", accepted: ["have founded"], correct: "have founded", explanation: "S (số nhiều) + have + V3." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "The University of Oxford is located in Oxford, England. <mark data-w=\"It is the oldest university in the English-speaking world and the world's second oldest university\">It is the oldest university in the English-speaking world and the world's second oldest university</mark>. The oldest one is the University of Bologna in Italy. The history and influence of the University of Oxford have made it one of the most prestigious universities in the world. <mark data-w=\"The university is made up of 39 colleges and a range of academic departments, which are organised into four divisions\">The university is made up of 39 colleges and a range of academic departments, which are organised into four divisions</mark>. They are the Humanities Division; the Social Sciences Division; the Mathematical, Physical and Life Sciences Division; and the Medical Sciences Division. <mark data-w=\"It operates the world's oldest university museum, as well as the largest university press in the world\">It operates the world's oldest university museum, as well as the largest university press in the world</mark>. The university is considered as among the best higher learning institutions. Students come to Oxford from more than 150 countries and territories. <mark data-w=\"Oxford has educated many notable alumni, including 160 Olympic gold medal winners, 69 Nobel Prize winners, 28 prime ministers of the United Kingdom\">Oxford has educated many notable alumni, including 160 Olympic gold medal winners, 69 Nobel Prize winners, 28 prime ministers of the United Kingdom</mark> and many heads of state and government around the world. <mark data-w=\"Oxford is the home of numerous scholarships, including the Rhodes Scholarship, which is one of the oldest international graduate scholarship programmes\">Oxford is the home of numerous scholarships, including the Rhodes Scholarship, which is one of the oldest international graduate scholarship programmes</mark>.",
    vocabInContext: {
      "It is the oldest university in the English-speaking world and the world's second oldest university": "đây là trường đại học lâu đời nhất trong thế giới nói tiếng Anh và lâu đời thứ hai trên thế giới",
      "The university is made up of 39 colleges and a range of academic departments, which are organised into four divisions": "trường được tạo thành từ 39 trường thành viên và nhiều khoa học thuật, được tổ chức thành bốn phân ban",
      "It operates the world's oldest university museum, as well as the largest university press in the world": "trường vận hành bảo tàng đại học lâu đời nhất thế giới, cũng như nhà xuất bản đại học lớn nhất thế giới",
      "Oxford has educated many notable alumni, including 160 Olympic gold medal winners, 69 Nobel Prize winners, 28 prime ministers of the United Kingdom": "Oxford đã đào tạo nhiều cựu sinh viên nổi tiếng, gồm 160 nhà vô địch Olympic, 69 người đoạt giải Nobel, 28 thủ tướng Vương quốc Anh",
      "Oxford is the home of numerous scholarships, including the Rhodes Scholarship, which is one of the oldest international graduate scholarship programmes": "Oxford là nơi có nhiều học bổng, bao gồm học bổng Rhodes, một trong những chương trình học bổng sau đại học quốc tế lâu đời nhất"
    },
    translation: "<b>ĐẠI HỌC OXFORD</b><br><br>Đại học Oxford tọa lạc tại Oxford, nước Anh. Đây là trường đại học lâu đời nhất trong thế giới nói tiếng Anh và lâu đời thứ hai trên thế giới. Trường lâu đời nhất là Đại học Bologna ở Ý. Lịch sử và tầm ảnh hưởng của Đại học Oxford đã khiến nó trở thành một trong những trường đại học danh tiếng nhất thế giới. Trường được tạo thành từ 39 trường thành viên và nhiều khoa học thuật, được tổ chức thành bốn phân ban. Đó là Phân ban Nhân văn; Phân ban Khoa học Xã hội; Phân ban Toán học, Vật lý và Khoa học Sự sống; và Phân ban Khoa học Y tế. Trường vận hành bảo tàng đại học lâu đời nhất thế giới, cũng như nhà xuất bản đại học lớn nhất thế giới. Trường được xem là một trong những cơ sở giáo dục bậc cao tốt nhất. Sinh viên đến Oxford từ hơn 150 quốc gia và vùng lãnh thổ. Oxford đã đào tạo nhiều cựu sinh viên nổi tiếng, gồm 160 nhà vô địch Olympic, 69 người đoạt giải Nobel, 28 thủ tướng Vương quốc Anh và nhiều nguyên thủ, người đứng đầu chính phủ trên khắp thế giới. Oxford là nơi có nhiều học bổng, bao gồm học bổng Rhodes, một trong những chương trình học bổng sau đại học quốc tế lâu đời nhất.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "The University of Oxford is the oldest university in the world.", correct: "False", explanation: "Sai. Bài đọc: \"It is the oldest university in the English-speaking world and the world's second oldest university. The oldest one is the University of Bologna in Italy.\"" },
      { id: "r2", type: "truefalse", prompt: "Oxford has four academic divisions.", correct: "True", explanation: "Đúng. Bài đọc: \"which are organised into four divisions.\"" },
      { id: "r3", type: "truefalse", prompt: "Only British students can study at the University of Oxford.", correct: "False", explanation: "Sai. Bài đọc: \"Students come to Oxford from more than 150 countries and territories.\"" },
      { id: "r4", type: "truefalse", prompt: "The University of Oxford has the largest university press in the world.", correct: "True", explanation: "Đúng. Bài đọc: \"as well as the largest university press in the world.\"" },
      { id: "r5", type: "mcq", prompt: "Where is the University of Bologna?", options: { A: "In Italy", B: "In England", C: "In Oxford", D: "In the United Kingdom" }, correct: "A", explanation: "Bài đọc: \"The oldest one is the University of Bologna in Italy.\"" },
      { id: "r6", type: "mcq", prompt: "How many United Kingdom prime ministers studied at Oxford?", options: { A: "28", B: "39", C: "69", D: "160" }, correct: "A", explanation: "Bài đọc: \"28 prime ministers of the United Kingdom.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the number in the passage that tells how many colleges make up the University of Oxford.", accepted: ["39"], correct: "39", explanation: "\"The university is made up of 39 colleges...\"" },
      { id: "r8", type: "mcq", prompt: "What is the Rhodes Scholarship?", options: { A: "One of the oldest international graduate scholarship programmes.", B: "A prize given only to Nobel Prize winners.", C: "A scholarship only for Olympic athletes.", D: "A scholarship only for UK citizens." }, correct: "A", explanation: "Bài đọc: \"the Rhodes Scholarship, which is one of the oldest international graduate scholarship programmes.\"" },
      { id: "r9", type: "truefalse", prompt: "Oxford only operates a university museum and has no publishing activity.", correct: "False", explanation: "Sai. Bài đọc: \"It operates the world's oldest university museum, as well as the largest university press in the world.\" — trường còn có nhà xuất bản." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "The University of Oxford is the oldest university in the English-speaking world.", suggested: "Đại học Oxford là trường đại học lâu đời nhất trong thế giới nói tiếng Anh.", notes: "\"the oldest + N\" (... lâu đời/cổ nhất) — so sánh nhất." },
    { id: "t2", en: "The university is made up of 39 colleges and a range of academic departments.", suggested: "Trường được tạo thành từ 39 trường thành viên và nhiều khoa học thuật.", notes: "\"be made up of + N\" (được tạo thành từ) — cấu trúc bị động." },
    { id: "t3", en: "It operates the largest university press in the world.", suggested: "Trường vận hành nhà xuất bản đại học lớn nhất thế giới.", notes: "\"operate + N\" (vận hành, điều hành)." },
    { id: "t4", en: "Oxford has educated many notable alumni, including Nobel Prize winners.", suggested: "Oxford đã đào tạo nhiều cựu sinh viên nổi tiếng, gồm cả những người đoạt giải Nobel.", notes: "\"including + N\" (bao gồm) để liệt kê ví dụ." },
    { id: "t5", en: "Oxford is the home of numerous scholarships, including the Rhodes Scholarship.", suggested: "Oxford là nơi có nhiều học bổng, bao gồm học bổng Rhodes.", notes: "\"be the home of + N\" (là nơi có) — cách diễn đạt trang trọng." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "S + is more + adj + than + O ⇄ O isn't as + adj + as + S",
      formula: "S1 + is more + adj + than + S2.  →  S2 + isn't as + adj + as + S1.",
      example: { before: "Your house is more modern than mine.", after: "My house isn't as modern as yours." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "This school is bigger than that one. → That school isn't ______________ (as big as) this one.", accepted: ["as big as"], correct: "as big as", explanation: "S is more adj than O → O isn't as adj as S." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'The new library is more modern than the old one.' → The old one isn't ______________ (as modern as) the new library.", accepted: ["as modern as"], correct: "as modern as", explanation: "S is more adj than O → O isn't as adj as S." }
      ]
    },
    {
      id: "tr2", name: "S isn't as + adj + as + O ⇄ O is + adj-er + than + S",
      formula: "S1 + isn't as + adj + as + S2.  →  S2 + is + adj-er + than + S1.",
      example: { before: "Los Angeles is not as big as New York.", after: "New York is bigger than Los Angeles." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "This town isn't as busy as the city. → The city is ______________ (busier) than this town.", accepted: ["busier"], correct: "busier", explanation: "S isn't as adj as O → O is adj-er than S." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'My bag isn't as heavy as yours.' → Your bag is ______________ (heavier) than mine.", accepted: ["heavier"], correct: "heavier", explanation: "S isn't as adj as O → O is adj-er than S." }
      ]
    },
    {
      id: "tr3", name: "S + V + well ⇄ S + be + good at + V-ing",
      formula: "S + V(s) + well.  →  S + is/am/are + good at + V-ing.",
      example: { before: "Mary plays the piano very well.", after: "Mary is good at playing the piano." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "Tom draws very well. → Tom is good ______________ (at drawing).", accepted: ["at drawing"], correct: "at drawing", explanation: "V + well → be good at + V-ing." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'She sings very well.' → She is good ______________ (at singing).", accepted: ["at singing"], correct: "at singing", explanation: "V + well → be good at + V-ing." }
      ]
    },
    {
      id: "tr4", name: "..., but... ⇄ be a different N from + N",
      formula: "S1 + is + adj1, but + S2 + is + adj2.  →  S1 + is + a different + N + from + S2.",
      example: { before: "Your painting is green, but my painting is red.", after: "My painting is a different color from yours." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "Your bag is small, but my bag is big. → My bag is a different size ______________ (from) yours.", accepted: ["from"], correct: "from", explanation: "be a different N from + N." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'His shirt is blue, but her shirt is yellow.' → Her shirt is a different color ______________ (from) his.", accepted: ["from"], correct: "from", explanation: "be a different N from + N." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Alumni' means:", options: { A: "cựu sinh viên", B: "giáo viên", C: "hiệu trưởng", D: "tân sinh viên" }, correct: "A", explanation: "alumni (n) = cựu sinh viên." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Prestigious' means:", options: { A: "danh tiếng, uy tín", B: "bình thường", C: "rẻ tiền", D: "cổ xưa" }, correct: "A", explanation: "prestigious (adj) = danh tiếng, uy tín." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "I met an old ______________ (bạn cùng lớp) at the supermarket yesterday.", accepted: ["classmate"], correct: "classmate", explanation: "classmate (n) = bạn cùng lớp." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Your house is more modern than mine. → My house isn't ______ modern as yours.", options: { A: "as", B: "so", C: "than", D: "more" }, correct: "A", explanation: "isn't as + adj + as." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Los Angeles is not as big as New York. → New York is ______ than Los Angeles.", options: { A: "bigger", B: "biggest", C: "big", D: "more big" }, correct: "A", explanation: "O isn't as adj as S → S is adj-er than O." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Mary plays the piano very well. → Mary is good ______________ (at playing) the piano.", accepted: ["at playing"], correct: "at playing", explanation: "V + well → be good at + V-ing." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Our school has ______________ (win) many prizes so far. (win)", accepted: ["won"], correct: "won", explanation: "have/has + V3 diễn tả thành tích tính đến hiện tại." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "The University of Oxford is the oldest university in the world.", correct: "False", explanation: "Sai theo bài đọc — Oxford lâu đời thứ hai, Bologna mới là trường lâu đời nhất." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Only British students can study at the University of Oxford.", correct: "False", explanation: "Sai theo bài đọc — sinh viên đến từ hơn 150 quốc gia và vùng lãnh thổ." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Where is the University of Bologna?", options: { A: "In Italy", B: "In England", C: "In Oxford", D: "In the United Kingdom" }, correct: "A", explanation: "Bài đọc nêu rõ Bologna ở Ý." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The presentation about Oxford University was ______________ (FANTASTIC) done by the group.", accepted: ["fantastically"], correct: "fantastically", explanation: "fantastic (adj) → fantastically (adv)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Students should know the ______________ (IMPORTANT) of learning foreign languages early.", accepted: ["importance"], correct: "importance", explanation: "important (adj) → importance (n)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The city has many ancient buildings and beautiful ______________ (LANDMARK).", accepted: ["landmarks"], correct: "landmarks", explanation: "landmark (n) → landmarks (số nhiều)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'học bổng'?", options: { A: "scholarship", B: "tuition", C: "salary", D: "fee" }, correct: "A", explanation: "scholarship (n) = học bổng." }
  ]
};
