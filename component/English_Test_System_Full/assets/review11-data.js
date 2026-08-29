const REVIEW = {
  id: "test11",
  testFile: "test11.html",
  grade: "Grade 8 — Global Success",
  unit: "Unit 3: Teenagers",
  title: "Knowledge Review — Unit 3, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "pressure", pos: "n", ipa: "/ˈpreʃər/", meaning: "áp lực", example: "She tries to overcome the pressure from her family by getting the best exam results.", exampleVi: "Cô ấy cố gắng vượt qua áp lực từ gia đình bằng cách đạt kết quả thi tốt nhất." },
    { word: "expectation", pos: "n", ipa: "/ˌekspekˈteɪʃn/", meaning: "kỳ vọng", example: "To meet her parents' expectations, Lucy spends five hours practicing the piano every day.", exampleVi: "Để đáp ứng kỳ vọng của cha mẹ, Lucy dành năm giờ mỗi ngày luyện đàn piano." },
    { word: "encouragement", pos: "n", ipa: "/ɪnˈkʌrɪdʒmənt/", meaning: "sự động viên, khuyến khích", example: "Parents should provide more encouragement to help their children overcome exam stress.", exampleVi: "Cha mẹ nên động viên nhiều hơn để giúp con cái vượt qua áp lực thi cử." },
    { word: "harmful", pos: "adj", ipa: "/ˈhɑːrmfl/", meaning: "có hại", example: "Spending too much time on social media can be harmful to a teenager's mental health.", exampleVi: "Dành quá nhiều thời gian trên mạng xã hội có thể có hại cho sức khỏe tâm thần của thanh thiếu niên." },
    { word: "informative", pos: "adj", ipa: "/ɪnˈfɔːrmətɪv/", meaning: "giàu thông tin, bổ ích", example: "The psychologist gave a highly informative talk about teenage well-being.", exampleVi: "Nhà tâm lý học đã có một buổi nói chuyện rất bổ ích về sức khỏe tinh thần của thanh thiếu niên." },
    { word: "enjoyment", pos: "n", ipa: "/ɪnˈdʒɔɪmənt/", meaning: "niềm vui thích", example: "Doing exercise regularly helps students improve their concentration and enjoyment.", exampleVi: "Tập thể dục thường xuyên giúp học sinh cải thiện sự tập trung và niềm vui thích." },
    { word: "concentrate", pos: "v", ipa: "/ˈkɒnsntreɪt/", meaning: "tập trung", example: "Many teenagers find it difficult to concentrate on their lessons when they are worried.", exampleVi: "Nhiều thanh thiếu niên thấy khó tập trung vào bài học khi họ đang lo lắng." },
    { word: "increasingly", pos: "adv", ipa: "/ɪnˈkriːsɪŋli/", meaning: "ngày càng", example: "Increasingly, more and more teenagers are using the Teen Line forum to share problems.", exampleVi: "Ngày càng có nhiều thanh thiếu niên sử dụng diễn đàn Teen Line để chia sẻ vấn đề." },
    { word: "trendy", pos: "adj", ipa: "/ˈtrendi/", meaning: "hợp thời trang, thịnh hành", example: "If you want to follow the crowd, you need to wear trendy labels.", exampleVi: "Nếu bạn muốn theo xu hướng số đông, bạn cần mặc những nhãn hiệu thời trang." },
    { word: "designer label", pos: "n phr", ipa: "/dɪˈzaɪnər ˈleɪbl/", meaning: "nhãn hiệu thời trang cao cấp", example: "40% of British teenagers believe it's important to wear designer labels.", exampleVi: "40% thanh thiếu niên Anh tin rằng việc mặc nhãn hiệu cao cấp là quan trọng." },
    { word: "bullying", pos: "n", ipa: "/ˈbʊliɪŋ/", meaning: "sự bắt nạt", example: "In London, there are many cases of bullying and fighting between pupils from different schools.", exampleVi: "Ở London, có nhiều trường hợp bắt nạt và đánh nhau giữa học sinh từ các trường khác nhau." },
    { word: "well-being", pos: "n", ipa: "/ˌwel ˈbiːɪŋ/", meaning: "sức khỏe tinh thần, sự khỏe mạnh", example: "It's a Teenage Well-being Workshop focused on dealing with academic stress.", exampleVi: "Đó là một hội thảo về sức khỏe tinh thần thanh thiếu niên, tập trung vào việc đối phó với áp lực học tập." },
    { word: "workshop", pos: "n", ipa: "/ˈwɜːrkʃɒp/", meaning: "buổi hội thảo, tọa đàm", example: "Our school is organizing a special free workshop this Friday.", exampleVi: "Trường chúng tôi đang tổ chức một buổi hội thảo miễn phí đặc biệt vào thứ Sáu này." },
    { word: "cope (with)", pos: "v", ipa: "/koʊp/", meaning: "đối phó, ứng phó (với)", example: "Academic pressures are the main things that teens have to cope with on a daily basis.", exampleVi: "Áp lực học tập là điều chính mà thanh thiếu niên phải đối phó hằng ngày." },
    { word: "tip", pos: "n", ipa: "/tɪp/", meaning: "mẹo, lời khuyên nhỏ", example: "Psychologists give us some tips about things we can do to reduce our stress levels.", exampleVi: "Các nhà tâm lý học đưa ra vài mẹo về những điều chúng ta có thể làm để giảm căng thẳng." },
    { word: "peer", pos: "n", ipa: "/pɪr/", meaning: "bạn cùng trang lứa", example: "There are different kinds of troubles, such as academic pressures and difficulties with peers.", exampleVi: "Có nhiều loại rắc rối khác nhau, như áp lực học tập và khó khăn với bạn bè cùng trang lứa." },
    { word: "follow the crowd", pos: "phr", ipa: "/ˈfɒloʊ ðə kraʊd/", meaning: "chạy theo số đông", example: "If you want to follow the crowd, you need to wear trendy labels.", exampleVi: "Nếu bạn muốn chạy theo số đông, bạn cần mặc những nhãn hiệu thời trang." },
    { word: "exhausted", pos: "adj", ipa: "/ɪɡˈzɔːstɪd/", meaning: "kiệt sức", example: "Lucy spends five hours practicing the piano every day; she must be exhausted.", exampleVi: "Lucy dành năm giờ mỗi ngày để luyện đàn piano; chắc hẳn cô ấy rất kiệt sức." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'áp lực':", options: { A: "pressure", B: "enjoyment", C: "workshop", D: "tip" }, correct: "A", explanation: "<b>pressure</b> (n) = áp lực." },
      { id: "vp2", prompt: "Choose the word that means 'sự bắt nạt':", options: { A: "encouragement", B: "bullying", C: "expectation", D: "well-being" }, correct: "B", explanation: "<b>bullying</b> (n) = sự bắt nạt." },
      { id: "vp3", prompt: "Choose the best word: \"Many teenagers find it difficult to ______ on their lessons.\"", options: { A: "concentrate", B: "cope", C: "encourage", D: "follow" }, correct: "A", explanation: "\"<b>concentrate</b> on\" (tập trung vào) là cụm cố định." },
      { id: "vp4", prompt: "Choose the word that means 'có hại':", options: { A: "informative", B: "trendy", C: "harmful", D: "exhausted" }, correct: "C", explanation: "<b>harmful</b> (adj) = có hại." },
      { id: "vp5", prompt: "\"Academic pressures are things that teens have to ______ with.\"", options: { A: "cope", B: "concentrate", C: "follow", D: "encourage" }, correct: "A", explanation: "\"<b>cope</b> with\" (đối phó với) là cụm động từ cố định." },
      { id: "vp6", prompt: "Choose the word that means 'bạn cùng trang lứa':", options: { A: "peer", B: "designer", C: "workshop", D: "expectation" }, correct: "A", explanation: "<b>peer</b> (n) = bạn cùng trang lứa." }
    ],
    fillblank: [
      { id: "vf1", prompt: "Parents should provide more ______________ (sự động viên) to help children overcome stress.", accepted: ["encouragement"], correct: "encouragement", explanation: "<b>encouragement</b> (n) = sự động viên, khuyến khích." },
      { id: "vf2", prompt: "The psychologist gave a highly ______________ (bổ ích) talk about teenage well-being.", accepted: ["informative"], correct: "informative", explanation: "<b>informative</b> (adj) = giàu thông tin, bổ ích." },
      { id: "vf3", prompt: "If you want to follow the crowd, you need to wear ______________ (hợp thời trang) labels.", accepted: ["trendy"], correct: "trendy", explanation: "<b>trendy</b> (adj) = hợp thời trang, thịnh hành." },
      { id: "vf4", prompt: "Psychologists give us some ______________ (mẹo) to reduce stress.", accepted: ["tips"], correct: "tips", explanation: "<b>tip</b> (n) = mẹo, lời khuyên nhỏ." },
      { id: "vf5", prompt: "Lucy spends five hours practicing the piano every day; she must be ______________ (kiệt sức).", accepted: ["exhausted"], correct: "exhausted", explanation: "<b>exhausted</b> (adj) = kiệt sức." },
      { id: "vf6", prompt: "______________ (Ngày càng), more teenagers are using the Teen Line forum.", accepted: ["Increasingly"], correct: "Increasingly", explanation: "<b>increasingly</b> (adv) = ngày càng." }
    ],
    matching: {
      left: ["pressure", "expectation", "well-being", "bullying", "peer", "exhausted"],
      right: ["áp lực", "kỳ vọng", "sức khỏe tinh thần", "sự bắt nạt", "bạn cùng trang lứa", "kiệt sức"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"Spending too much time on social media can be ______ to mental health.\" (HARM)", options: { A: "harm", B: "harmful", C: "harming", D: "harms" }, correct: "B", explanation: "Cần tính từ sau \"be\" → harm (n/v) → <b>harmful</b> (adj)." },
      { id: "cw2", prompt: "\"Doing exercise helps students improve their concentration and ______.\" (ENJOY)", options: { A: "enjoy", B: "enjoyable", C: "enjoyment", D: "enjoying" }, correct: "C", explanation: "Cần danh từ song song với \"concentration\" → enjoy (v) → <b>enjoyment</b> (n)." },
      { id: "cw3", prompt: "\"______, more and more teenagers are joining the forum.\" (INCREASE)", options: { A: "Increase", B: "Increasing", C: "Increased", D: "Increasingly" }, correct: "D", explanation: "Cần trạng từ đầu câu → increase (v) → <b>increasingly</b> (adv)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'expectation' mean?", options: { A: "kỳ vọng", B: "áp lực", C: "sự thất vọng", D: "sự tự do" }, correct: "A", explanation: "expectation (n) = kỳ vọng." },
      { id: "wm2", prompt: "What does 'cope with' mean?", options: { A: "đối phó, ứng phó", B: "trốn tránh", C: "quên đi", D: "khuyến khích" }, correct: "A", explanation: "cope with (v) = đối phó, ứng phó với." },
      { id: "wm3", prompt: "What does 'well-being' mean?", options: { A: "bệnh tật", B: "sức khỏe tinh thần, sự khỏe mạnh", C: "sự giàu có", D: "sự nổi tiếng" }, correct: "B", explanation: "well-being (n) = sức khỏe tinh thần, sự khỏe mạnh." }
    ],
    wordForm: [
      { id: "wf1", prompt: "Many teenagers find it difficult to (CONCENTRATION) ______________ on their lessons.", accepted: ["concentrate"], correct: "concentrate", explanation: "Cần động từ → concentration (n) → <b>concentrate</b> (v)." },
      { id: "wf2", prompt: "The talk was very (INFORM) ______________ about teenage well-being.", accepted: ["informative"], correct: "informative", explanation: "Cần tính từ → inform (v) → <b>informative</b> (adj)." },
      { id: "wf3", prompt: "Parents should give more (ENCOURAGE) ______________ to their children.", accepted: ["encouragement"], correct: "encouragement", explanation: "Cần danh từ → encourage (v) → <b>encouragement</b> (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "should ⇄ ought to (lời khuyên)",
      usage: "\"should + V\" và \"ought to + V\" đều dùng để đưa ra lời khuyên (nên làm gì) và có thể thay thế cho nhau mà không đổi nghĩa.",
      formulas: [
        "S + should + V.  →  S + ought to + V.",
        "Teenagers should spend less time using their phones. → Teenagers ought to spend less time using their phones."
      ],
      signals: ["should", "ought to"],
      examples: [
        { en: "Teenagers should spend less time using their phones.", vi: "Thanh thiếu niên nên dành ít thời gian hơn để dùng điện thoại." },
        { en: "Teenagers ought to spend less time using their phones.", vi: "Thanh thiếu niên nên dành ít thời gian hơn để dùng điện thoại." }
      ],
      mistakes: [
        { wrong: "Teenagers ought spend less time.", right: "Teenagers ought to spend less time." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "You should get more sleep every night. → You ______________ (ought) get more sleep every night.", accepted: ["ought to"], correct: "ought to", explanation: "should → ought to (giữ nguyên nghĩa lời khuyên)." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'Students should manage their time effectively.' → Students ______________ (ought to) manage their time effectively.", accepted: ["ought to"], correct: "ought to", explanation: "should → ought to." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Teenagers should not compare themselves with others.' → Teenagers ______________ (ought not to compare themselves with others).", accepted: ["ought not to compare themselves with others"], correct: "ought not to compare themselves with others", explanation: "should not → ought not to." }
        ]
      }
    },
    {
      id: "g2", name: "Although + mệnh đề ⇄ In spite of + N/V-ing",
      usage: "\"Although + mệnh đề\" (Mặc dù...) có thể diễn đạt lại bằng \"In spite of + N/V-ing\" — cùng nêu sự tương phản, nhưng theo sau là danh từ hoặc danh động từ, không phải mệnh đề.",
      formulas: [
        "Although + S + V, S + V.  →  In spite of + N/V-ing, S + V.",
        "Although Ally faces a lot of academic pressure, she tries her best to study well. → In spite of facing a lot of academic pressure, Ally tries her best to study well."
      ],
      signals: ["Although", "In spite of"],
      examples: [
        { en: "Although Ally faces a lot of academic pressure, she tries her best to study well.", vi: "Mặc dù Ally phải đối mặt với nhiều áp lực học tập, cô ấy vẫn cố gắng hết sức để học tốt." },
        { en: "In spite of facing a lot of academic pressure, Ally tries her best to study well.", vi: "Bất chấp việc đối mặt với nhiều áp lực học tập, Ally vẫn cố gắng hết sức để học tốt." }
      ],
      mistakes: [
        { wrong: "In spite of she faces a lot of pressure, she studies well.", right: "In spite of facing a lot of pressure, she studies well." }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "Although he was tired, he finished his homework. → In spite of ______________ (be) tired, he finished his homework.", accepted: ["being"], correct: "being", explanation: "Although + mệnh đề → In spite of + V-ing." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Although she has a lot of homework, she still helps her mother.' → In spite of ______________ (have) a lot of homework, she still helps her mother.", accepted: ["having"], correct: "having", explanation: "Although + mệnh đề → In spite of + V-ing." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Although the exam was difficult, Nam passed it easily.' → ______________ (In spite of the difficult exam, Nam passed it easily).", accepted: ["in spite of the difficult exam, nam passed it easily"], correct: "In spite of the difficult exam, Nam passed it easily", explanation: "Although + mệnh đề → In spite of + N." }
        ]
      }
    },
    {
      id: "g3", name: "more popular than any other ⇄ No other ... is as popular as",
      usage: "So sánh hơn \"more popular than any other + N\" (phổ biến hơn bất kỳ N nào khác) mang nghĩa tương đương so sánh nhất, có thể diễn đạt lại bằng \"No other + N + is as popular as\" (Không có N nào khác phổ biến bằng).",
      formulas: [
        "A + is more + adj + than any other + N.  →  No other + N + is as + adj + as + A.",
        "Social networking is more popular than any other technology among teenagers. → No other technology among teenagers is as popular as social networking."
      ],
      signals: ["more ... than any other", "No other ... as ... as"],
      examples: [
        { en: "Social networking is more popular than any other technology among teenagers nowadays.", vi: "Mạng xã hội phổ biến hơn bất kỳ công nghệ nào khác trong giới thanh thiếu niên hiện nay." },
        { en: "No other technology among teenagers nowadays is as popular as social networking.", vi: "Không có công nghệ nào khác trong giới thanh thiếu niên hiện nay phổ biến bằng mạng xã hội." }
      ],
      mistakes: [
        { wrong: "No other technology is popular as social networking.", right: "No other technology is as popular as social networking." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "Football is more popular than any other sport in my school. → No other sport in my school is ______________ (as popular as) football.", accepted: ["as popular as"], correct: "as popular as", explanation: "more ... than any other → No other ... is as ... as." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'TikTok is more popular than any other app among teens.' → No other app among teens ______________ (is as popular as) TikTok.", accepted: ["is as popular as"], correct: "is as popular as", explanation: "more ... than any other → No other ... is as ... as." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'English is more important than any other subject to Nam.' → ______________ (No other subject is as important as English to Nam).", accepted: ["no other subject is as important as english to nam"], correct: "No other subject is as important as English to Nam", explanation: "more ... than any other → No other ... is as ... as." }
        ]
      }
    },
    {
      id: "g4", name: "produce a solution ⇄ come up with a solution",
      usage: "\"produce a solution\" (tạo ra/đưa ra giải pháp) có thể diễn đạt lại bằng cụm động từ \"come up with a solution\" (nghĩ ra, đưa ra giải pháp) — cùng nghĩa và thường dùng phổ biến hơn trong văn nói.",
      formulas: [
        "S + produce(d) + a solution.  →  S + come/came up with + a solution.",
        "The school finally produced a good solution to help students deal with stress. → The school finally came up with a good solution to help students deal with stress."
      ],
      signals: ["produce a solution", "come up with a solution"],
      examples: [
        { en: "The school finally produced a good solution to help students deal with stress.", vi: "Cuối cùng nhà trường đã đưa ra một giải pháp tốt để giúp học sinh đối phó với căng thẳng." },
        { en: "The school finally came up with a good solution to help students deal with stress.", vi: "Cuối cùng nhà trường đã nghĩ ra một giải pháp tốt để giúp học sinh đối phó với căng thẳng." }
      ],
      mistakes: [
        { wrong: "The school came up a good solution.", right: "The school came up with a good solution." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "The team produced a new idea for the project. → The team ______________ (came up) with a new idea for the project.", accepted: ["came up"], correct: "came up", explanation: "produce → come up with." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'Scientists produced an effective vaccine.' → Scientists ______________ (came up with) an effective vaccine.", accepted: ["came up with"], correct: "came up with", explanation: "produce → come up with." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The teacher produced a clever plan to reduce stress.' → The teacher ______________ (came up with a clever plan to reduce stress).", accepted: ["came up with a clever plan to reduce stress"], correct: "came up with a clever plan to reduce stress", explanation: "produce → come up with." }
        ]
      }
    },
    {
      id: "g5", name: "Đại từ quan hệ: that (vật) trong mệnh đề quan hệ",
      usage: "\"that\" có thể thay thế cho \"which\" (vật) hoặc \"who\" (người) làm chủ ngữ/tân ngữ trong mệnh đề quan hệ xác định, đặc biệt phổ biến khi mệnh đề quan hệ theo sau \"something\", \"the only\", so sánh nhất...",
      formulas: [
        "N/pronoun (something, the only...) + that + V...",
        "Do something that makes you happy."
      ],
      signals: ["that (thay who/which)"],
      examples: [
        { en: "It is also important to take time out every day to do something that makes you happy.", vi: "Cũng quan trọng để dành thời gian mỗi ngày làm điều gì đó khiến bạn hạnh phúc." },
        { en: "This is the best solution that the school has ever found.", vi: "Đây là giải pháp tốt nhất mà nhà trường từng tìm ra." }
      ],
      mistakes: [
        { wrong: "Do something who makes you happy.", right: "Do something that makes you happy." }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "I want to do something ______________ (who/that) helps other people.", accepted: ["that"], correct: "that", explanation: "\"something\" + đại từ quan hệ \"that\"." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "She is the only student ______________ (who/that) got a perfect score.", accepted: ["that", "who"], correct: "that", explanation: "Sau \"the only\" thường dùng \"that\" (có thể dùng \"who\" nếu chỉ người)." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "This is the most helpful tip ______________ (who/that) I have ever received.", accepted: ["that"], correct: "that", explanation: "Sau so sánh nhất thường dùng \"that\"." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "<b>WHAT IS IT LIKE BEING A TEENAGER IN BRITAIN?</b><br><br><b>School</b><br>British teenagers spend most of their time at school. Students in Britain can leave school at sixteen (grade 11). This is also the age when most students take their first important exams, the GCSE. Most teens take between 5-10 subjects, which means a lot of studying. They are spending more time on <mark data-w=\"homework\">homework</mark> than teenagers ever before. Forget watching TV, teenagers in Britain now spend 2-3 hours on homework after school.<br><br><b>School uniform</b><br>Visit almost any school in Britain and the first thing you'll notice is the school <mark data-w=\"uniform\">uniform</mark>. Although school uniform has its advantages, when they are 15 or 16, most teenagers are tired of wearing it. When there is more than one school in a town, school uniforms can highlight differences between schools. In London, there are many cases of <mark data-w=\"bullying\">bullying</mark> and fighting between pupils from different schools.<br><br><b>Clothes and looks</b><br>In Britain, some teens judge you by the shirt or trainers you are wearing, as 40% of British teenagers believe it's important to wear <mark data-w=\"designer\">designer</mark> labels. If you want to follow the crowd, you need to wear <mark data-w=\"trendy\">trendy</mark> labels. Teenagers in Britain wear <mark data-w=\"fashionable\">fashionable</mark> trainers, and the more expensive, the better.",
    vocabInContext: {
      homework: "bài tập về nhà",
      uniform: "đồng phục",
      bullying: "sự bắt nạt",
      designer: "(nhãn hiệu) do nhà thiết kế nổi tiếng tạo ra, cao cấp",
      trendy: "hợp thời trang, thịnh hành",
      fashionable: "hợp mốt, thời trang"
    },
    translation: "<b>THANH THIẾU NIÊN Ở ANH SỐNG NHƯ THẾ NÀO?</b><br><br><b>Trường học</b><br>Thanh thiếu niên Anh dành phần lớn thời gian ở trường. Học sinh ở Anh có thể rời trường ở tuổi mười sáu (lớp 11). Đây cũng là độ tuổi mà hầu hết học sinh thi kỳ thi quan trọng đầu tiên, kỳ thi GCSE. Hầu hết học sinh học từ 5-10 môn, nghĩa là phải học rất nhiều. Họ dành nhiều thời gian làm bài tập về nhà hơn bao giờ hết. Quên việc xem TV đi, thanh thiếu niên Anh hiện nay dành 2-3 giờ làm bài tập sau giờ học.<br><br><b>Đồng phục học sinh</b><br>Ghé thăm bất kỳ trường học nào ở Anh, điều đầu tiên bạn sẽ nhận thấy là đồng phục học sinh. Mặc dù đồng phục có những ưu điểm riêng, khi 15 hay 16 tuổi, hầu hết thanh thiếu niên đều chán mặc nó. Khi có nhiều hơn một trường học trong một thị trấn, đồng phục có thể làm nổi bật sự khác biệt giữa các trường. Ở London, có nhiều trường hợp bắt nạt và đánh nhau giữa học sinh từ các trường khác nhau.<br><br><b>Trang phục và vẻ ngoài</b><br>Ở Anh, một số thanh thiếu niên đánh giá bạn qua chiếc áo hay đôi giày bạn đang mặc, vì 40% thanh thiếu niên Anh tin rằng việc mặc nhãn hiệu cao cấp là quan trọng. Nếu bạn muốn theo xu hướng số đông, bạn cần mặc những nhãn hiệu thời trang. Thanh thiếu niên Anh mang giày thể thao hợp mốt, và càng đắt tiền càng tốt.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "British teenagers currently spend less time doing homework than they did in the past.", correct: "False", explanation: "Sai. Bài đọc: 'They are spending more time on homework than teenagers ever before.'" },
      { id: "r2", type: "truefalse", prompt: "The GCSE is the first significant examination that most British students take.", correct: "True", explanation: "Bài đọc: 'the age when most students take their first important exams, the GCSE.'" },
      { id: "r3", type: "truefalse", prompt: "Most 15 or 16-year-old students in Britain enjoy wearing their school uniforms.", correct: "False", explanation: "Sai. Bài đọc: 'most teenagers are tired of wearing it.'" },
      { id: "r4", type: "truefalse", prompt: "In London, school uniforms can sometimes lead to conflicts between students from different schools.", correct: "True", explanation: "Bài đọc: 'many cases of bullying and fighting between pupils from different schools.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "Different aspects of a British teenager's life, including school, uniforms, and fashion.", B: "The academic pressure and exam system that British teenagers have to face.", C: "The negative effects of school uniforms and bullying in London schools.", D: "The reason why British teenagers prefer expensive designer clothing." }, correct: "A", explanation: "Bài đọc có 3 phần: School, School uniform, Clothes and looks — mô tả nhiều khía cạnh cuộc sống thanh thiếu niên Anh." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "British teenagers often spend 2 to 3 hours watching TV after school.", B: "Students in Britain are allowed to finish their schooling at the age of sixteen.", C: "Less than half of British teenagers think that wearing designer labels is important.", D: "Wearing costly and fashionable trainers is popular among British teenagers." }, correct: "A", explanation: "Bài đọc nói ngược lại: học sinh dành 2-3 giờ làm bài tập, không phải xem TV." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'đồng phục' (n).", accepted: ["uniform"], correct: "uniform", explanation: "'school uniform' — uniform (n) = đồng phục." },
      { id: "r8", type: "mcq", prompt: "According to the passage, what percentage of British teenagers believe wearing designer labels is important?", options: { A: "About 40%.", B: "About 60%.", C: "About 90%.", D: "Almost 100%." }, correct: "A", explanation: "Bài đọc: 'as 40% of British teenagers believe it's important to wear designer labels.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, wearing a school uniform has no advantages at all.", correct: "False", explanation: "Sai. Bài đọc: 'Although school uniform has its advantages...' — đồng phục vẫn có những ưu điểm nhất định." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Every teenager feels stressed at times.", suggested: "Mọi thanh thiếu niên đều cảm thấy căng thẳng vào những lúc nào đó.", notes: "'at times' (thỉnh thoảng, vào những lúc nào đó)." },
    { id: "t2", en: "None of us can avoid stress completely, but psychologists give us some tips to reduce our stress levels.", suggested: "Không ai trong chúng ta có thể tránh hoàn toàn căng thẳng, nhưng các nhà tâm lý học đưa ra vài mẹo giúp giảm mức độ căng thẳng.", notes: "'None of us' (không ai trong chúng ta) làm chủ ngữ." },
    { id: "t3", en: "As the saying goes, \"A problem shared is a problem halved!\"", suggested: "Như câu ngạn ngữ có câu, \"Một vấn đề được chia sẻ là một vấn đề được giảm đi một nửa!\"", notes: "'As the saying goes' (như câu ngạn ngữ nói) mở đầu một câu trích dẫn." },
    { id: "t4", en: "British teenagers are spending more time on homework than teenagers ever before.", suggested: "Thanh thiếu niên Anh đang dành nhiều thời gian làm bài tập về nhà hơn bao giờ hết.", notes: "So sánh hơn 'more ... than ... ever before' (hơn bao giờ hết)." },
    { id: "t5", en: "Some teens judge you by the shirt or trainers you are wearing.", suggested: "Một số thanh thiếu niên đánh giá bạn qua chiếc áo hay đôi giày thể thao bạn đang mặc.", notes: "Mệnh đề quan hệ rút gọn 'you are wearing' bổ nghĩa cho 'the shirt or trainers'." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "should ⇄ ought to",
      formula: "S + should + V  →  S + ought to + V",
      example: { before: "Teenagers should spend less time using their phones.", after: "Teenagers ought to spend less time using their phones." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "You should talk to someone about your problems. → You ______________ (ought to) talk to someone about your problems.", accepted: ["ought to"], correct: "ought to", explanation: "should → ought to." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'Students should exercise regularly.' → Students ______________ (ought to) exercise regularly.", accepted: ["ought to"], correct: "ought to", explanation: "should → ought to." }
      ]
    },
    {
      id: "tr2", name: "Although + mệnh đề ⇄ In spite of + N/V-ing",
      formula: "Although + S + V, S + V  →  In spite of + N/V-ing, S + V",
      example: { before: "Although Ally faces a lot of academic pressure, she tries her best to study well.", after: "In spite of facing a lot of academic pressure, Ally tries her best to study well." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Although it was raining, they went to school. → In spite of ______________ (rain), they went to school.", accepted: ["the rain", "raining"], correct: "the rain", explanation: "Although + mệnh đề → In spite of + N/V-ing." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'Although Minh felt nervous, he gave a great speech.' → In spite of ______________ (feel) nervous, Minh gave a great speech.", accepted: ["feeling"], correct: "feeling", explanation: "Although + mệnh đề → In spite of + V-ing." }
      ]
    },
    {
      id: "tr3", name: "more popular than any other ⇄ No other ... as popular as",
      formula: "A + is more + adj + than any other + N  →  No other + N + is as + adj + as + A",
      example: { before: "Social networking is more popular than any other technology among teenagers nowadays.", after: "No other technology among teenagers nowadays is as popular as social networking." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "Lan is more hard-working than any other student in class. → No other student in class ______________ (is as hard-working as) Lan.", accepted: ["is as hard-working as"], correct: "is as hard-working as", explanation: "more ... than any other → No other ... is as ... as." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'Instagram is more popular than any other app among teens.' → No other app among teens ______________ (is as popular as) Instagram.", accepted: ["is as popular as"], correct: "is as popular as", explanation: "more ... than any other → No other ... is as ... as." }
      ]
    },
    {
      id: "tr4", name: "produce a solution ⇄ come up with a solution",
      formula: "S + produce(d) + a solution  →  S + come/came up with + a solution",
      example: { before: "The school finally produced a good solution to help students deal with stress.", after: "The school finally came up with a good solution to help students deal with stress." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "The committee produced a plan to reduce homework. → The committee ______________ (came up) with a plan to reduce homework.", accepted: ["came up"], correct: "came up", explanation: "produce → come up with." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'She produced a brilliant idea for the project.' → She ______________ (came up with) a brilliant idea for the project.", accepted: ["came up with"], correct: "came up with", explanation: "produce → come up with." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Encouragement' means:", options: { A: "sự động viên, khuyến khích", B: "sự trừng phạt", C: "áp lực", D: "sự thất bại" }, correct: "A", explanation: "encouragement (n) = sự động viên, khuyến khích." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Bullying' means:", options: { A: "sự giúp đỡ", B: "sự bắt nạt", C: "sự khen ngợi", D: "sự tôn trọng" }, correct: "B", explanation: "bullying (n) = sự bắt nạt." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Academic pressures are the main things teens have to ______________ (đối phó) with.", accepted: ["cope"], correct: "cope", explanation: "cope with = đối phó với." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Teenagers should spend less time using their phones. → Teenagers ______ to spend less time using their phones.", options: { A: "ought", B: "should", C: "must", D: "need" }, correct: "A", explanation: "should → ought to." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Although Ally faces a lot of pressure, she studies well. → In spite of ______ a lot of pressure, Ally studies well.", options: { A: "face", B: "faced", C: "facing", D: "faces" }, correct: "C", explanation: "In spite of + V-ing." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Social networking is more popular than any other technology. → No other technology is ______________ popular as social networking.", accepted: ["as"], correct: "as", explanation: "No other ... is as ... as." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "The school produced a good solution. → The school came ______________ with a good solution.", accepted: ["up"], correct: "up", explanation: "come up with = nghĩ ra, đưa ra." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "British teenagers currently spend less time doing homework than they did in the past.", correct: "False", explanation: "Sai. Bài đọc nói học sinh dành nhiều thời gian làm bài tập hơn trước." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Most 15 or 16-year-old students in Britain enjoy wearing their school uniforms.", correct: "False", explanation: "Sai. Bài đọc nói học sinh chán mặc đồng phục ở tuổi này." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the British teenager passage?", options: { A: "Different aspects of a British teenager's life, including school, uniforms, and fashion.", B: "The history of school uniforms in Britain.", C: "How to avoid bullying in London schools.", D: "The cost of designer clothing in the UK." }, correct: "A", explanation: "Bài đọc mô tả nhiều khía cạnh cuộc sống thanh thiếu niên Anh." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "Parents ought to listen to their children more carefully. → Children ought to ______________ listened to more carefully.", accepted: ["be"], correct: "be", explanation: "Chủ động → bị động với 'ought to be + V3'." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "It is very important for teenagers to develop social skills. → Developing social skills ______________ (be) very important for teenagers.", accepted: ["is"], correct: "is", explanation: "Danh động từ làm chủ ngữ + động từ số ít." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Parents should provide more ______________ (encourage) to help children.", accepted: ["encouragement"], correct: "encouragement", explanation: "encourage (v) → encouragement (n)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "To meet her parents' ______, Lucy practices piano every day.", options: { A: "expectations", B: "pressure", C: "workshop", D: "peers" }, correct: "A", explanation: "meet + parents' expectations = đáp ứng kỳ vọng của cha mẹ." }
  ]
};
