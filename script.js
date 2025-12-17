// Word lists for different lengths
const WORD_LISTS = {
    4: ['ABLE', 'ALSO', 'AREA', 'BACK', 'BALL', 'BANK', 'BASE', 'BEAR', 'BEAT', 'BEEN',
        'BEST', 'BIRD', 'BLUE', 'BOAT', 'BODY', 'BOOK', 'BORN', 'BOTH', 'BUSY', 'CALL',
        'CAME', 'CARE', 'CASE', 'CELL', 'CITY', 'CLUB', 'COLD', 'COME', 'COST', 'DARK',
        'DATA', 'DEAL', 'DEEP', 'DOOR', 'DOWN', 'DRAW', 'DROP', 'EACH', 'EASY', 'EDGE',
        'EVEN', 'EVER', 'FACE', 'FACT', 'FAIL', 'FALL', 'FAST', 'FEAR', 'FEEL', 'FEET',
        'FILL', 'FILM', 'FIND', 'FINE', 'FIRE', 'FIRM', 'FISH', 'FIVE', 'FLAT', 'FLOW',
        'FOOD', 'FOOT', 'FORM', 'FOUR', 'FREE', 'FROM', 'FULL', 'FUND', 'GAME', 'GAVE',
        'GIRL', 'GIVE', 'GOAL', 'GOES', 'GOLD', 'GONE', 'GOOD', 'GREW', 'GROW', 'HALF',
        'HALL', 'HAND', 'HARD', 'HAVE', 'HEAD', 'HEAR', 'HEAT', 'HELD', 'HELP', 'HERE',
        'HIGH', 'HOLD', 'HOME', 'HOPE', 'HOUR', 'HUGE', 'IDEA', 'INTO', 'ITEM', 'JOIN',
        'JUST', 'KEEP', 'KEPT', 'KIND', 'KING', 'KNEW', 'KNOW', 'LAND', 'LAST', 'LATE',
        'LEAD', 'LEFT', 'LESS', 'LIFE', 'LIKE', 'LINE', 'LIST', 'LIVE', 'LONG', 'LOOK',
        'LOSE', 'LOSS', 'LOST', 'LOVE', 'MAIN', 'MAKE', 'MANY', 'MARK', 'MEAN', 'MEET',
        'MIND', 'MISS', 'MORE', 'MOST', 'MOVE', 'MUCH', 'MUST', 'NAME', 'NEAR', 'NEED',
        'NEVER', 'NEXT', 'NICE', 'OPEN', 'OVER', 'PAGE', 'PAIN', 'PAIR', 'PARK', 'PART',
        'PASS', 'PAST', 'PATH', 'PICK', 'PLAN', 'PLAY', 'POOR', 'PULL', 'PUSH', 'RACE',
        'RATE', 'READ', 'REAL', 'REST', 'RISE', 'RISK', 'ROAD', 'ROCK', 'ROLE', 'ROOM',
        'RULE', 'SAFE', 'SAID', 'SALE', 'SAME', 'SAVE', 'SEAT', 'SEEM', 'SELF', 'SELL',
        'SEND', 'SENT', 'SHOT', 'SHOW', 'SIDE', 'SIGN', 'SITE', 'SIZE', 'SKIN', 'SOME',
        'SONG', 'SOON', 'SORT', 'STAR', 'STAY', 'STEP', 'STOP', 'SUCH', 'SURE', 'TAKE',
        'TALK', 'TASK', 'TEAM', 'TELL', 'TERM', 'TEST', 'THAN', 'THAT', 'THEM', 'THEN',
        'THEY', 'THIS', 'TIME', 'TOWN', 'TREE', 'TRUE', 'TURN', 'TYPE', 'UNIT', 'UPON',
        'USED', 'USER', 'VERY', 'VIEW', 'VOTE', 'WAIT', 'WALK', 'WALL', 'WANT', 'WARM',
        'WAVE', 'WAYS', 'WEAR', 'WEEK', 'WELL', 'WENT', 'WERE', 'WEST', 'WHAT', 'WHEN',
        'WIDE', 'WILL', 'WIND', 'WISH', 'WITH', 'WORD', 'WORK', 'YARD', 'YEAH', 'YEAR'],

    5: ['ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
        'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE',
        'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'ANGEL', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE',
        'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AUDIO', 'AUDIT', 'AVOID',
        'AWARD', 'AWARE', 'BADLY', 'BAKER', 'BASES', 'BASIC', 'BEACH', 'BEGAN', 'BEGIN', 'BEING',
        'BELOW', 'BENCH', 'BILLY', 'BIRTH', 'BLACK', 'BLADE', 'BLAME', 'BLANK', 'BLAST', 'BLEED',
        'BLESS', 'BLIND', 'BLOCK', 'BLOOD', 'BLOOM', 'BOARD', 'BOOST', 'BOOTH', 'BOUND', 'BRAIN',
        'BRAND', 'BREAD', 'BREAK', 'BREED', 'BRIEF', 'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD',
        'BUILT', 'BUYER', 'CABLE', 'CALIF', 'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHART',
        'CHASE', 'CHEAP', 'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE', 'CLAIM', 'CLASS',
        'CLEAN', 'CLEAR', 'CLICK', 'CLOCK', 'CLOSE', 'COACH', 'COAST', 'COULD', 'COUNT', 'COURT',
        'COVER', 'CRACK', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME', 'CROSS', 'CROWD', 'CROWN',
        'CRUDE', 'CURVE', 'CYCLE', 'DAILY', 'DANCE', 'DATED', 'DEALT', 'DEATH', 'DEBUT', 'DELAY',
        'DEPTH', 'DOING', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA', 'DRANK', 'DRAWN', 'DREAM', 'DRESS',
        'DRILL', 'DRINK', 'DRIVE', 'DROVE', 'DYING', 'EAGER', 'EARLY', 'EARTH', 'EIGHT', 'ELITE',
        'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY', 'EXACT',
        'EXIST', 'EXTRA', 'FAITH', 'FALSE', 'FAULT', 'FIBER', 'FIELD', 'FIFTH', 'FIFTY', 'FIGHT',
        'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET', 'FLOOR', 'FLUID', 'FOCUS', 'FORCE', 'FORTH',
        'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH', 'FRONT', 'FRUIT', 'FULLY',
        'FUNNY', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GOING', 'GRACE', 'GRADE', 'GRAND', 'GRANT',
        'GRASS', 'GREAT', 'GREEN', 'GROSS', 'GROUP', 'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE',
        'HAPPY', 'HARRY', 'HEART', 'HEAVY', 'HENCE', 'HENRY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN',
        'IDEAL', 'IMAGE', 'IMPLY', 'INDEX', 'INNER', 'INPUT', 'ISSUE', 'JAPAN', 'JIMMY', 'JOINT',
        'JONES', 'JUDGE', 'KNOWN', 'LABEL', 'LARGE', 'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEARN',
        'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEMON', 'LEVEL', 'LEWIS', 'LIGHT', 'LIMIT', 'LINKS',
        'LIVES', 'LOCAL', 'LOGIC', 'LOOSE', 'LOWER', 'LUCKY', 'LUNCH', 'LYING', 'MAGIC', 'MAJOR',
        'MAKER', 'MARCH', 'MARIA', 'MATCH', 'MAYBE', 'MAYOR', 'MEANT', 'MEDIA', 'METAL', 'MIGHT',
        'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MONEY', 'MONTH', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE',
        'MOUTH', 'MOVIE', 'MUSIC', 'NEEDS', 'NEVER', 'NEWLY', 'NIGHT', 'NOISE', 'NORTH', 'NOTED',
        'NOVEL', 'NURSE', 'OCCUR', 'OCEAN', 'OFFER', 'OFTEN', 'ORDER', 'OTHER', 'OUGHT', 'PAINT',
        'PANEL', 'PAPER', 'PARTY', 'PEACE', 'PETER', 'PHASE', 'PHONE', 'PHOTO', 'PIECE', 'PILOT',
        'PITCH', 'PLACE', 'PLAIN', 'PLANE', 'PLANT', 'PLATE', 'POINT', 'POUND', 'POWER', 'PRESS',
        'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE', 'PROOF', 'PROUD', 'PROVE', 'QUEEN',
        'QUICK', 'QUIET', 'QUITE', 'RADIO', 'RAISE', 'RANGE', 'RAPID', 'RATIO', 'REACH', 'READY',
        'REFER', 'RIGHT', 'RIVAL', 'RIVER', 'ROBIN', 'ROGER', 'ROMAN', 'ROUGH', 'ROUND', 'ROUTE',
        'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SERVE', 'SEVEN', 'SHALL',
        'SHAPE', 'SHARE', 'SHARP', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE', 'SHIRT', 'SHOCK',
        'SHOOT', 'SHORT', 'SHOWN', 'SIGHT', 'SINCE', 'SIXTH', 'SIXTY', 'SIZED', 'SKILL', 'SLEEP',
        'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SOLID', 'SOLVE', 'SORRY', 'SOUND',
        'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED', 'SPEND', 'SPENT', 'SPLIT', 'SPOKE', 'SPORT',
        'STAFF', 'STAGE', 'STAKE', 'STAND', 'START', 'STATE', 'STEAM', 'STEEL', 'STICK', 'STILL',
        'STOCK', 'STONE', 'STOOD', 'STORE', 'STORM', 'STORY', 'STRIP', 'STUCK', 'STUDY', 'STUFF',
        'STYLE', 'SUGAR', 'SUITE', 'SUPER', 'SWEET', 'TABLE', 'TAKEN', 'TASTE', 'TAXES', 'TEACH',
        'TERRY', 'TEXAS', 'THANK', 'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THING',
        'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW', 'TIGHT', 'TIMES', 'TITLE', 'TODAY',
        'TOPIC', 'TOTAL', 'TOUCH', 'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIN', 'TREAT', 'TREND',
        'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TROOP', 'TRUCK', 'TRULY', 'TRUST', 'TRUTH',
        'TWICE', 'UNDER', 'UNDUE', 'UNION', 'UNITY', 'UNTIL', 'UPPER', 'UPSET', 'URBAN', 'USAGE',
        'USUAL', 'VALID', 'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL', 'VOCAL', 'VOICE', 'WASTE',
        'WATCH', 'WATER', 'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE', 'WOMAN',
        'WOMEN', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND', 'WRITE', 'WRONG',
        'WROTE', 'YIELD', 'YOUNG', 'YOUTH'],

    6: ['ACCEPT', 'ACCESS', 'ACROSS', 'ACTING', 'ACTION', 'ACTIVE', 'ACTUAL', 'ADVICE', 'ADVISE', 'AFFECT',
        'AFFORD', 'AFRAID', 'AGENCY', 'AGENDA', 'ALMOST', 'ALWAYS', 'AMOUNT', 'ANIMAL', 'ANNUAL', 'ANSWER',
        'ANYONE', 'ANYWAY', 'APPEAL', 'APPEAR', 'AROUND', 'ARRIVE', 'ARTIST', 'ASPECT', 'ASSESS', 'ASSIGN',
        'ASSIST', 'ASSUME', 'ASSURE', 'ATTACH', 'ATTACK', 'ATTEND', 'AUTHOR', 'AVENUE', 'BACKED', 'BARELY',
        'BATTLE', 'BEAUTY', 'BECAME', 'BECOME', 'BEFORE', 'BEHALF', 'BEHIND', 'BELIEF', 'BELONG', 'BERLIN',
        'BETTER', 'BEYOND', 'BISHOP', 'BORDER', 'BOTTLE', 'BOTTOM', 'BOUGHT', 'BRANCH', 'BREAST', 'BREATH',
        'BRIDGE', 'BRIGHT', 'BRING', 'BROKEN', 'BUDGET', 'BURDEN', 'BUREAU', 'BUTTON', 'CAMERA', 'CANCER',
        'CANNOT', 'CARBON', 'CAREER', 'CASTLE', 'CASUAL', 'CAUGHT', 'CENTER', 'CENTRE', 'CENTURY', 'CHANCE',
        'CHANGE', 'CHARGE', 'CHOICE', 'CHOOSE', 'CHOSEN', 'CHURCH', 'CIRCLE', 'CLIENT', 'CLOSED', 'CLOSER',
        'COFFEE', 'COLUMN', 'COMBAT', 'COMING', 'COMMON', 'COMPLY', 'COPPER', 'CORNER', 'COSTLY', 'COUPLE',
        'COURSE', 'COVERS', 'CREATE', 'CREDIT', 'CRISIS', 'CUSTOM', 'DAMAGE', 'DANGER', 'DEALER', 'DEBATE',
        'DECADE', 'DECIDE', 'DEFEAT', 'DEFEND', 'DEFINE', 'DEGREE', 'DEMAND', 'DEPEND', 'DEPUTY', 'DERIVE',
        'DESIGN', 'DESIRE', 'DETAIL', 'DETECT', 'DEVICE', 'DIFFER', 'DINNER', 'DIRECT', 'DOCTOR', 'DOLLAR',
        'DOMAIN', 'DOUBLE', 'DRIVEN', 'DRIVER', 'DURING', 'EASILY', 'EATING', 'EDITOR', 'EFFECT', 'EFFORT',
        'EIGHTH', 'EITHER', 'EMERGE', 'EMPIRE', 'EMPLOY', 'ENABLE', 'ENDING', 'ENERGY', 'ENGAGE', 'ENGINE',
        'ENOUGH', 'ENSURE', 'ENTIRE', 'ENTITY', 'EQUITY', 'ESCAPE', 'ESTATE', 'ETHNIC', 'EUROPE', 'EVENTS',
        'EXCEED', 'EXCEPT', 'EXCESS', 'EXPAND', 'EXPECT', 'EXPERT', 'EXPORT', 'EXTEND', 'EXTENT', 'FABRIC',
        'FACING', 'FACTOR', 'FAILED', 'FAIRLY', 'FALLEN', 'FAMILY', 'FAMOUS', 'FATHER', 'FELLOW', 'FEMALE',
        'FIGURE', 'FILING', 'FINGER', 'FINISH', 'FISCAL', 'FLIGHT', 'FLYING', 'FOLLOW', 'FORCED', 'FOREST',
        'FORGET', 'FORMAL', 'FORMAT', 'FORMED', 'FORMER', 'FOSTER', 'FOUGHT', 'FOURTH', 'FRANCE', 'FRENCH',
        'FRIEND', 'FUTURE', 'GARDEN', 'GATHER', 'GENDER', 'GERMAN', 'GLOBAL', 'GOLDEN', 'GROUND', 'GROWTH',
        'GUIDED', 'HANDLE', 'HANDED', 'HAPPEN', 'HARDLY', 'HEADED', 'HEALTH', 'HEARTS', 'HEIGHT', 'HELPED',
        'HIDDEN', 'HOLDER', 'HONEST', 'IMPACT', 'IMPORT', 'INCOME', 'INDEED', 'INJURY', 'INSIDE', 'INTEND',
        'INTENT', 'INVEST', 'ISLAND', 'ITSELF', 'JERSEY', 'JOHNNY', 'JOINED', 'JOSEPH', 'JUNIOR', 'KILLED',
        'LABOUR', 'LADDER', 'LAUNCH', 'LAWYER', 'LEADER', 'LEAGUE', 'LEAVES', 'LEGACY', 'LENGTH', 'LESSON',
        'LETTER', 'LIGHTS', 'LIKELY', 'LINKED', 'LISTEN', 'LITTLE', 'LIVING', 'LOCKED', 'LONDON', 'LOSING',
        'LOVELY', 'LOVING', 'LUXURY', 'MAKING', 'MANAGE', 'MANNER', 'MANUAL', 'MARGIN', 'MARINE', 'MARKED',
        'MARKET', 'MARRIED', 'MASTER', 'MATTER', 'MATURE', 'MEDIUM', 'MEMBER', 'MEMORY', 'MENTAL', 'MERELY',
        'MERGER', 'METHOD', 'MIDDLE', 'MILLER', 'MINING', 'MINUTE', 'MIRROR', 'MOBILE', 'MODERN', 'MODEST',
        'MODULE', 'MOMENT', 'MORRIS', 'MOSTLY', 'MOTHER', 'MOTION', 'MOVING', 'MURDER', 'MUSEUM', 'MUTUAL',
        'MYSELF', 'NARROW', 'NATION', 'NATIVE', 'NATURE', 'NEARBY', 'NEARLY', 'NIGHTS', 'NOBODY', 'NORMAL',
        'NOTICE', 'NOTION', 'NUMBER', 'OBJECT', 'OBTAIN', 'OFFICE', 'OFFSET', 'ONLINE', 'OPTION', 'ORANGE',
        'ORIGIN', 'OUTPUT', 'OXFORD', 'PACKED', 'PALACE', 'PARENT', 'PARTLY', 'PASSED', 'PATENT', 'PEOPLE',
        'PERIOD', 'PERMIT', 'PERSON', 'PHRASE', 'PICKED', 'PLANET', 'PLAYER', 'PLEASE', 'PLENTY', 'POCKET',
        'POLICE', 'POLICY', 'PREFER', 'PRETTY', 'PRINCE', 'PRISON', 'PROFIT', 'PROPER', 'PROVEN', 'PUBLIC',
        'PURELY', 'PURPLE', 'PURSUE', 'RAISED', 'RANDOM', 'RARELY', 'RATHER', 'RATING', 'READER', 'REALLY',
        'REASON', 'RECALL', 'RECENT', 'RECORD', 'REDUCE', 'REFORM', 'REGARD', 'REGIME', 'REGION', 'RELATE',
        'RELIEF', 'REMAIN', 'REMARK', 'REMOTE', 'REMOVE', 'REPAIR', 'REPEAT', 'REPLAY', 'REPORT', 'RESCUE',
        'RESORT', 'RESULT', 'RESUME', 'RETAIL', 'RETAIN', 'RETURN', 'REVEAL', 'REVIEW', 'REWARD', 'RIDING',
        'RISING', 'ROBUST', 'RULING', 'RUSSIA', 'SAFETY', 'SALARY', 'SAMPLE', 'SAVING', 'SAYING', 'SCHEME',
        'SCHOOL', 'SCREEN', 'SCRIPT', 'SEARCH', 'SEASON', 'SECOND', 'SECRET', 'SECTOR', 'SECURE', 'SEEING',
        'SEEK', 'SEEMED', 'SELECT', 'SELLER', 'SENIOR', 'SERIES', 'SERVED', 'SERVER', 'SETTLE', 'SEVERE',
        'SEXUAL', 'SHOULD', 'SIGNAL', 'SIGNED', 'SILENT', 'SILVER', 'SIMPLE', 'SIMPLY', 'SINGLE', 'SISTER',
        'SLIGHT', 'SMOOTH', 'SOCIAL', 'SOLELY', 'SOUGHT', 'SOURCE', 'SOVIET', 'SPEECH', 'SPIRIT', 'SPLIT',
        'SPOKEN', 'SPREAD', 'SPRING', 'SQUARE', 'STABLE', 'STATUS', 'STEADY', 'STOLEN', 'STRAIN', 'STREAM',
        'STREET', 'STRESS', 'STRICT', 'STRIKE', 'STRING', 'STRONG', 'STRUCK', 'STUDIO', 'SUBMIT', 'SUDDEN',
        'SUFFER', 'SUMMER', 'SUMMIT', 'SUPPLY', 'SURELY', 'SURVEY', 'SWITCH', 'SYMBOL', 'SYSTEM', 'TAKING',
        'TALENT', 'TARGET', 'TAUGHT', 'TENANT', 'TENDER', 'TENNIS', 'THANKS', 'THEORY', 'THIRTY', 'THOUGH',
        'THREAD', 'THREAT', 'THROWN', 'TICKET', 'TIMBER', 'TIMING', 'TISSUE', 'TOWARD', 'TRAVEL', 'TREATY',
        'TRYING', 'TURNER', 'TWENTY', 'UNABLE', 'UNIQUE', 'UNITED', 'UNLESS', 'UNLIKE', 'UPDATE', 'USEFUL',
        'VALLEY', 'VARIED', 'VENDOR', 'VICTIM', 'VISION', 'VISUAL', 'VOLUME', 'WALKER', 'WEALTH', 'WEAPON',
        'WEEKLY', 'WEIGHT', 'WHOLLY', 'WINDOW', 'WINNER', 'WINTER', 'WITHIN', 'WONDER', 'WOODEN', 'WORKER',
        'WRITER', 'YELLOW'],

    7: ['ABILITY', 'ABSENCE', 'ACADEMY', 'ACCOUNT', 'ACCUSED', 'ACHIEVE', 'ACQUIRE', 'ADDRESS', 'ADVANCE',
        'ADVERSE', 'ADVISED', 'ADVISER', 'ADVOCATE', 'AFFECTED', 'AGAINST', 'AIRLINE', 'AIRPORT', 'ALCOHOL',
        'ALLEGED', 'ALREADY', 'ANALYST', 'ANCIENT', 'ANOTHER', 'ANXIETY', 'ANXIOUS', 'ANYBODY', 'APPLIED',
        'APPOINT', 'APPROVE', 'ARRANGE', 'ARRIVAL', 'ARTICLE', 'ARTIST', 'ASSAULT', 'ASSEMBLY', 'AVERAGE',
        'BALANCE', 'BANKING', 'BARRIER', 'BATTERY', 'BEARING', 'BECAUSE', 'BEDROOM', 'BENEATH', 'BENEFIT',
        'BESIDES', 'BETWEEN', 'BILLION', 'BINDING', 'BROTHER', 'BROUGHT', 'BURNING', 'CABINET', 'CAPABLE',
        'CAPITAL', 'CAPTAIN', 'CAPTURE', 'CAREFUL', 'CARRIER', 'CENTRAL', 'CENTURY', 'CERTAIN', 'CHAIRMAN',
        'CHAMBER', 'CHANNEL', 'CHAPTER', 'CHARITY', 'CHARTER', 'CHICKEN', 'CIRCUIT', 'CITIZEN', 'CLASSIC',
        'CLIMATE', 'CLOSING', 'CLOSURE', 'CLOTHES', 'COLLECT', 'COLLEGE', 'COMBINE', 'COMFORT', 'COMMAND',
        'COMMENT', 'COMPACT', 'COMPANY', 'COMPARE', 'COMPETE', 'COMPLEX', 'CONCEPT', 'CONCERN', 'CONCERT',
        'CONDUCT', 'CONFIRM', 'CONFLICT', 'CONNECT', 'CONSENT', 'CONSIST', 'CONTACT', 'CONTAIN', 'CONTENT',
        'CONTEST', 'CONTEXT', 'CONTROL', 'CONVERT', 'CORRECT', 'COUNCIL', 'COUNSEL', 'COUNTRY', 'COUPLE',
        'COURAGE', 'COVER', 'CREATION', 'CREATOR', 'CRICKET', 'CRIMINAL', 'CRISIS', 'CRUCIAL', 'CULTURE',
        'CURRENT', 'CUSTODY', 'CUTTING', 'DEALING', 'DECLINE', 'DEFAULT', 'DEFENCE', 'DEFICIT', 'DELIVER',
        'DENSITY', 'DEPOSIT', 'DESKTOP', 'DESPITE', 'DESTROY', 'DEVELOP', 'DEVOTED', 'DIAMOND', 'DIGITAL',
        'DISPLAY', 'DISPUTE', 'DISTANT', 'DISTRICT', 'DIVERSE', 'DIVIDED', 'DRAWING', 'DRIVING', 'EASTERN',
        'ECONOMY', 'EDITION', 'ELEMENT', 'EMBRACE', 'EMERGE', 'EMOTION', 'EMPEROR', 'ENGAGED', 'ENHANCE',
        'ENORMOUS', 'ENQUIRY', 'EPISODE', 'ESSENCE', 'EVENING', 'EVIDENT', 'EXACTLY', 'EXAMINE', 'EXAMPLE',
        'EXCITED', 'EXCLUDE', 'EXECUTE', 'EXHIBIT', 'EXISTING', 'EXPAND', 'EXPLAIN', 'EXPLORE', 'EXPRESS',
        'EXTEND', 'EXTREME', 'FACTORY', 'FACULTY', 'FAILURE', 'FALLING', 'FASHION', 'FEATURE', 'FEDERAL',
        'FEELING', 'FICTION', 'FIFTEEN', 'FILLING', 'FINANCE', 'FINDING', 'FISHING', 'FITNESS', 'FOREIGN',
        'FOREVER', 'FORMULA', 'FORTUNE', 'FORWARD', 'FOUNDER', 'FREEDOM', 'FURTHER', 'GALLERY', 'GENERAL',
        'GENUINE', 'GETTING', 'GOLDEN', 'WORKING', 'GROWING', 'GUARDIAN', 'GUILTY', 'HABITAT', 'HANGING',
        'HEADING', 'HEALTHY', 'HEARING', 'HEAVILY', 'HELPFUL', 'HERSELF', 'HIGHWAY', 'HIMSELF', 'HISTORY',
        'HOLDING', 'HOLIDAY', 'HOMELESS', 'HONEST', 'HORIZON', 'HORSE', 'HOSTILE', 'HOUSING', 'HOWEVER',
        'HUNDRED', 'HUSBAND', 'IDENTICAL', 'ILLEGAL', 'ILLNESS', 'IMAGINE', 'IMPROVE', 'INCLUDE', 'INITIAL',
        'INQUIRY', 'INSIDE', 'INSTALL', 'INSTANT', 'INSTEAD', 'INTENSE', 'INTERIM', 'INVOLVE', 'Islamic',
        'ISLAND', 'ISOLATE', 'JOURNAL', 'JOURNEY', 'JUSTICE', 'JUSTIFY', 'KEEPING', 'KILLING', 'KINGDOM',
        'KITCHEN', 'KNOWING', 'LANDING', 'LARGELY', 'LASTING', 'LEADING', 'LEARNED', 'LEATHER', 'LEAVING',
        'LECTURE', 'LEISURE', 'LIBERAL', 'LIBRARY', 'LICENSE', 'LIMITED', 'LINKING', 'LISTING', 'LITERAL',
        'LIVING', 'LOADING', 'LOCATED', 'LOCKING', 'LOGICAL', 'LOOKING', 'LOYALTY', 'MACHINE', 'MANAGER',
        'MARRIED', 'MASSIVE', 'MASTER', 'MATCHED', 'MAXIMUM', 'MEANING', 'MEASURE', 'MEDICAL', 'MEETING',
        'MEMBER', 'MESSAGE', 'MIDDLE', 'MILITARY', 'MILLION', 'MINIMAL', 'MINIMUM', 'MINISTER', 'MINORITY',
        'MISSING', 'MISSION', 'MISTAKE', 'MIXTURE', 'MONITOR', 'MORNING', 'MOUNTAIN', 'MUSICAL', 'MYSTERY',
        'NATURAL', 'NATURE', 'NERVOUS', 'NETWORK', 'NEUTRAL', 'NOBODY', 'NOMINAL', 'NORTHERN', 'NOTHING',
        'NOWHERE', 'NUCLEAR', 'NURSING', 'OBVIOUS', 'OFFENCE', 'OFFICER', 'ONGOING', 'OPENING', 'OPERATE',
        'OPINION', 'OPTICAL', 'ORGANIC', 'ORIGINAL', 'OUTCOME', 'OUTDOOR', 'OUTLOOK', 'OUTSIDE', 'OVERALL',
        'PACKAGE', 'PAINTED', 'PAINTER', 'PARKING', 'PARTIAL', 'PARTNER', 'PASSAGE', 'PASSING', 'PASSION',
        'PASSIVE', 'PATIENT', 'PATTERN', 'PAYMENT', 'PENALTY', 'PENSION', 'PEOPLE', 'PERCENT', 'PERFECT',
        'PERFORM', 'PERHAPS', 'PERSIST', 'PETROL', 'PICKING', 'PICTURE', 'PIONEER', 'PLASTIC', 'PLATFORM',
        'PLAYING', 'PLEASED', 'PLEASURE', 'PLENTY', 'POINTED', 'POPULAR', 'PORTION', 'PORTRAIT', 'POSITION',
        'POSITIVE', 'POSSIBLE', 'POVERTY', 'POWDER', 'POWERFUL', 'PRECISE', 'PREDICT', 'PREMIER', 'PREMIUM',
        'PREPARE', 'PRESENT', 'PRESERVE', 'PRESSED', 'PRESSURE', 'PREVENT', 'PREVIOUS', 'PRIMARY', 'PRIME',
        'PRINCE', 'PRINTED', 'PRINTER', 'PRIVACY', 'PRIVATE', 'PROBLEM', 'PROCEED', 'PROCESS', 'PRODUCE',
        'PRODUCT', 'PROFILE', 'PROGRAM', 'PROJECT', 'PROMISE', 'PROMOTE', 'PROMPT', 'PROPOSE', 'PROTECT',
        'PROTEIN', 'PROTEST', 'PROVIDE', 'PUBLISH', 'PURPOSE', 'PUSHING', 'PUTTING', 'QUALITY', 'QUARTER',
        'QUESTION', 'QUICKLY', 'RADICAL', 'RAILWAY', 'RANKING', 'RAPIDLY', 'RATIONAL', 'READING', 'REALITY',
        'REALIZE', 'RECEIPT', 'RECEIVE', 'RECOVER', 'REDUCED', 'REFLECT', 'REFUGEE', 'REFUSED', 'REGULAR',
        'RELATED', 'RELEASE', 'RELEVANT', 'RELIEF', 'RELIGION', 'REMAIN', 'REMOVAL', 'REMOVED', 'REPLACE',
        'REPLIED', 'REQUEST', 'REQUIRE', 'RESEARCH', 'RESERVE', 'RESOLVE', 'RESORT', 'RESPECT', 'RESPOND',
        'RESTORE', 'RETAIN', 'RETIRED', 'RETREAT', 'RETURN', 'REVENUE', 'REVERSE', 'REVIEW', 'REVISED',
        'ROUTINE', 'RUBBER', 'RUNNING', 'RUSSIAN', 'SATISFY', 'SAVING', 'SCANDAL', 'SCENARIO', 'SCHEDULE',
        'SCHOLAR', 'SCIENCE', 'SCREEN', 'SECTION', 'SECTOR', 'SECURE', 'SEGMENT', 'SELECT', 'SELLING',
        'SENIOR', 'SEPARATE', 'SEQUENCE', 'SERIOUS', 'SERVANT', 'SERVICE', 'SESSION', 'SETTING', 'SETTLED',
        'SEVERAL', 'SEVERE', 'SHAKING', 'SHAPING', 'SHARING', 'SHELTER', 'SHIFTING', 'SHINING', 'SHOCKED',
        'SHOOTING', 'SHORTLY', 'SHOWING', 'SIBLING', 'SILENCE', 'SIMILAR', 'SITTING', 'SKILLED', 'SMOKING',
        'SOCIETY', 'SOLDIER', 'SOME', 'SOMEHOW', 'SOMEONE', 'SOUTHERN', 'SPANISH', 'SPEAKER', 'SPECIAL',
        'SPECIES', 'SPECIFIC', 'SPONSOR', 'STATION', 'STRANGE', 'STRATEGIC', 'STRENGTH', 'STRIKING', 'STUDENT',
        'STUDYING', 'SUBJECT', 'SUCCEED', 'SUCCESS', 'SUDDEN', 'SUFFICIENT', 'SUGGEST', 'SUITABLE', 'SUMMARY',
        'SUPPORT', 'SUPPOSE', 'SUPREME', 'SURFACE', 'SURGERY', 'SURPLUS', 'SURPRISE', 'SURROUND', 'SURVIVE',
        'SUSPECT', 'SUSTAIN', 'TALKING', 'TEACHER', 'TEACHING', 'TELECOM', 'TELLING', 'TEMPORARY', 'TENANT',
        'THEATRE', 'THERAPY', 'THEREBY', 'THOUGHT', 'THROUGH', 'TONIGHT', 'TOTALLY', 'TOUCHED', 'TOWARDS',
        'TRADING', 'TRAFFIC', 'TRAINED', 'TRAINER', 'TRANSFER', 'TRAVEL', 'TREATED', 'TREATY', 'TRIANGLE',
        'TRIUMPH', 'TROUBLE', 'TURNING', 'TYPICAL', 'ULTIMATE', 'UNABLE', 'UNIFORM', 'UNKNOWN', 'UNUSUAL',
        'UPGRADE', 'UPWARDS', 'UTILITY', 'VARIETY', 'VARIOUS', 'VEHICLE', 'VENTURE', 'VERSION', 'VETERAN',
        'VICTORY', 'VILLAGE', 'VINTAGE', 'VIOLENT', 'VIRTUAL', 'VISIBLE', 'VISITOR', 'WAITING', 'WALKING',
        'WANTING', 'WARNING', 'WARRANT', 'WEALTHY', 'WEARING', 'WEATHER', 'WEDDING', 'WEEKEND', 'WELCOME',
        'WELFARE', 'WESTERN', 'WHETHER', 'WILLING', 'WINNING', 'WITHOUT', 'WITNESS', 'WORKING', 'WRITING',
        'WRITTEN'],

    8: ['ABSOLUTE', 'ABSTRACT', 'ACADEMIC', 'ACCEPTED', 'ACCIDENT', 'ACCURACY', 'ACCURATE', 'ACHIEVED', 'ACQUIRED',
        'ACTIVITY', 'ACTUALLY', 'ADDITION', 'ADEQUATE', 'ADJACENT', 'ADJUSTED', 'ADMITTED', 'ADVANCED', 'ADVISORY',
        'ADVOCATE', 'AFFECTED', 'AIRCRAFT', 'ALLIANCE', 'ALTHOUGH', 'ALUMINUM', 'ANALYSIS', 'ANNOUNCE', 'ANYTHING',
        'ANYWHERE', 'APPARENT', 'APPENDIX', 'APPETITE', 'APPROACH', 'APPROVAL', 'ARGUMENT', 'ARTISTIC', 'ASSEMBLY',
        'ASSUMING', 'ATHLETIC', 'ATTACHED', 'ATTITUDE', 'ATTORNEY', 'AUDIENCE', 'AUTHOR', 'AUTONOMY', 'AVAILABLE',
        'AVOID', 'AWARENESS', 'BACHELOR', 'BACKDROP', 'BACKWARD', 'BACTERIA', 'BALANCED', 'BATHROOM', 'BECOMING',
        'BEHAVIOR', 'BELIEVED', 'BENEATH', 'BENEFIT', 'BIRTHDAY', 'BOUNDARY', 'BREAKING', 'BREEDING', 'BRIEFING',
        'BRINGING', 'BUILDING', 'BULLETIN', 'BUSINESS', 'CALENDAR', 'CAMPAIGN', 'CAPACITY', 'CASUALTY', 'CATCHING',
        'CATEGORY', 'CATHOLIC', 'CAUTIOUS', 'CELLULAR', 'CEREMONY', 'CHAIRMAN', 'CHAMPION', 'CHANGING', 'CHEMICAL',
        'CHILDREN', 'CIRCULAR', 'CITATION', 'CIVILIAN', 'CLEANING', 'CLEARING', 'CLIMBING', 'CLINICAL', 'CLOTHING',
        'COLLAPSE', 'COLONIAL', 'COMBINED', 'COMFORTABLE', 'COMMERCE', 'COMMITTED', 'COMMODITY', 'COMMONLY', 'COMPLETE',
        'COMPLEX', 'COMPOUND', 'COMPUTER', 'CONCLUDE', 'CONCRETE', 'CONFLICT', 'CONFUSED', 'CONGRESS', 'CONSIDER',
        'CONSTANT', 'CONSUMER', 'CONTEMPT', 'CONTINUE', 'CONTRACT', 'CONTRARY', 'CONTRAST', 'CONVINCE', 'CORRIDOR',
        'COVERAGE', 'COVERING', 'CREATION', 'CREATIVE', 'CREATURE', 'CRIMINAL', 'CRITICAL', 'CROSSING', 'CULTURAL',
        'CURRENCY', 'CUSTOMER', 'DATABASE', 'DAUGHTER', 'DEADLINE', 'DECIDING', 'DECISION', 'DECISIVE', 'DECLARED',
        'DECREASE', 'DELIVERY', 'DEMOCRATIC', 'DEMONSTRATE', 'DEPARTED', 'DESCRIBE', 'DESIGNER', 'DETAILED', 'DETECTOR',
        'DIALOGUE', 'DIAMETER', 'DIAMOND', 'DIFFICULT', 'DIGITAL', 'DILEMMA', 'DINNER', 'DIRECTLY', 'DIRECTOR',
        'DISABLED', 'DISASTER', 'DISCLOSE', 'DISCOUNT', 'DISCOVER', 'DISORDER', 'DISPOSAL', 'DISTANCE', 'DISTINCT',
        'DISTRICT', 'DIVIDEND', 'DIVISION', 'DOCTRINE', 'DOCUMENT', 'DOMESTIC', 'DOMINANT', 'DOMINATE', 'DRAMATIC',
        'DRESSING', 'DROPPING', 'DURATION', 'DYNAMICS', 'EARNINGS', 'ECONOMIC', 'EDUCATED', 'ELECTION', 'ELECTRIC',
        'ELIGIBLE', 'EMERGING', 'EMISSION', 'EMPHASIS', 'EMPLOYEE', 'ENDEAVOR', 'ENGAGING', 'ENGINEER', 'ENORMOUS',
        'ENTIRELY', 'ENTRANCE', 'ENVELOPE', 'EQUALITY', 'EQUATION', 'EQUIPPED', 'ESTIMATE', 'EVALUATE', 'EVENTUAL',
        'EVERYDAY', 'EVERYONE', 'EVIDENCE', 'EXACT', 'EXAMINED', 'EXCHANGE', 'EXCITING', 'EXCLUDED', 'EXERCISE',
        'EXPLICIT', 'EXPLORER', 'EXPOSURE', 'EXTENDED', 'EXTERNAL', 'FACILITY', 'FAMILIAR', 'FEATURED', 'FEEDBACK',
        'FESTIVAL', 'FINISHED', 'FLEXIBLE', 'FLOATING', 'FOOTBALL', 'FOOTSTEP', 'FORECAST', 'FOREIGN', 'FORESTRY',
        'FORMERLY', 'FORWARD', 'FRACTION', 'FRAGMENT', 'FRAMEWORK', 'FREQUENT', 'FRIENDLY', 'FRONTIER', 'FUNCTION',
        'FURNITURE', 'GENERATE', 'GENEROUS', 'GENETIC', 'GOVERNOR', 'GRADUATE', 'GRAPHICS', 'GRATEFUL', 'GREATEST',
        'GRINDING', 'GROUNDED', 'GUARDIAN', 'GUIDANCE', 'HANDLING', 'HARDWARE', 'HEADLINE', 'HISTORIC', 'HOMELESS',
        'HOSPITAL', 'HOUSEHOLD', 'HOUSING', 'IDENTITY', 'IDEOLOGY', 'IMPERIAL', 'IMPLEMENT', 'IMPLICIT', 'INCIDENT',
        'INCLUDES', 'INCREASE', 'INDICATE', 'INDIRECT', 'INDUSTRY', 'INFORMAL', 'INFORMED', 'INHERENT', 'INNOCENT',
        'INSTANCE', 'INSTINCT', 'INTEGRAL', 'INTENDED', 'INTEREST', 'INTERIOR', 'INTERNAL', 'INTERNET', 'INTERVAL',
        'INTIMATE', 'INVASION', 'INVOLVED', 'ISOLATED', 'JUDGMENT', 'JUDICIAL', 'JUNCTION', 'KEYBOARD', 'LANDLORD',
        'LANDMARK', 'LANGUAGE', 'LAUGHTER', 'LEARNING', 'LEISURE', 'LIGHTING', 'LIKEWISE', 'LIMITING', 'LITERARY',
        'LOCATION', 'MAGAZINE', 'MAGNETIC', 'MAINTAIN', 'MAJORITY', 'MARGINAL', 'MARRIAGE', 'MATERIAL', 'MATERNAL',
        'MAXIMIZE', 'MEANTIME', 'MEASURED', 'MECHANIC', 'MECHANISM', 'MEDIEVAL', 'MEMORIAL', 'MERCHANT', 'MIDNIGHT',
        'MILITARY', 'MINIMIZE', 'MINISTER', 'MINORITY', 'MOBILITY', 'MODERATE', 'MODIFIED', 'MONARCHY', 'MONETARY',
        'MOREOVER', 'MORTGAGE', 'MOUNTAIN', 'MOVEMENT', 'MULTIPLE', 'NATIONAL', 'NATURAL', 'NEGATIVE', 'NEIGHBOR',
        'NERVOUS', 'NORTHERN', 'NOTEBOOK', 'NUMEROUS', 'OBSERVER', 'OBSTACLE', 'OBTAINED', 'OCCASION', 'OCCUPIED',
        'OFFERING', 'OFFICIAL', 'OFFSHORE', 'OPERATOR', 'OPPONENT', 'OPPOSITE', 'OPTIMISM', 'OPTIONAL', 'ORDINARY',
        'ORGANIZE', 'ORIGINAL', 'OUTBREAK', 'OUTGOING', 'OVERCOME', 'OVERHEAD', 'OVERSEAS', 'OVERVIEW', 'OWNERSHIP',
        'PAINTING', 'PARALLEL', 'PARENTAL', 'PARTIALLY', 'PARTICLE', 'PARTICULAR', 'PARTNER', 'PASSENGER', 'PATIENCE',
        'PEACEFUL', 'PECULIAR', 'PENALTY', 'PEOPLE', 'PERCEIVED', 'PERSONAL', 'PERSUADE', 'PETITION', 'PHARMACY',
        'PHYSICAL', 'PLATFORM', 'PLEASANT', 'PLEASURE', 'POINTING', 'POLITICAL', 'PORTRAIT', 'POSITIVE', 'POSSIBLE',
        'POSSIBLY', 'POSTCARD', 'POWERFUL', 'PRACTICAL', 'PRACTICE', 'PRECIOUS', 'PREGNANT', 'PRESENCE', 'PRESERVE',
        'PRESSING', 'PRESSURE', 'PRETEND', 'PREVIOUS', 'PRIMARILY', 'PRINCESS', 'PRINTING', 'PRIORITY', 'PRISONER',
        'PROBABLY', 'PROFOUND', 'PROGRESS', 'PROMINENT', 'PROMISED', 'PROPERLY', 'PROPERTY', 'PROPOSAL', 'PROSPECT',
        'PROTOCOL', 'PROVIDED', 'PROVINCE', 'PUBLICLY', 'PUBLICLY', 'PURCHASE', 'PURSUING', 'QUALIFIED', 'QUANTITY',
        'QUESTION', 'RATIONAL', 'REACTION', 'REALISTIC', 'REALITY', 'RECEIVED', 'RECEIVER', 'RECENTLY', 'RECEPTOR',
        'RECOVERY', 'REDUCED', 'REFERRED', 'REGIONAL', 'REGISTER', 'RELATION', 'RELATIVE', 'RELEVANT', 'RELIABLE',
        'RELIANCE', 'RELIGIOUS', 'REMAINING', 'REMEMBER', 'REPEATED', 'REPLACED', 'REPORTER', 'REPUBLIC', 'REQUIRED',
        'RESEARCH', 'RESERVED', 'RESIDENT', 'RESIGNED', 'RESOLVED', 'RESOURCE', 'RESPONSE', 'RESTORED', 'RESTRICT',
        'RETAINED', 'RETIRING', 'RETRIEVE', 'RETURNED', 'REVEALED', 'REVEREND', 'REVISION', 'RHETORIC', 'ROMANTIC',
        'ROTATION', 'SCENARIO', 'SCHEDULE', 'SCHEME', 'SCHOLARLY', 'SCIENTIFIC', 'SEASONAL', 'SECONDARY', 'SECRETLY',
        'SECURITY', 'SELECTED', 'SENSIBLE', 'SENTENCE', 'SEPARATE', 'SEQUENCE', 'SERGEANT', 'SERIOUSLY', 'SETTLING',
        'SEVERELY', 'SEXUALLY', 'SHOOTING', 'SHORTAGE', 'SHOULDER', 'SHOUTING', 'SHUTDOWN', 'SIBLINGS', 'SICKNESS',
        'SIDEWALK', 'SILENT', 'SIMILAR', 'SIMPLIFY', 'SITUATED', 'SLIGHTLY', 'SMALLEST', 'SMILING', 'SOFTWARE',
        'SOLUTION', 'SOMEBODY', 'SOMEWHAT', 'SOUTHERN', 'SPEAKING', 'SPECIFIC', 'SPECTRUM', 'SPENDING', 'SPORTING',
        'SPORTING', 'STANDARD', 'STANDING', 'STARTING', 'STATEMENT', 'STATION', 'STEAMING', 'STIMULUS', 'STRAIGHT',
        'STRANGER', 'STRATEGY', 'STRENGTH', 'STRIKING', 'STRONGLY', 'STRUGGLE', 'STUDYING', 'STUNNING', 'SUBURBAN',
        'SUDDENLY', 'SUFFERED', 'SUFFICIENT', 'SUITABLE', 'SUPERIOR', 'SUPPOSED', 'SURGICAL', 'SURPRISE', 'SURVIVAL',
        'SURVIVOR', 'SWIMMING', 'SYMBOLIC', 'SYMPATHY', 'SYNDROME', 'TACTICAL', 'TANGIBLE', 'TAXATION', 'TEACHING',
        'TEAMMATE', 'TECHNICAL', 'TEENAGER', 'TELEPHONE', 'TELESCOPE', 'TENDENCY', 'TERMINAL', 'TERRIBLE', 'TERRITORY',
        'THINKING', 'THOROUGH', 'THOUSAND', 'THREATEN', 'TOGETHER', 'TOMORROW', 'TOUCHING', 'TRACKING', 'TRADITION',
        'TRAINING', 'TRANSFER', 'TREATING', 'TREATY', 'TRIANGLE', 'TRIBUNAL', 'TROPICAL', 'TROUBLED', 'ULTIMATE',
        'UMBRELLA', 'UNABLE', 'UNCOMMON', 'UNDERLIE', 'UNDERTAKE', 'UNION', 'UNIVERSE', 'UNLIKELY', 'UPSTAIRS',
        'VALUABLE', 'VARIABLE', 'VARIANCE', 'VASTLY', 'VELOCITY', 'VENTURE', 'VERTICAL', 'VICINITY', 'VIOLENCE',
        'VIRTUAL', 'VISIBLE', 'VISITING', 'VOLCANIC', 'VOLUME', 'VOLUNTARY', 'WARRANTY', 'WATCHING', 'WEAKNESS',
        'WEALTHY', 'WEAPON', 'WEATHER', 'WHATEVER', 'WHENEVER', 'WHEREVER', 'WHETHER', 'WHISTLE', 'WILDLIFE',
        'WIRELESS', 'WITHDRAW', 'WONDERFUL', 'WOODLAND', 'WORKSHOP', 'WORLDWIDE', 'YOURSELF']
};

