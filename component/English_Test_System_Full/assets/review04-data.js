const REVIEW = {
  id: "test04",
  testFile: "test04.html",
  grade: "Grade 8 — Global Success",
  unit: "Unit 5: Our customs and traditions",
  title: "Knowledge Review — Unit 5, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "greeting", pos: "n", ipa: "/ˈɡriːtɪŋ/", meaning: "lời chào, cách chào hỏi", example: "The \"wai\" is the traditional greeting of Thai people.", exampleVi: "\"Wai\" là lời chào truyền thống của người Thái." },
    { word: "occasion", pos: "n", ipa: "/əˈkeɪʒn/", meaning: "dịp, sự kiện", example: "An engagement ceremony is an official occasion for two families to arrange the wedding.", exampleVi: "Lễ ăn hỏi là một dịp chính thức để hai gia đình sắp xếp đám cưới." },
    { word: "engagement", pos: "n", ipa: "/ɪnˈɡeɪdʒmənt/", meaning: "lễ đính hôn, sự đính hôn", example: "Before an official wedding, a ceremony of engagement must be held first.", exampleVi: "Trước một đám cưới chính thức, một lễ đính hôn phải được tổ chức trước." },
    { word: "fiancé", pos: "n", ipa: "/fiˌɑːnˈseɪ/", meaning: "chồng chưa cưới (hôn phu)", example: "An engagement ceremony marks the relationship of the families of fiancé and fiancée.", exampleVi: "Lễ ăn hỏi đánh dấu mối quan hệ của gia đình chú rể và cô dâu tương lai." },
    { word: "representative", pos: "n", ipa: "/ˌreprɪˈzentətɪv/", meaning: "người đại diện", example: "Each family needs to prepare a representative for the engagement ceremony.", exampleVi: "Mỗi gia đình cần chuẩn bị một người đại diện cho lễ ăn hỏi." },
    { word: "lunar calendar", pos: "n", ipa: "/ˈluːnər ˈkælɪndər/", meaning: "âm lịch", example: "The time of the wedding is chosen based on the lunar calendar.", exampleVi: "Thời điểm cưới được chọn dựa trên âm lịch." },
    { word: "ancestor altar", pos: "n", ipa: "/ˈænsestər ˈɔːltər/", meaning: "bàn thờ tổ tiên", example: "The wedding ceremony starts in front of the ancestor altar.", exampleVi: "Lễ cưới bắt đầu trước bàn thờ tổ tiên." },
    { word: "splendid", pos: "adj", ipa: "/ˈsplendɪd/", meaning: "lộng lẫy, tráng lệ", example: "Paris is absolutely splendid by night.", exampleVi: "Paris cực kỳ lộng lẫy về đêm." },
    { word: "garter", pos: "n", ipa: "/ˈɡɑːrtər/", meaning: "nịt tất (dây đeo tất)", example: "The groom will take the garter after the ceremony and throw it to the single men.", exampleVi: "Chú rể sẽ lấy chiếc nịt tất sau buổi lễ và ném nó cho những người đàn ông độc thân." },
    { word: "bridal veil", pos: "n", ipa: "/ˈbraɪdl veɪl/", meaning: "khăn voan cô dâu", example: "Something borrowed such as a married friend's bridal veil means the bride has friends willing to help her.", exampleVi: "Đồ đi mượn như khăn voan cưới của một người bạn đã kết hôn nghĩa là cô dâu có bạn bè sẵn lòng giúp đỡ." },
    { word: "handkerchief", pos: "n", ipa: "/ˈhæŋkərtʃɪf/", meaning: "khăn tay", example: "Something borrowed such as a friend's handkerchief means the bride has friends who will help her.", exampleVi: "Đồ đi mượn như khăn tay của một người bạn nghĩa là cô dâu có bạn bè sẽ giúp đỡ mình." },
    { word: "reunion", pos: "n", ipa: "/ˌriːˈjuːniən/", meaning: "buổi họp mặt, đoàn tụ", example: "We are having a family reunion next week to celebrate grandmother's 80th birthday.", exampleVi: "Chúng tôi sẽ có buổi họp mặt gia đình vào tuần tới để mừng sinh nhật lần thứ 80 của bà." },
    { word: "festive", pos: "adj", ipa: "/ˈfestɪv/", meaning: "mang không khí lễ hội", example: "The Tet holiday is one of the most important festive celebrations in Vietnam.", exampleVi: "Tết là một trong những lễ hội quan trọng nhất ở Việt Nam." },
    { word: "complicated", pos: "adj", ipa: "/ˈkɑːmplɪkeɪtɪd/", meaning: "phức tạp", example: "Wedding customs in Vietnam can be quite complicated with many steps.", exampleVi: "Phong tục cưới ở Việt Nam có thể khá phức tạp với nhiều bước." },
    { word: "deposit", pos: "n", ipa: "/dɪˈpɑːzɪt/", meaning: "tiền đặt cọc", example: "A 10% deposit is required to secure your table reservation for Tet holiday.", exampleVi: "Cần đặt cọc 10% để giữ chỗ đặt bàn cho dịp Tết." },
    { word: "applause", pos: "n", ipa: "/əˈplɔːz/", meaning: "tràng vỗ tay", example: "Their performance is greeted with loud applause from the crowd.", exampleVi: "Màn biểu diễn của họ được đón nhận bằng những tràng vỗ tay lớn từ đám đông." },
    { word: "acrobat", pos: "n", ipa: "/ˈækrəbæt/", meaning: "diễn viên nhào lộn, diễn viên xiếc", example: "The acrobats are performing an amazing lion dance.", exampleVi: "Các diễn viên nhào lộn đang biểu diễn một màn múa lân tuyệt vời." },
    { word: "miraculous", pos: "adj", ipa: "/məˈrækjələs/", meaning: "kỳ diệu, thần kỳ", example: "It seemed almost miraculous that the whole family could get together after so many years.", exampleVi: "Có vẻ như gần như là điều kỳ diệu khi cả gia đình có thể tụ họp lại sau bao nhiêu năm." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'lễ đính hôn':", options: { A: "engagement", B: "occasion", C: "reunion", D: "deposit" }, correct: "A", explanation: "<b>engagement</b> (n) = lễ đính hôn." },
      { id: "vp2", prompt: "Choose the word that means 'người đại diện':", options: { A: "representative", B: "fiancé", C: "acrobat", D: "greeting" }, correct: "A", explanation: "<b>representative</b> (n) = người đại diện." },
      { id: "vp3", prompt: "Choose the best word: \"Their performance is greeted with loud ______ from the crowd.\"", options: { A: "deposit", B: "applause", C: "garter", D: "veil" }, correct: "B", explanation: "\"be greeted with loud <b>applause</b>\" (được đón nhận bằng những tràng vỗ tay lớn)." },
      { id: "vp4", prompt: "Choose the word that means 'âm lịch':", options: { A: "calendar year", B: "lunar calendar", C: "solar system", D: "leap year" }, correct: "B", explanation: "<b>lunar calendar</b> (n) = âm lịch." },
      { id: "vp5", prompt: "\"Wedding customs in Vietnam can be quite ______ with many steps.\"", options: { A: "complicated", B: "festive", C: "splendid", D: "miraculous" }, correct: "A", explanation: "<b>complicated</b> (adj) = phức tạp, phù hợp với việc phong tục cưới có nhiều bước." },
      { id: "vp6", prompt: "Choose the word that means 'tiền đặt cọc':", options: { A: "applause", B: "deposit", C: "garter", D: "handkerchief" }, correct: "B", explanation: "<b>deposit</b> (n) = tiền đặt cọc." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The \"wai\" is the traditional ______________ (lời chào) of Thai people.", accepted: ["greeting"], correct: "greeting", explanation: "<b>greeting</b> (n) = lời chào." },
      { id: "vf2", prompt: "Before an official wedding, a ceremony of ______________ (đính hôn) must be held first.", accepted: ["engagement"], correct: "engagement", explanation: "<b>engagement</b> (n) = sự đính hôn." },
      { id: "vf3", prompt: "The time of the wedding is chosen based on the ______________ (âm lịch).", accepted: ["lunar calendar"], correct: "lunar calendar", explanation: "<b>lunar calendar</b> (n) = âm lịch." },
      { id: "vf4", prompt: "The wedding ceremony starts in front of the ______________ (bàn thờ tổ tiên).", accepted: ["ancestor altar"], correct: "ancestor altar", explanation: "<b>ancestor altar</b> (n) = bàn thờ tổ tiên." },
      { id: "vf5", prompt: "Something borrowed such as a friend's ______________ (khăn tay) means the bride has friends who will help her.", accepted: ["handkerchief"], correct: "handkerchief", explanation: "<b>handkerchief</b> (n) = khăn tay." },
      { id: "vf6", prompt: "We are having a family ______________ (buổi họp mặt) next week to celebrate grandmother's birthday.", accepted: ["reunion"], correct: "reunion", explanation: "<b>reunion</b> (n) = buổi họp mặt, đoàn tụ." }
    ],
    matching: {
      left: ["greeting", "occasion", "splendid", "garter", "applause", "acrobat"],
      right: ["lời chào", "dịp, sự kiện", "lộng lẫy", "nịt tất", "tràng vỗ tay", "diễn viên nhào lộn"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "Tom: \"Look! The ______ are performing an amazing lion dance.\" (ACROBAT)", options: { A: "acrobats", B: "acrobatic", C: "acrobatically", D: "acrobat" }, correct: "A", explanation: "Cần danh từ số nhiều làm chủ ngữ với \"are performing\" → acrobat (n) → <b>acrobats</b>." },
      { id: "cw2", prompt: "This reunion dinner is very ______ because it is our first time meeting in ten years. (MIRACLE)", options: { A: "miracle", B: "miraculous", C: "miraculously", D: "miracles" }, correct: "B", explanation: "Cần tính từ đứng sau \"be\" (very ______) → miracle (n) → <b>miraculous</b> (adj)." },
      { id: "cw3", prompt: "Gifts that are put in trays are ______ by the family a few days before the ceremony. (PREPARE)", options: { A: "prepare", B: "prepared", C: "preparing", D: "preparation" }, correct: "B", explanation: "Cần dạng bị động \"are + V3/-ed\" → prepare (v) → <b>prepared</b>." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'representative' mean?", options: { A: "người đại diện", B: "người lạ", C: "người hàng xóm", D: "người thân" }, correct: "A", explanation: "representative (n) = người đại diện." },
      { id: "wm2", prompt: "What does 'complicated' mean?", options: { A: "đơn giản", B: "phức tạp", C: "rõ ràng", D: "nhanh chóng" }, correct: "B", explanation: "complicated (adj) = phức tạp." },
      { id: "wm3", prompt: "What does 'festive' mean?", options: { A: "buồn bã", B: "mang không khí lễ hội", C: "yên tĩnh", D: "nghiêm túc" }, correct: "B", explanation: "festive (adj) = mang không khí lễ hội, tưng bừng." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The wedding was a very (SPLEND) ______________ event that everyone still remembers.", accepted: ["splendid"], correct: "splendid", explanation: "Cần tính từ sau \"very\" → splendid (adj): lộng lẫy." },
      { id: "wf2", prompt: "The representatives of the two families will make formal (ANNOUNCE) ______________ during the ceremony.", accepted: ["announcements"], correct: "announcements", explanation: "\"make formal announcements\" — cần danh từ số nhiều vì không có mạo từ trước chỗ trống. announce (v) → <b>announcement(s)</b> (n)." },
      { id: "wf3", prompt: "It was an emotional and (MIRACLE) ______________ reunion between the mother and her long-lost son.", accepted: ["miraculous"], correct: "miraculous", explanation: "Cần tính từ đứng trước \"reunion\" → miracle (n) → <b>miraculous</b> (adj)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "must not ⇄ be (not) allowed to V (diễn tả sự cấm đoán)",
      usage: "\"must not + V\" diễn tả một điều BỊ CẤM, không được phép làm. \"be not allowed to + V\" diễn tả cùng ý nghĩa cấm đoán đó, thường mang sắc thái trang trọng/văn viết hơn.",
      formulas: [
        "Khẳng định cấm đoán: S + must not + V.",
        "S + am/is/are + not allowed + to + V.",
        "You must not talk loudly. → You are not allowed to talk loudly."
      ],
      signals: ["must not", "be (not) allowed to", "it is a strict rule"],
      examples: [
        { en: "You must not talk loudly in the library because it is a strict rule.", vi: "Bạn không được nói to trong thư viện vì đó là quy định nghiêm ngặt." },
        { en: "You are not allowed to talk loudly in the library.", vi: "Bạn không được phép nói to trong thư viện." }
      ],
      mistakes: [
        { wrong: "You are not allow to talk loudly.", right: "You are not allowed to talk loudly." },
        { wrong: "You not allowed to talk loudly.", right: "You are not allowed to talk loudly." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "mcq", prompt: "You ______ point at others while talking because it is impolite.", options: { A: "must not", B: "don't have to", C: "needn't", D: "may" }, correct: "A", explanation: "Cần dạng cấm đoán mạnh \"không được\" → must not." },
          { id: "g1l1b", type: "fillblank", prompt: "You must not park here. → You ______________ (allowed) park here.", accepted: ["are not allowed to"], correct: "are not allowed to", explanation: "must not ⇄ are not allowed to." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Guests must not wear casual clothes at the ceremony. → Guests ______________ (allow) wear casual clothes at the ceremony.", accepted: ["are not allowed to"], correct: "are not allowed to", explanation: "must not ⇄ are not allowed to." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Visitors must not take photos inside the temple.' → Visitors ______________ (be not allowed to take photos inside the temple).", accepted: ["are not allowed to take photos inside the temple"], correct: "are not allowed to take photos inside the temple", explanation: "must not + V → be not allowed to + V." }
        ]
      }
    },
    {
      id: "g2", name: "should ⇄ It is necessary for sb to V (lời khuyên nên làm gì)",
      usage: "\"S + should + V\" khuyên ai đó NÊN làm gì. \"It is necessary for + O + to + V\" diễn tả cùng ý nghĩa (việc gì đó cần thiết/nên được thực hiện đối với ai), trang trọng hơn.",
      formulas: [
        "S + should + V.",
        "It is necessary for + O + to + V.",
        "Children should greet the elderly respectfully. → It is necessary for children to greet the elderly respectfully."
      ],
      signals: ["should", "it is necessary for...to..."],
      examples: [
        { en: "Children should greet the elderly respectfully.", vi: "Trẻ em nên chào hỏi người lớn tuổi một cách lễ phép." },
        { en: "It is necessary for children to greet the elderly respectfully.", vi: "Việc trẻ em chào hỏi người lớn tuổi một cách lễ phép là cần thiết." }
      ],
      mistakes: [
        { wrong: "It is necessary for children greet the elderly.", right: "It is necessary for children to greet the elderly." },
        { wrong: "It is necessary children to greet the elderly.", right: "It is necessary for children to greet the elderly." }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "Children should greet the elderly respectfully. → It is necessary ______________ children to greet the elderly respectfully.", accepted: ["for"], correct: "for", explanation: "Cấu trúc: It is necessary <b>for</b> + O + to V." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Guests should arrive on time for the ceremony. → It is necessary for guests ______________ (arrive) on time for the ceremony.", accepted: ["to arrive"], correct: "to arrive", explanation: "Sau \"for + O\" cần \"to + V nguyên mẫu\"." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Brides should choose their wedding dress carefully.' → It is necessary ______________ (for brides to choose their wedding dress carefully).", accepted: ["for brides to choose their wedding dress carefully"], correct: "for brides to choose their wedding dress carefully", explanation: "should + V → It is necessary for + O + to V." }
        ]
      }
    },
    {
      id: "g3", name: "So sánh nhất ⇄ No other... as/so...as (so sánh ngang bằng phủ định)",
      usage: "Câu so sánh nhất (\"the most + adj\") có thể chuyển sang cấu trúc so sánh ngang bằng ở dạng phủ định \"No other + N + is + as/so + adj + as + S\" để nhấn mạnh rằng không có gì/ai khác bằng được đối tượng đang nói tới.",
      formulas: [
        "S + is + the most + adj + N (so sánh nhất).",
        "No other + N + is + as/so + adj + as + S.",
        "This is the most splendid city I have visited. → No other city I have visited is as/so splendid as this city."
      ],
      signals: ["the most + adj", "No other...as/so...as"],
      examples: [
        { en: "This is the most splendid city I have ever visited by night.", vi: "Đây là thành phố lộng lẫy nhất tôi từng ghé thăm vào ban đêm." },
        { en: "No other city I have visited by night is as splendid as this city.", vi: "Không có thành phố nào khác mà tôi đã ghé thăm vào ban đêm lộng lẫy bằng thành phố này." }
      ],
      mistakes: [
        { wrong: "No other city I have visited is splendid as this city.", right: "No other city I have visited is as splendid as this city." },
        { wrong: "No other city I have visited is as splendid than this city.", right: "No other city I have visited is as splendid as this city." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "This is the most exciting festival I have attended. → No other festival I have attended is ______________ exciting as this one.", accepted: ["as", "so"], correct: "as / so", explanation: "Cả \"as\" và \"so\" đều dùng được trong cấu trúc so sánh ngang bằng phủ định." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'This is the most beautiful garter I have ever seen.' → No other garter I have ever seen is ______________ (as beautiful as this one).", accepted: ["as beautiful as this one", "so beautiful as this one"], correct: "as beautiful as this one", explanation: "the most + adj → No other + N + is + as/so + adj + as + S." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'She is the most talented acrobat in the circus.' → No other acrobat in the circus is ______________ (as talented as her).", accepted: ["as talented as her", "so talented as her"], correct: "as talented as her", explanation: "the most + adj → No other + N + is + as/so + adj + as + S." }
        ]
      }
    },
    {
      id: "g4", name: "so + adj + that... ⇄ too + adj + for sb to V (kết quả/mức độ)",
      usage: "\"so + adj + that + S + will/can never + V\" diễn tả một mức độ dẫn tới kết quả nào đó. Có thể chuyển sang \"too + adj + for + sb + to + V\" — cùng diễn tả mức độ quá cao/quá thấp khiến hành động không thể xảy ra.",
      formulas: [
        "S + is + so + adj + that + S + will never + V.",
        "S + is + too + adj + for + sb + to + V.",
        "His current job is so good that he will never quit it. → His current job is too good for him to ever quit."
      ],
      signals: ["so...that", "too...for sb to..."],
      examples: [
        { en: "His current job is so good that he will never quit it.", vi: "Công việc hiện tại của anh ấy tốt đến nỗi anh ấy sẽ không bao giờ nghỉ việc." },
        { en: "His current job is too good for him to ever quit.", vi: "Công việc hiện tại của anh ấy quá tốt để anh ấy có thể nghỉ việc." }
      ],
      mistakes: [
        { wrong: "His job is too good that he will never quit.", right: "His job is so good that he will never quit. / His job is too good for him to ever quit." },
        { wrong: "His job is too good to him to quit.", right: "His job is too good for him to quit." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "This wedding is so splendid that no one will ever forget it. → This wedding is ______________ (splendid) for anyone to ever forget.", accepted: ["too splendid"], correct: "too splendid", explanation: "so + adj + that → too + adj + for sb to V." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "The ceremony was so long that the guests could not stay until the end. → The ceremony was ______________ (long) for the guests to stay until the end.", accepted: ["too long"], correct: "too long", explanation: "so + adj + that → too + adj + for sb to V." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite: 'The gift is so expensive that she cannot afford it.' → The gift is ______________ (too expensive for her to afford).", accepted: ["too expensive for her to afford"], correct: "too expensive for her to afford", explanation: "so + adj + that + S + cannot + V → too + adj + for sb + to V." }
        ]
      }
    },
    {
      id: "g5", name: "Động từ khuyết thiếu: can / shouldn't / had better / ought to",
      usage: "Ôn tập các động từ khuyết thiếu thường gặp: <b>can</b> (khả năng/sự cho phép), <b>shouldn't</b> (lời khuyên không nên làm gì), <b>had better (not)</b> (lời khuyên mạnh, hàm ý hậu quả nếu không làm theo), <b>ought to</b> (nên làm gì, gần nghĩa với should).",
      formulas: [
        "can + V: diễn tả khả năng hoặc sự cho phép.",
        "shouldn't + V: lời khuyên không nên làm gì.",
        "had better (not) + V: lời khuyên mạnh, có hàm ý hậu quả nếu không làm theo.",
        "ought to + V: nên làm gì (gần nghĩa với should)."
      ],
      signals: ["can", "shouldn't", "had better", "ought to"],
      examples: [
        { en: "You can fly this afternoon if you don't mind changing planes in Paris.", vi: "Bạn có thể bay chiều nay nếu không phiền đổi chuyến ở Paris." },
        { en: "You shouldn't talk loudly in public because it is considered impolite.", vi: "Bạn không nên nói to ở nơi công cộng vì bị coi là bất lịch sự." }
      ],
      mistakes: [
        { wrong: "You had better to leave now.", right: "You had better leave now." },
        { wrong: "You ought leave now.", right: "You ought to leave now." }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "mcq", prompt: "You ______ talk loudly in public because it is considered impolite.", options: { A: "don't have to", B: "had better", C: "shouldn't", D: "ought to" }, correct: "C", explanation: "Cần dạng phủ định mang nghĩa \"không nên\" → shouldn't." }
        ],
        level2: [
          { id: "g5l2a", type: "mcq", prompt: "You ______ fly this afternoon if you don't mind changing planes in Paris.", options: { A: "have to", B: "must", C: "ought to", D: "can" }, correct: "D", explanation: "Diễn tả một khả năng/lựa chọn (không bắt buộc) → can." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps a similar meaning of strong advice: 'It's a bad idea to be late for the engagement ceremony.' → You ______________ (had better) be late for the engagement ceremony.", accepted: ["had better not"], correct: "had better not", explanation: "Ý khuyên mạnh không nên làm gì → had better not + V." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Although there are various wedding styles in America, most weddings still follow certain traditions. One of those is an old saying that dates back to 19th century England about what a <mark data-w=\"bride\">bride</mark> should wear or carry: \"Something old, something new, something borrowed, something blue.\"<br><br>A bride wears something old to remind her of her family and the past. Some brides wear their mother's wedding dress or a piece of her jewelry. Something new means good luck and hope for a happy future with her new husband. Again, this item may be the dress, but often it is a pair of new shoes. Something borrowed such as a friend's <mark data-w=\"handkerchief\">handkerchief</mark> or a married friend's bridal <mark data-w=\"veil\">veil</mark> means the bride has friends and family who are willing to help her. Something blue is a symbol of trust and <mark data-w=\"faith\">faith</mark> between the couple. These days, some brides are creative with this item by painting their fingernails a light blue color or wearing a <mark data-w=\"garter\">garter</mark> on their leg. Another tradition says that the <mark data-w=\"groom\">groom</mark> should take the garter after the ceremony and throw it to the single men. The man who catches it will be the next one to get married.",
    vocabInContext: {
      bride: "cô dâu",
      handkerchief: "khăn tay",
      veil: "khăn voan (cô dâu)",
      faith: "niềm tin, sự tin tưởng",
      garter: "nịt tất",
      groom: "chú rể"
    },
    translation: "Mặc dù có nhiều kiểu đám cưới khác nhau ở Mỹ, hầu hết các đám cưới vẫn tuân theo một số truyền thống nhất định. Một trong số đó là câu nói cổ có từ thế kỷ 19 ở Anh về những gì cô dâu nên mặc hoặc mang theo: \"Một thứ cũ, một thứ mới, một thứ đi mượn, một thứ màu xanh.\"<br><br>Cô dâu mặc một thứ cũ để nhắc nhở về gia đình và quá khứ của mình. Một số cô dâu mặc váy cưới của mẹ mình hoặc mang một món trang sức của mẹ. Một thứ mới tượng trưng cho may mắn và hy vọng về một tương lai hạnh phúc bên người chồng mới. Thứ này cũng có thể là chiếc váy, nhưng thường là một đôi giày mới. Một thứ đi mượn như chiếc khăn tay của bạn bè hoặc chiếc khăn voan cưới của một người bạn đã kết hôn nghĩa là cô dâu có bạn bè và gia đình sẵn lòng giúp đỡ mình. Một thứ màu xanh là biểu tượng của niềm tin và sự tin tưởng giữa cặp đôi. Ngày nay, một số cô dâu sáng tạo với món đồ này bằng cách sơn móng tay màu xanh nhạt hoặc đeo nịt tất trên chân. Một truyền thống khác nói rằng chú rể sẽ lấy chiếc nịt tất sau buổi lễ và ném nó cho những người đàn ông độc thân. Người đàn ông bắt được nó sẽ là người tiếp theo kết hôn.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "The tradition of \"Something old, something new, something borrowed, something blue\" started in America.", correct: "False", explanation: "Sai. Bài đọc nói câu nói này \"dates back to 19th century England\" (bắt nguồn từ nước Anh thế kỷ 19), không phải Mỹ." },
      { id: "r2", type: "truefalse", prompt: "A bride's mother's wedding dress can be used as \"something old\".", correct: "True", explanation: "Đúng. Bài đọc: \"Some brides wear their mother's wedding dress... as something old\"." },
      { id: "r3", type: "truefalse", prompt: "\"Something borrowed\" represents the willingness of friends and family to assist the bride.", correct: "True", explanation: "Đúng. Bài đọc: \"Something borrowed... means the bride has friends and family who are willing to help her\"." },
      { id: "r4", type: "truefalse", prompt: "Only the single women stand a chance to get married next according to the garter tradition.", correct: "False", explanation: "Sai. Bài đọc nói chú rể ném nịt tất cho các \"single men\" (đàn ông độc thân), không liên quan đến phụ nữ độc thân." },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "Traditional items that an American bride wears or carries and their meanings.", B: "The differences between American and English weddings.", C: "The historical background of 19th-century wedding customs.", D: "How modern brides choose their wedding dresses and jewelry." }, correct: "A", explanation: "Cả bài giải thích ý nghĩa của \"something old, new, borrowed, blue\" — những vật cô dâu Mỹ mặc/mang theo và ý nghĩa của chúng → đáp án A." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "The bride throws her leg garter to the single men after the wedding ceremony.", B: "\"Something new\" usually refers to a pair of new shoes or the wedding dress.", C: "A light blue fingernail color can be a creative choice for \"something blue\".", D: "\"Something blue\" reflects the trust and faith between the bride and the groom." }, correct: "A", explanation: "Bài đọc nói chính chú rể (the groom) mới là người ném nịt tất cho các chàng trai độc thân, không phải cô dâu → câu A gán nhầm hành động này cho cô dâu." },
      { id: "r7", type: "mcq", prompt: "Why does a bride wear something new according to the passage?", options: { A: "Because it symbolizes good luck and hope for a happy future.", B: "Because it is required by law.", C: "Because it must always be blue.", D: "Because it belonged to her grandmother." }, correct: "A", explanation: "Bài đọc: \"Something new means good luck and hope for a happy future with her new husband.\"" },
      { id: "r8", type: "fillblank", prompt: "Find the word in the passage that means 'niềm tin, sự tin tưởng' (n).", accepted: ["faith"], correct: "faith", explanation: "\"a symbol of trust and faith\" — faith (n) = niềm tin, sự tin tưởng." },
      { id: "r9", type: "mcq", prompt: "What does the groom traditionally do with the garter after the wedding ceremony, according to the passage?", options: { A: "He gives it to the bride's mother.", B: "He keeps it as a souvenir.", C: "He throws it to the single men.", D: "He buries it in the garden." }, correct: "C", explanation: "Bài đọc: \"the groom should take the garter after the ceremony and throw it to the single men.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "An engagement ceremony is an official occasion for two families to arrange the wedding.", suggested: "Lễ ăn hỏi là một dịp chính thức để hai gia đình sắp xếp đám cưới.", notes: "Cấu trúc: 'an official occasion for sb to V' dịch là 'một dịp chính thức để ai đó làm gì'." },
    { id: "t2", en: "The number of trays must be an odd number because odd numbers are thought to bring luck to the couple.", suggested: "Số lượng mâm quả phải là số lẻ vì người ta cho rằng số lẻ mang lại may mắn cho cặp đôi.", notes: "Cấu trúc bị động 'be thought to V' dịch là 'được cho là'." },
    { id: "t3", en: "A bride wears something old to remind her of her family and the past.", suggested: "Cô dâu mặc một thứ cũ để nhắc nhở về gia đình và quá khứ của mình.", notes: "Cấu trúc: 'remind sb of sth' = nhắc ai nhớ về điều gì." },
    { id: "t4", en: "Something blue is a symbol of trust and faith between the couple.", suggested: "Một thứ màu xanh là biểu tượng của niềm tin và sự tin tưởng giữa cặp đôi.", notes: "Từ vựng: <i>a symbol of</i> = biểu tượng của." },
    { id: "t5", en: "The man who catches the garter will be the next one to get married.", suggested: "Người đàn ông bắt được chiếc nịt tất sẽ là người tiếp theo kết hôn.", notes: "Mệnh đề quan hệ 'who catches the garter' bổ nghĩa cho chủ ngữ 'the man'." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "must not ⇄ be not allowed to V (sự cấm đoán)",
      formula: "S + must not + V  →  S + am/is/are + not allowed + to + V",
      example: { before: "You must not talk loudly in the library.", after: "You are not allowed to talk loudly in the library." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "You must not run in the temple area. → You ______________ run in the temple area.", accepted: ["are not allowed to"], correct: "are not allowed to", explanation: "must not ⇄ are not allowed to." },
        { id: "tr1p2", type: "fillblank", prompt: "Visitors must not touch the exhibits in the museum. → Visitors ______________ touch the exhibits in the museum.", accepted: ["are not allowed to"], correct: "are not allowed to", explanation: "must not ⇄ are not allowed to." }
      ]
    },
    {
      id: "tr2", name: "should ⇄ It is necessary for sb to V (lời khuyên nên làm gì)",
      formula: "S + should + V  →  It is necessary for + O + to + V",
      example: { before: "Children should greet the elderly respectfully.", after: "It is necessary for children to greet the elderly respectfully." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Guests should arrive early for the ceremony. → It is necessary ______________ guests to arrive early for the ceremony.", accepted: ["for"], correct: "for", explanation: "It is necessary FOR + O + to V." },
        { id: "tr2p2", type: "fillblank", prompt: "The bride should choose her dress carefully. → It is necessary for the bride ______________ (choose) her dress carefully.", accepted: ["to choose"], correct: "to choose", explanation: "Sau 'for + O' cần 'to + V nguyên mẫu'." }
      ]
    },
    {
      id: "tr3", name: "So sánh nhất ⇄ No other...as/so...as (so sánh ngang bằng phủ định)",
      formula: "S + is + the most + adj + N  →  No other + N + is + as/so + adj + as + S",
      example: { before: "This is the most splendid city I have visited.", after: "No other city I have visited is as splendid as this city." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "This is the most memorable wedding I have ever attended. → No other wedding I have ever attended is ______________ (memorable) as this one.", accepted: ["as memorable", "so memorable"], correct: "as memorable", explanation: "the most + adj → No other + N + is + as/so + adj + as + S." },
        { id: "tr3p2", type: "fillblank", prompt: "She is the most graceful bride I have ever seen. → No other bride I have ever seen is ______________ (graceful) as her.", accepted: ["as graceful", "so graceful"], correct: "as graceful", explanation: "the most + adj → No other + N + is + as/so + adj + as + S." }
      ]
    },
    {
      id: "tr4", name: "so + adj + that... ⇄ too + adj + for sb to V (mức độ dẫn đến kết quả)",
      formula: "S + is + so + adj + that + S + will never + V  →  S + is + too + adj + for + sb + to + V",
      example: { before: "His current job is so good that he will never quit it.", after: "His current job is too good for him to ever quit." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "The dress was so expensive that she couldn't buy it. → The dress was ______________ (expensive) for her to buy.", accepted: ["too expensive"], correct: "too expensive", explanation: "so + adj + that + S + couldn't V → too + adj + for sb + to V." },
        { id: "tr4p2", type: "fillblank", prompt: "The ceremony was so crowded that we couldn't find a seat. → The ceremony was ______________ (crowded) for us to find a seat.", accepted: ["too crowded"], correct: "too crowded", explanation: "so + adj + that + S + couldn't V → too + adj + for sb + to V." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Occasion' means:", options: { A: "dịp, sự kiện", B: "nịt tất", C: "khăn tay", D: "bàn thờ" }, correct: "A", explanation: "occasion (n) = dịp, sự kiện." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Complicated' means:", options: { A: "đơn giản", B: "phức tạp", C: "nhanh chóng", D: "rõ ràng" }, correct: "B", explanation: "complicated (adj) = phức tạp." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "We are having a family ______________ (họp mặt) this weekend.", accepted: ["reunion"], correct: "reunion", explanation: "reunion (n) = buổi họp mặt." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "You ______ talk loudly in public because it is considered impolite.", options: { A: "don't have to", B: "had better", C: "shouldn't", D: "ought to" }, correct: "C", explanation: "Cần dạng phủ định mang nghĩa \"không nên\" → shouldn't." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Gifts ______ are put in trays are prepared by the family before the ceremony.", options: { A: "which", B: "who", C: "where", D: "what" }, correct: "A", explanation: "Đại từ quan hệ thay cho danh từ chỉ vật \"Gifts\" → which." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Visitors must not take photos here. → Visitors ______________ (allow) take photos here.", accepted: ["are not allowed to"], correct: "are not allowed to", explanation: "must not ⇄ are not allowed to." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "This is the most splendid city I have visited. → No other city I have visited is ______________ (as/so) splendid as this city.", accepted: ["as", "so"], correct: "as / so", explanation: "the most + adj → No other...as/so...as." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "The saying 'something old, something new...' dates back to 19th century England.", correct: "True", explanation: "Bài đọc: 'dates back to 19th century England'." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Only single women can catch the garter to be the next to marry.", correct: "False", explanation: "Bài đọc nói chỉ 'single men' (đàn ông độc thân) mới bắt nịt tất." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the passage about American wedding traditions?", options: { A: "Traditional items a bride wears/carries and their meanings.", B: "The cost of modern weddings.", C: "How to organize a wedding reception.", D: "The history of English weddings." }, correct: "A", explanation: "Bài đọc giải thích ý nghĩa những vật cô dâu Mỹ mặc/mang theo." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "Children should greet the elderly respectfully. → It is necessary ______________ children to greet the elderly respectfully.", accepted: ["for"], correct: "for", explanation: "It is necessary FOR + O + to V." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "His current job is so good that he will never quit it. → His current job is ______________ (good) for him to ever quit.", accepted: ["too good"], correct: "too good", explanation: "so + adj + that → too + adj + for sb to V." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "You must not talk loudly in the library. → You ______________ talk loudly in the library.", accepted: ["are not allowed to"], correct: "are not allowed to", explanation: "must not ⇄ are not allowed to." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Their performance is greeted with loud ______ from the crowd.", options: { A: "garter", B: "applause", C: "deposit", D: "veil" }, correct: "B", explanation: "'be greeted with loud applause' = được đón nhận bằng những tràng vỗ tay lớn." }
  ]
};
