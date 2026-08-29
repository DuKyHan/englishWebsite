const REVIEW = {
  id: "test08",
  testFile: "test08.html",
  grade: "Grade 8 — Global Success",
  unit: "Unit 1: Leisure time",
  title: "Knowledge Review — Unit 1, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "cultural", pos: "adj", ipa: "/ˈkʌltʃərəl/", meaning: "thuộc về văn hóa", example: "Cultural differences can cause misunderstandings between people.", exampleVi: "Sự khác biệt văn hóa có thể gây ra hiểu lầm giữa mọi người." },
    { word: "satisfied", pos: "adj", ipa: "/ˈsætɪsfaɪd/", meaning: "hài lòng", example: "I'm still not satisfied with the final result of my DIY project.", exampleVi: "Tôi vẫn chưa hài lòng với kết quả cuối cùng của dự án tự làm của mình." },
    { word: "DIY", pos: "n/adj", ipa: "/ˌdiː aɪ ˈwaɪ/", meaning: "tự làm (do-it-yourself)", example: "I spent hours on a DIY project last weekend.", exampleVi: "Tôi đã dành hàng giờ cho một dự án tự làm vào cuối tuần trước." },
    { word: "aerobics", pos: "n", ipa: "/eəˈroʊbɪks/", meaning: "thể dục nhịp điệu", example: "You should start doing aerobics 30 minutes a day to stay healthy.", exampleVi: "Bạn nên bắt đầu tập thể dục nhịp điệu 30 phút mỗi ngày để giữ sức khỏe." },
    { word: "flexibility", pos: "n", ipa: "/ˌfleksəˈbɪləti/", meaning: "sự linh hoạt, dẻo dai", example: "Doing aerobics helps improve your full-body flexibility.", exampleVi: "Tập thể dục nhịp điệu giúp cải thiện độ dẻo dai toàn thân." },
    { word: "dacha", pos: "n", ipa: "/ˈdætʃə/", meaning: "nhà nghỉ ở nông thôn (kiểu Nga)", example: "In Russia, people like to get away to dachas in the countryside.", exampleVi: "Ở Nga, người dân thích đến các dacha ở vùng nông thôn để nghỉ ngơi." },
    { word: "outskirts", pos: "n", ipa: "/ˈaʊtskɜːrts/", meaning: "ngoại ô", example: "Dachas are typically found on the outskirts of cities and towns.", exampleVi: "Các dacha thường được tìm thấy ở ngoại ô các thành phố và thị trấn." },
    { word: "sauna", pos: "n", ipa: "/ˈsɔːnə/", meaning: "phòng xông hơi", example: "Frequenting saunas and hot tubs is a famous German pastime.", exampleVi: "Thường xuyên đến phòng xông hơi và bồn tắm nước nóng là một thú tiêu khiển nổi tiếng của người Đức." },
    { word: "theatre", pos: "n", ipa: "/ˈθiːətər/", meaning: "nhà hát", example: "The British prefer gardening, swimming, and going to the theatre.", exampleVi: "Người Anh thích làm vườn, bơi lội và đi xem kịch ở nhà hát." },
    { word: "showerhead", pos: "n", ipa: "/ˈʃaʊərhed/", meaning: "vòi hoa sen", example: "The showerhead is usually mounted on the wall and cannot be moved.", exampleVi: "Vòi hoa sen thường được gắn cố định trên tường và không thể di chuyển." },
    { word: "soothing", pos: "adj", ipa: "/ˈsuːðɪŋ/", meaning: "êm dịu, làm dịu", example: "Many adults enjoy a soothing bath to get rid of stress.", exampleVi: "Nhiều người lớn thích một bồn tắm êm dịu để xả stress." },
    { word: "rinse off", pos: "phr v", ipa: "/rɪns ɒf/", meaning: "xả nước, tráng lại", example: "The bather scrubs with soap and then rinses off.", exampleVi: "Người tắm kỳ cọ với xà phòng rồi xả nước lại." },
    { word: "mop", pos: "n/v", ipa: "/mɒp/", meaning: "cây lau nhà / lau bằng cây lau nhà", example: "Water on the floor must be cleaned up with a towel or mop.", exampleVi: "Nước trên sàn phải được lau sạch bằng khăn hoặc cây lau nhà." },
    { word: "drain", pos: "n", ipa: "/dreɪn/", meaning: "lỗ thoát nước", example: "There is no drain in the floor of American bathrooms.", exampleVi: "Sàn phòng tắm ở Mỹ không có lỗ thoát nước." },
    { word: "impressive", pos: "adj", ipa: "/ɪmˈpresɪv/", meaning: "ấn tượng", example: "The students gave an impressive presentation.", exampleVi: "Các học sinh đã có một bài thuyết trình ấn tượng." },
    { word: "beneficial", pos: "adj", ipa: "/ˌbenɪˈfɪʃl/", meaning: "có lợi", example: "Regular physical activities are highly beneficial to your health.", exampleVi: "Hoạt động thể chất thường xuyên rất có lợi cho sức khỏe của bạn." },
    { word: "satisfaction", pos: "n", ipa: "/ˌsætɪsˈfækʃn/", meaning: "sự hài lòng, thỏa mãn", example: "She felt complete satisfaction after finishing her first DIY project.", exampleVi: "Cô bé cảm thấy hoàn toàn hài lòng sau khi hoàn thành dự án tự làm đầu tiên của mình." },
    { word: "pastime", pos: "n", ipa: "/ˈpæstaɪm/", meaning: "thú tiêu khiển, sở thích lúc rảnh", example: "Watching television is still the nation's favorite pastime.", exampleVi: "Xem ti vi vẫn là thú tiêu khiển yêu thích nhất của cả nước." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'thể dục nhịp điệu':", options: { A: "aerobics", B: "flexibility", C: "sauna", D: "pastime" }, correct: "A", explanation: "<b>aerobics</b> (n) = thể dục nhịp điệu." },
      { id: "vp2", prompt: "Choose the word that means 'ngoại ô':", options: { A: "theatre", B: "outskirts", C: "dacha", D: "drain" }, correct: "B", explanation: "<b>outskirts</b> (n) = ngoại ô." },
      { id: "vp3", prompt: "Choose the best word: \"The ______ is usually mounted on the wall and cannot be moved.\"", options: { A: "mop", B: "drain", C: "showerhead", D: "sauna" }, correct: "C", explanation: "\"<b>showerhead</b> mounted on the wall\" (vòi hoa sen gắn trên tường)." },
      { id: "vp4", prompt: "Choose the word that means 'hài lòng':", options: { A: "beneficial", B: "impressive", C: "satisfied", D: "soothing" }, correct: "C", explanation: "<b>satisfied</b> (adj) = hài lòng." },
      { id: "vp5", prompt: "\"Many adults enjoy a ______ bath to get rid of stress.\"", options: { A: "soothing", B: "impressive", C: "beneficial", D: "cultural" }, correct: "A", explanation: "\"a <b>soothing</b> bath\" (một bồn tắm êm dịu) giúp thư giãn." },
      { id: "vp6", prompt: "Choose the word that means 'lỗ thoát nước':", options: { A: "mop", B: "drain", C: "showerhead", D: "dacha" }, correct: "B", explanation: "<b>drain</b> (n) = lỗ thoát nước." }
    ],
    fillblank: [
      { id: "vf1", prompt: "In Russia, people like to get away to ______________ (nhà nghỉ nông thôn) in the countryside.", accepted: ["dachas"], correct: "dachas", explanation: "<b>dacha</b> (n, số nhiều: dachas) = nhà nghỉ ở nông thôn kiểu Nga." },
      { id: "vf2", prompt: "The British prefer gardening, swimming, and going to the ______________ (nhà hát).", accepted: ["theatre", "theater"], correct: "theatre", explanation: "<b>theatre</b> (n) = nhà hát." },
      { id: "vf3", prompt: "Water on the floor must be cleaned up with a towel or ______________ (cây lau nhà).", accepted: ["mop"], correct: "mop", explanation: "<b>mop</b> (n) = cây lau nhà." },
      { id: "vf4", prompt: "Doing aerobics helps improve your full-body ______________ (sự linh hoạt, dẻo dai).", accepted: ["flexibility"], correct: "flexibility", explanation: "<b>flexibility</b> (n) = sự linh hoạt, dẻo dai." },
      { id: "vf5", prompt: "The young girl felt complete ______________ (sự hài lòng) after finishing her first DIY project.", accepted: ["satisfaction"], correct: "satisfaction", explanation: "<b>satisfaction</b> (n) = sự hài lòng, thỏa mãn." },
      { id: "vf6", prompt: "Frequenting ______________ (phòng xông hơi) and hot tubs is a famous German pastime.", accepted: ["saunas"], correct: "saunas", explanation: "<b>sauna</b> (n, số nhiều: saunas) = phòng xông hơi." }
    ],
    matching: {
      left: ["cultural", "aerobics", "outskirts", "soothing", "impressive", "pastime"],
      right: ["thuộc về văn hóa", "thể dục nhịp điệu", "ngoại ô", "êm dịu, làm dịu", "ấn tượng", "thú tiêu khiển"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"I'm still not ______ with the final result of my DIY project.\" (SATISFY)", options: { A: "satisfy", B: "satisfying", C: "satisfied", D: "satisfaction" }, correct: "C", explanation: "Cần tính từ sau \"be\" → satisfy (v) → <b>satisfied</b> (adj)." },
      { id: "cw2", prompt: "\"The teacher was pleased because the students gave an ______ presentation.\" (IMPRESS)", options: { A: "impress", B: "impressed", C: "impressive", D: "impression" }, correct: "C", explanation: "Cần tính từ đứng trước danh từ \"presentation\" → impress (v) → <b>impressive</b> (adj)." },
      { id: "cw3", prompt: "\"Regular physical activities are highly ______ to your health.\" (BENEFIT)", options: { A: "benefit", B: "benefited", C: "beneficial", D: "beneficially" }, correct: "C", explanation: "Cần tính từ đứng sau \"highly\" → benefit (n/v) → <b>beneficial</b> (adj)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'outskirts' mean?", options: { A: "trung tâm thành phố", B: "ngoại ô", C: "nông trại", D: "bến cảng" }, correct: "B", explanation: "outskirts (n) = ngoại ô." },
      { id: "wm2", prompt: "What does 'soothing' mean?", options: { A: "ồn ào, náo nhiệt", B: "êm dịu, làm dịu", C: "nguy hiểm", D: "đắt đỏ" }, correct: "B", explanation: "soothing (adj) = êm dịu, làm dịu." },
      { id: "wm3", prompt: "What does 'pastime' mean?", options: { A: "thú tiêu khiển", B: "công việc", C: "kỳ nghỉ", D: "môn học" }, correct: "A", explanation: "pastime (n) = thú tiêu khiển, sở thích lúc rảnh." }
    ],
    wordForm: [
      { id: "wf1", prompt: "Many people believe that learning about different (CULTURE) ______________ traditions is exciting.", accepted: ["cultural"], correct: "cultural", explanation: "Cần tính từ trước \"traditions\" → culture (n) → <b>cultural</b> (adj)." },
      { id: "wf2", prompt: "(SURPRISE) ______________, some people find making crafts boring.", accepted: ["Surprisingly", "surprisingly"], correct: "Surprisingly", explanation: "Cần trạng từ đầu câu → surprise (v/n) → <b>surprisingly</b> (adv)." },
      { id: "wf3", prompt: "Doing exercises daily will help you (STRONG) ______________ your bones.", accepted: ["strengthen"], correct: "strengthen", explanation: "Cần động từ nguyên mẫu → strong (adj) → <b>strengthen</b> (v)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "find sth + adj ⇄ not be interested in / keen on / fond of + N/V-ing",
      usage: "Khi ai đó \"find sth + adj\" (thấy điều gì đó như thế nào) và tính từ mang nghĩa tiêu cực/nhàm chán, ta có thể diễn đạt lại bằng \"not be interested in / keen on / fond of + N/V-ing\" (không thích, không hứng thú với).",
      formulas: [
        "S + find(s) + O + boring/dull.  →  S + is/am/are + not interested in / keen on / fond of + V-ing.",
        "Julie finds making crafts boring. → Julie is not interested in making crafts."
      ],
      signals: ["find sth boring", "not interested in / keen on / fond of"],
      examples: [
        { en: "Julie finds making crafts boring.", vi: "Julie thấy việc làm đồ thủ công thật nhàm chán." },
        { en: "Julie is not interested in making crafts.", vi: "Julie không hứng thú với việc làm đồ thủ công." }
      ],
      mistakes: [
        { wrong: "Julie is not interested in make crafts.", right: "Julie is not interested in making crafts." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "Nam finds playing chess boring. → Nam is not ______________ (keen) playing chess.", accepted: ["keen on"], correct: "keen on", explanation: "find sth boring → not be keen on + V-ing." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'My brother finds gardening dull.' → My brother is not ______________ (fond) gardening.", accepted: ["fond of"], correct: "fond of", explanation: "find sth dull → not be fond of + V-ing." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Lan finds collecting stamps boring.' → Lan ______________ (is not interested in collecting stamps).", accepted: ["is not interested in collecting stamps"], correct: "is not interested in collecting stamps", explanation: "find sth boring → not be interested in + V-ing." }
        ]
      }
    },
    {
      id: "g2", name: "prefer A to B ⇄ like A more than B",
      usage: "\"prefer A to B\" (thích A hơn B) có thể diễn đạt lại bằng \"like A more than B\" — cùng thể hiện sự so sánh sở thích giữa hai lựa chọn.",
      formulas: [
        "S + prefer(s) + A + to + B.  →  S + like(s) + A + more than + B.",
        "My sister prefers watching Korean dramas to watching Indian dramas. → My sister likes watching Korean dramas more than watching Indian dramas."
      ],
      signals: ["prefer A to B", "like A more than B"],
      examples: [
        { en: "My sister prefers watching Korean dramas to watching Indian dramas.", vi: "Chị tôi thích xem phim Hàn hơn phim Ấn Độ." },
        { en: "My sister likes watching Korean dramas more than watching Indian dramas.", vi: "Chị tôi thích xem phim Hàn hơn là xem phim Ấn Độ." }
      ],
      mistakes: [
        { wrong: "My sister prefers watching Korean dramas than watching Indian dramas.", right: "My sister prefers watching Korean dramas to watching Indian dramas." }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "He prefers football to basketball. → He likes football ______________ (more) basketball.", accepted: ["more than"], correct: "more than", explanation: "prefer A to B → like A more than B." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'They prefer reading books to watching TV.' → They ______________ (like reading books more than watching TV).", accepted: ["like reading books more than watching tv"], correct: "like reading books more than watching TV", explanation: "prefer A to B → like A more than B." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'We prefer swimming to jogging in summer.' → We ______________ (like swimming more than jogging in summer).", accepted: ["like swimming more than jogging in summer"], correct: "like swimming more than jogging in summer", explanation: "prefer A to B → like A more than B." }
        ]
      }
    },
    {
      id: "g3", name: "would rather V1 than V2 ⇄ prefer V-ing to V-ing",
      usage: "\"would rather V1 than V2\" (thích làm gì hơn) có thể diễn đạt lại bằng \"prefer V-ing to V-ing\" — cả hai đều so sánh hai hành động và chọn hành động được ưu tiên hơn.",
      formulas: [
        "S + would rather + V1 (bare) + than + V2 (bare).  →  S + prefer(s) + V1-ing + to + V2-ing.",
        "I would rather surf the Internet than play computer games. → I prefer surfing the Internet to playing computer games."
      ],
      signals: ["would rather V1 than V2", "prefer V-ing to V-ing"],
      examples: [
        { en: "I would rather surf the Internet than play computer games in my free time.", vi: "Tôi thích lướt Internet hơn là chơi game vào thời gian rảnh." },
        { en: "I prefer surfing the Internet to playing computer games in my free time.", vi: "Tôi thích lướt Internet hơn chơi game vào thời gian rảnh." }
      ],
      mistakes: [
        { wrong: "I prefer to surf the Internet than to play computer games.", right: "I prefer surfing the Internet to playing computer games." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "She would rather go to the cinema than stay at home. → She prefers ______________ (go) to the cinema to staying at home.", accepted: ["going"], correct: "going", explanation: "would rather V1 than V2 → prefer V1-ing to V2-ing." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'We would rather do aerobics than run in the park.' → We ______________ (prefer doing aerobics to running in the park).", accepted: ["prefer doing aerobics to running in the park"], correct: "prefer doing aerobics to running in the park", explanation: "would rather V1 than V2 → prefer V1-ing to V2-ing." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He would rather take a shower than take a bath.' → He ______________ (prefer taking a shower to taking a bath).", accepted: ["prefers taking a shower to taking a bath"], correct: "prefers taking a shower to taking a bath", explanation: "would rather V1 than V2 → prefer V1-ing to V2-ing." }
        ]
      }
    },
    {
      id: "g4", name: "What do you do in your free time? ⇄ What is your favourite pastime?",
      usage: "Câu hỏi \"What do/does + S + do + in + possessive + free time?\" (Bạn thường làm gì lúc rảnh?) có thể diễn đạt lại ngắn gọn bằng danh từ \"favourite pastime\" hoặc \"favourite free-time activity\" (sở thích/hoạt động yêu thích lúc rảnh) trong câu hỏi \"What is + possessive + favourite pastime/free-time activity?\"",
      formulas: [
        "What do/does + S + do + in + possessive + free time?  →  What is + possessive + favourite pastime / free-time activity?",
        "What do you often do in your free time? → What is your favourite pastime?"
      ],
      signals: ["What do you do in your free time?", "What is your favourite pastime?"],
      examples: [
        { en: "What do you often do in your free time?", vi: "Bạn thường làm gì vào thời gian rảnh?" },
        { en: "What is your favourite pastime?", vi: "Thú tiêu khiển yêu thích của bạn là gì?" }
      ],
      mistakes: [
        { wrong: "What is your favourite pastime do?", right: "What is your favourite pastime?" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "What do you usually do in your spare time? → What is ______________ (your) favourite pastime?", accepted: ["your"], correct: "your", explanation: "Chuyển thành câu hỏi danh từ \"What is your favourite pastime?\"" }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'What does your brother often do in his free time?' → What is your brother's ______________ (favourite) pastime?", accepted: ["favourite"], correct: "favourite", explanation: "What do/does S do in free time? → What is S's favourite pastime?" }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'What do you often do when you are free?' → What is your favourite ______________ (free-time activity)?", accepted: ["free-time activity"], correct: "free-time activity", explanation: "What do you do in free time? → What is your favourite free-time activity?" }
        ]
      }
    },
    {
      id: "g5", name: "S1 + V1, while/whereas + S2 + V2 (so sánh sự khác biệt)",
      usage: "\"while\" và \"whereas\" dùng để nối hai mệnh đề nhằm nhấn mạnh sự khác biệt/tương phản giữa hai đối tượng, thường dùng khi so sánh thói quen giải trí giữa các quốc gia.",
      formulas: [
        "S1 + V1 + ..., while/whereas + S2 + V2 + ...",
        "The British prefer gardening, while Russian people like to get away to dachas in the countryside."
      ],
      signals: ["while", "whereas"],
      examples: [
        { en: "Americans love outdoor activities, while the British prefer gardening and going to the theatre.", vi: "Người Mỹ yêu thích các hoạt động ngoài trời, trong khi người Anh lại thích làm vườn và đi xem kịch." },
        { en: "Germans love hanging out at the beach and going to saunas, whereas Russians prefer getting away to dachas.", vi: "Người Đức thích ra biển và đi xông hơi, trong khi người Nga lại thích về các dacha ở nông thôn." }
      ],
      mistakes: [
        { wrong: "Americans love outdoor activities, but while the British prefer gardening.", right: "Americans love outdoor activities, while the British prefer gardening." }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "Americans do a lot of activities to relax, ______________ (trong khi) the British prefer gardening and swimming.", accepted: ["while", "whereas"], correct: "while", explanation: "while/whereas nối hai mệnh đề tương phản." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Germans love hanging out at the beach, ______________ (trong khi) Russians like to get away to dachas.", accepted: ["while", "whereas"], correct: "whereas", explanation: "while/whereas nối hai mệnh đề tương phản." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Combine: 'The British go to the theatre. Russians go to football matches.' → The British go to the theatre, ______________ (while Russians go to football matches).", accepted: ["while russians go to football matches", "whereas russians go to football matches"], correct: "while Russians go to football matches", explanation: "while/whereas nối hai mệnh đề tương phản." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "<b>Take a Bath!</b><br><br>Traveling is fun because you can see how people in other parts of the world live. One thing travelers don't often think about before traveling is how other cultures bathe. And bathrooms in many countries may be different from the kind you are used to.<br><br>In the United States, most people take a shower once a day in the morning. The <mark data-w=\"showerhead\">showerhead</mark> is usually <mark data-w=\"mounted\">mounted</mark> on the wall and cannot be moved. The bather simply stands under the water, gets wet, <mark data-w=\"scrubs\">scrubs</mark> with soap and often a washcloth, and then <mark data-w=\"rinses\">rinses</mark> off.<br><br>Children often take a bath each night and enjoy playing with small toys such as boats and rubber ducks. Many adults, especially women, enjoy a <mark data-w=\"soothing\">soothing</mark> bath to get rid of stress at the end of the day.<br><br>It is important to remember that when you take a shower or bath in the United States, you should be careful to keep the water inside the bathtub or shower. Unlike bathrooms in many countries, there is no <mark data-w=\"drain\">drain</mark> in the floor. If water gets on the floor it cannot go anywhere and must be cleaned up with a towel or mop. It can also cause problems for the floor. So be careful.",
    vocabInContext: {
      showerhead: "vòi hoa sen",
      mounted: "được gắn, lắp cố định",
      scrubs: "kỳ cọ, chà rửa",
      rinses: "xả (nước), tráng lại",
      soothing: "êm dịu, làm dịu",
      drain: "lỗ thoát nước"
    },
    translation: "<b>Hãy đi tắm!</b><br><br>Du lịch rất thú vị vì bạn có thể thấy cách người dân ở các nơi khác trên thế giới sinh sống. Một điều mà du khách thường không nghĩ đến trước khi đi du lịch là cách các nền văn hóa khác tắm rửa như thế nào. Và phòng tắm ở nhiều nước có thể khác với loại mà bạn quen thuộc.<br><br>Ở Mỹ, hầu hết mọi người tắm vòi sen một lần một ngày vào buổi sáng. Vòi hoa sen thường được gắn cố định trên tường và không thể di chuyển. Người tắm chỉ đơn giản đứng dưới vòi nước, làm ướt người, kỳ cọ với xà phòng và thường cả khăn tắm, rồi xả nước lại.<br><br>Trẻ em thường tắm bồn mỗi tối và thích chơi với những món đồ chơi nhỏ như thuyền và vịt cao su. Nhiều người lớn, đặc biệt là phụ nữ, thích tắm bồn êm dịu để xả stress vào cuối ngày.<br><br>Điều quan trọng cần nhớ là khi tắm vòi sen hoặc tắm bồn ở Mỹ, bạn nên cẩn thận giữ nước bên trong bồn tắm hoặc buồng tắm. Không giống như phòng tắm ở nhiều nước, sàn nhà không có lỗ thoát nước. Nếu nước rơi ra sàn, nó không thể thoát đi đâu và phải được lau sạch bằng khăn hoặc cây lau nhà. Nó cũng có thể gây hư hại cho sàn nhà. Vì vậy hãy cẩn thận.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Most people in the United States usually prefer to take a shower in the evening.", correct: "False", explanation: "Sai. Bài đọc: \"most people take a shower once a day in the morning\", không phải buổi tối." },
      { id: "r2", type: "truefalse", prompt: "In American bathrooms, you can easily move the showerhead around with your hand.", correct: "False", explanation: "Sai. Bài đọc: \"The showerhead is usually mounted on the wall and cannot be moved.\"" },
      { id: "r3", type: "truefalse", prompt: "American children frequently play with toys like rubber ducks while taking a bath.", correct: "True", explanation: "Đúng. Bài đọc: \"enjoy playing with small toys such as boats and rubber ducks.\"" },
      { id: "r4", type: "truefalse", prompt: "Bathrooms in the United States do not have a drain on the floor to let water out.", correct: "True", explanation: "Đúng. Bài đọc: \"there is no drain in the floor.\"" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "A guide to how people bathe in America and important rules for travelers.", B: "The history of bathroom designs and sanitation in the United States.", C: "The psychological benefits of taking a soothing bath for adults after work.", D: "A comparison between American toys and bathing habits in other countries." }, correct: "A", explanation: "Bài đọc giới thiệu cách người Mỹ tắm rửa và lưu ý quan trọng cho du khách → đáp án A bao quát toàn bài." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Travelers always carefully research how other cultures bathe before their trips.", B: "Water on an American bathroom floor can damage the floor.", C: "Many American women like taking a bath to reduce stress.", D: "You should use a towel or a mop if water spills onto the bathroom floor." }, correct: "A", explanation: "Bài đọc nói du khách THƯỜNG KHÔNG nghĩ đến việc này trước, không phải luôn luôn tìm hiểu kỹ." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'êm dịu, làm dịu' (adj).", accepted: ["soothing"], correct: "soothing", explanation: "'enjoy a soothing bath to get rid of stress' — soothing (adj) = êm dịu, làm dịu." },
      { id: "r8", type: "mcq", prompt: "According to the passage, what should you do if water gets on the bathroom floor?", options: { A: "Leave it to dry naturally overnight.", B: "Clean it up with a towel or mop.", C: "Open the drain in the floor.", D: "Call a plumber immediately." }, correct: "B", explanation: "Bài đọc: \"it cannot go anywhere and must be cleaned up with a towel or mop.\"" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, most travelers think carefully about how other cultures bathe before they travel.", correct: "False", explanation: "Sai. Bài đọc: \"One thing travelers don't often think about before traveling is how other cultures bathe.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "People in the U.S. do a lot of activities to relax, ranging from television viewing to doing handicrafts.", suggested: "Người dân ở Mỹ làm rất nhiều hoạt động để thư giãn, từ xem ti vi đến làm đồ thủ công.", notes: "Cấu trúc 'ranging from A to B' (từ A đến B) liệt kê phạm vi các hoạt động." },
    { id: "t2", en: "Another famous German pastime is frequenting saunas and hot tubs.", suggested: "Một thú tiêu khiển nổi tiếng khác của người Đức là thường xuyên đến phòng xông hơi và bồn tắm nước nóng.", notes: "Danh động từ 'frequenting' (thường xuyên lui tới) làm bổ ngữ sau \"is\"." },
    { id: "t3", en: "Dachas are typically found on the outskirts of cities and towns in Russia.", suggested: "Các dacha thường được tìm thấy ở ngoại ô các thành phố và thị trấn ở Nga.", notes: "Câu bị động 'are found' + cụm giới từ 'on the outskirts of' (ở ngoại ô)." },
    { id: "t4", en: "The showerhead is usually mounted on the wall and cannot be moved.", suggested: "Vòi hoa sen thường được gắn cố định trên tường và không thể di chuyển.", notes: "Hai mệnh đề bị động nối bằng 'and': 'is mounted' và 'cannot be moved'." },
    { id: "t5", en: "Regular physical activities are highly beneficial to your physical and mental health.", suggested: "Hoạt động thể chất thường xuyên rất có lợi cho sức khỏe thể chất và tinh thần của bạn.", notes: "Cụm 'be beneficial to sth' (có lợi cho điều gì)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "find sth + adj ⇄ not be interested in / keen on / fond of",
      formula: "S + find(s) + O + boring  →  S + is/are + not interested in / keen on / fond of + V-ing",
      example: { before: "Julie finds making crafts boring.", after: "Julie is not interested in making crafts." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "Minh finds doing aerobics boring. → Minh is not ______________ (interested) doing aerobics.", accepted: ["interested in"], correct: "interested in", explanation: "find sth boring → not be interested in + V-ing." },
        { id: "tr1p2", type: "fillblank", prompt: "My cousin finds gardening dull. → My cousin is not ______________ (keen) gardening.", accepted: ["keen on"], correct: "keen on", explanation: "find sth dull → not be keen on + V-ing." }
      ]
    },
    {
      id: "tr2", name: "prefer A to B ⇄ like A more than B",
      formula: "S + prefer(s) + A + to + B  →  S + like(s) + A + more than + B",
      example: { before: "My sister prefers watching Korean dramas to watching Indian dramas.", after: "My sister likes watching Korean dramas more than watching Indian dramas." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "He prefers doing aerobics to jogging. → He ______________ (likes doing aerobics more than jogging).", accepted: ["likes doing aerobics more than jogging"], correct: "likes doing aerobics more than jogging", explanation: "prefer A to B → like A more than B." },
        { id: "tr2p2", type: "fillblank", prompt: "We prefer taking a bath to taking a shower. → We ______________ (like taking a bath more than taking a shower).", accepted: ["like taking a bath more than taking a shower"], correct: "like taking a bath more than taking a shower", explanation: "prefer A to B → like A more than B." }
      ]
    },
    {
      id: "tr3", name: "would rather V1 than V2 ⇄ prefer V-ing to V-ing",
      formula: "S + would rather + V1 + than + V2  →  S + prefer(s) + V1-ing + to + V2-ing",
      example: { before: "I would rather surf the Internet than play computer games.", after: "I prefer surfing the Internet to playing computer games." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "She would rather do aerobics than go jogging. → She ______________ (prefers doing aerobics to going jogging).", accepted: ["prefers doing aerobics to going jogging"], correct: "prefers doing aerobics to going jogging", explanation: "would rather V1 than V2 → prefer V1-ing to V2-ing." },
        { id: "tr3p2", type: "fillblank", prompt: "They would rather stay at a dacha than stay in a hotel. → They ______________ (prefer staying at a dacha to staying in a hotel).", accepted: ["prefer staying at a dacha to staying in a hotel"], correct: "prefer staying at a dacha to staying in a hotel", explanation: "would rather V1 than V2 → prefer V1-ing to V2-ing." }
      ]
    },
    {
      id: "tr4", name: "What do you do in your free time? ⇄ What is your favourite pastime?",
      formula: "What do/does + S + do + in + possessive + free time?  →  What is + possessive + favourite pastime?",
      example: { before: "What do you often do in your free time?", after: "What is your favourite pastime?" },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "What does your friend often do in her free time? → What is your friend's ______________ (favourite pastime)?", accepted: ["favourite pastime", "favorite pastime"], correct: "favourite pastime", explanation: "What do/does S do in free time? → What is S's favourite pastime?" },
        { id: "tr4p2", type: "fillblank", prompt: "What do you usually do when you have free time? → What is your favourite ______________ (free-time activity)?", accepted: ["free-time activity"], correct: "free-time activity", explanation: "What do you do in free time? → What is your favourite free-time activity?" }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Outskirts' means:", options: { A: "trung tâm thành phố", B: "ngoại ô", C: "sân vận động", D: "bến tàu" }, correct: "B", explanation: "outskirts (n) = ngoại ô." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Soothing' means:", options: { A: "ồn ào", B: "êm dịu, làm dịu", C: "nguy hiểm", D: "chật chội" }, correct: "B", explanation: "soothing (adj) = êm dịu, làm dịu." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Doing aerobics helps improve your full-body ______________ (sự dẻo dai).", accepted: ["flexibility"], correct: "flexibility", explanation: "flexibility (n) = sự linh hoạt, dẻo dai." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Julie finds making crafts boring. → Julie is not ______ in making crafts.", options: { A: "interested", B: "interesting", C: "interest", D: "interests" }, correct: "A", explanation: "not be interested in + V-ing." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "My sister prefers watching Korean dramas ______ watching Indian dramas.", options: { A: "than", B: "to", C: "from", D: "with" }, correct: "B", explanation: "prefer A to B." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "I would rather surf the Internet than play computer games. → I prefer ______________ (surf) the Internet to playing computer games.", accepted: ["surfing"], correct: "surfing", explanation: "would rather V1 than V2 → prefer V1-ing to V2-ing." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "What do you often do in your free time? → What is your favourite ______________?", accepted: ["pastime"], correct: "pastime", explanation: "What do you do in free time? → What is your favourite pastime?" },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "The showerhead in American bathrooms can be easily moved by hand.", correct: "False", explanation: "Bài đọc: 'is usually mounted on the wall and cannot be moved.'" },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "American bathroom floors usually have a drain to let water out.", correct: "False", explanation: "Bài đọc: 'there is no drain in the floor.'" },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the bathing passage?", options: { A: "A guide to how people bathe in America and important rules for travelers.", B: "The best soaps to use while bathing.", C: "How to build a bathroom without a drain.", D: "The history of American plumbing." }, correct: "A", explanation: "Bài đọc giới thiệu cách người Mỹ tắm rửa và lưu ý cho du khách." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "My sister prefers watching Korean dramas to watching Indian dramas. → My sister likes watching Korean dramas ______________ watching Indian dramas.", accepted: ["more than"], correct: "more than", explanation: "prefer A to B → like A more than B." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Doing full-body exercises daily will help you ______________ (strengthen) your bones.", accepted: ["strengthen"], correct: "strengthen", explanation: "strong (adj) → strengthen (v)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "What do you often do in your free time? → What is your favourite free-time ______________?", accepted: ["activity"], correct: "activity", explanation: "What do you do in free time? → What is your favourite free-time activity?" },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "The young girl felt complete ______ after finishing her first DIY project.", options: { A: "satisfaction", B: "satisfy", C: "satisfying", D: "satisfied" }, correct: "A", explanation: "Cần danh từ sau tính từ 'complete' → satisfaction (n)." }
  ]
};