// Game state
let gameState = {
    wordLength: 5,
    maxAttempts: 6,
    currentWord: '',
    currentRow: 0,
    currentTile: 0,
    gameOver: false,
    letterStatus: {}
};

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    setupEventListeners();
});

function initializeGame() {
    const wordLength = parseInt(document.getElementById('wordLength').value);
    gameState = {
        wordLength: wordLength,
        maxAttempts: 6,
        currentWord: '',
        currentRow: 0,
        currentTile: 0,
        gameOver: false,
        letterStatus: {}
    };

    // Select random word
    const wordList = WORD_LISTS[wordLength];
    const randomIndex = Math.floor(Math.random() * wordList.length);
    gameState.targetWord = wordList[randomIndex];

    console.log('Target word:', gameState.targetWord); // For debugging

    createBoard();
    resetKeyboard();
    document.getElementById('message').textContent = '';
}

function createBoard() {
    const board = document.getElementById('gameBoard');
    board.innerHTML = '';

    for (let i = 0; i < gameState.maxAttempts; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = `row-${i}`;

        for (let j = 0; j < gameState.wordLength; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${i}-${j}`;
            row.appendChild(tile);
        }

        board.appendChild(row);
    }
}

function setupEventListeners() {
    // Keyboard click events
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('click', () => {
            const letter = key.dataset.key;
            handleInput(letter);
        });
    });

    // Physical keyboard events
    document.addEventListener('keydown', (e) => {
        if (gameState.gameOver) return;

        if (e.key === 'Enter') {
            handleInput('Enter');
        } else if (e.key === 'Backspace') {
            handleInput('Backspace');
        } else if (/^[a-zA-Z]$/.test(e.key)) {
            handleInput(e.key.toUpperCase());
        }
    });

    // New game button
    document.getElementById('newGame').addEventListener('click', initializeGame);

    // Word length selector
    document.getElementById('wordLength').addEventListener('change', initializeGame);
}

function handleInput(key) {
    if (gameState.gameOver) return;

    if (key === 'Enter') {
        submitGuess();
    } else if (key === 'Backspace') {
        deleteLetter();
    } else if (gameState.currentTile < gameState.wordLength) {
        addLetter(key);
    }
}

function addLetter(letter) {
    if (gameState.currentTile < gameState.wordLength) {
        const tile = document.getElementById(`tile-${gameState.currentRow}-${gameState.currentTile}`);
        tile.textContent = letter;
        tile.classList.add('filled');
        gameState.currentWord += letter;
        gameState.currentTile++;
    }
}

function deleteLetter() {
    if (gameState.currentTile > 0) {
        gameState.currentTile--;
        const tile = document.getElementById(`tile-${gameState.currentRow}-${gameState.currentTile}`);
        tile.textContent = '';
        tile.classList.remove('filled');
        gameState.currentWord = gameState.currentWord.slice(0, -1);
    }
}

function submitGuess() {
    if (gameState.currentTile !== gameState.wordLength) {
        showMessage('Not enough letters', 2000);
        return;
    }

    // Check if word is in word list
    const wordList = WORD_LISTS[gameState.wordLength];
    if (!wordList.includes(gameState.currentWord)) {
        showMessage('Not in word list', 2000);
        shakeTiles();
        return;
    }

    // Check the guess
    checkGuess();

    // Move to next row
    gameState.currentRow++;
    gameState.currentTile = 0;
    gameState.currentWord = '';

    // Check win/loss
    if (gameState.currentRow === gameState.maxAttempts && !gameState.gameOver) {
        gameState.gameOver = true;
        showMessage(`Game Over! The word was ${gameState.targetWord}`, 0);
    }
}

function checkGuess() {
    const guess = gameState.currentWord;
    const target = gameState.targetWord;
    const result = [];
    const targetLetters = target.split('');
    const guessLetters = guess.split('');

    // First pass: mark correct letters
    for (let i = 0; i < gameState.wordLength; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            result[i] = 'correct';
            targetLetters[i] = null;
            guessLetters[i] = null;
        }
    }

    // Second pass: mark present letters
    for (let i = 0; i < gameState.wordLength; i++) {
        if (guessLetters[i] !== null) {
            const index = targetLetters.indexOf(guessLetters[i]);
            if (index !== -1) {
                result[i] = 'present';
                targetLetters[index] = null;
            } else {
                result[i] = 'absent';
            }
        }
    }

    // Apply colors to tiles
    for (let i = 0; i < gameState.wordLength; i++) {
        const tile = document.getElementById(`tile-${gameState.currentRow}-${i}`);
        const letter = guess[i];

        setTimeout(() => {
            tile.classList.add(result[i]);
            updateKeyboard(letter, result[i]);
        }, i * 300);
    }

    // Check if won
    if (result.every(r => r === 'correct')) {
        gameState.gameOver = true;
        setTimeout(() => {
            showMessage('Congratulations! You won!', 0);
        }, gameState.wordLength * 300);
    }
}

function updateKeyboard(letter, status) {
    const key = document.querySelector(`[data-key="${letter}"]`);
    if (!key) return;

    const currentStatus = gameState.letterStatus[letter];

    // Priority: correct > present > absent
    if (currentStatus === 'correct') return;
    if (currentStatus === 'present' && status === 'absent') return;

    gameState.letterStatus[letter] = status;
    key.classList.remove('correct', 'present', 'absent');
    key.classList.add(status);
}

function resetKeyboard() {
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('correct', 'present', 'absent');
    });
}

function shakeTiles() {
    const row = document.getElementById(`row-${gameState.currentRow}`);
    row.style.animation = 'shake 0.5s';
    setTimeout(() => {
        row.style.animation = '';
    }, 500);
}

function showMessage(text, duration) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;

    if (duration > 0) {
        setTimeout(() => {
            messageEl.textContent = '';
        }, duration);
    }
}

// Add shake animation CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
