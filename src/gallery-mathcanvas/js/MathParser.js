/* Jison generated parser */
var MathParser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"NUMBER":6,"E":7,"PI":8,"I":9,"(":10,")":11,"+":12,"-":13,"*":14,"/":15,"^":16,"SQRT":17,"MIN":18,"arglist":19,"MAX":20,"ARCSIN":21,"ARCCOS":22,"ARCTAN":23,"SIN":24,"COS":25,"TAN":26,"SINH":27,"COSH":28,"TANH":29,",":30,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"NUMBER",7:"E",8:"PI",9:"I",10:"(",11:")",12:"+",13:"-",14:"*",15:"/",16:"^",17:"SQRT",18:"MIN",20:"MAX",21:"ARCSIN",22:"ARCCOS",23:"ARCTAN",24:"SIN",25:"COS",26:"TAN",27:"SINH",28:"COSH",29:"TANH",30:","},
productions_: [0,[3,2],[4,1],[4,1],[4,1],[4,1],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[19,1],[19,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:return $$[$0-1];
break;
case 2:this.$ = new yy.MathFunction.Value(yytext);
break;
case 3:this.$ = new yy.MathFunction.E();
break;
case 4:this.$ = new yy.MathFunction.Pi();
break;
case 5:this.$ = new yy.MathFunction.I();
break;
case 6:this.$ = $$[$0-1];
break;
case 7:this.$ = $$[$0-2]+$$[$0];
break;
case 8:this.$ = $$[$0-2]-$$[$0];
break;
case 9:this.$ = $$[$0-2]*$$[$0];
break;
case 10:this.$ = $$[$0-2]/$$[$0];
break;
case 11:this.$ = Math.pow($$[$0-2], $$[$0]);
break;
case 12:this.$ = -$$[$0];
break;
case 13:this.$ = new yy.MathFunction.SquareRoot($$[$0-1]);
break;
case 14:this.$ = new yy.MathFunction.Min($$[$0-1]);
break;
case 15:this.$ = new yy.MathFunction.Max($$[$0-1]);
break;
case 16:this.$ = new yy.MathFunction.Arcsine($$[$0-1]);
break;
case 17:this.$ = new yy.MathFunction.Arccosine($$[$0-1]);
break;
case 18:this.$ = new yy.MathFunction.Arctangent($$[$0-1]);
break;
case 19:this.$ = new yy.MathFunction.Sine($$[$0-1]);
break;
case 20:this.$ = new yy.MathFunction.Cosine($$[$0-1]);
break;
case 21:this.$ = new yy.MathFunction.Tangent($$[$0-1]);
break;
case 22:this.$ = new yy.MathFunction.HyperbolicSine($$[$0-1]);
break;
case 23:this.$ = new yy.MathFunction.HyperbolicCosine($$[$0-1]);
break;
case 24:this.$ = new yy.MathFunction.HyperbolicTangent($$[$0-1]);
break;
case 25:this.$ = [ $$[$0] ];
break;
case 26:this.$ = $$[$0-2].concat($$[$0]);
break;
}
},
table: [{3:1,4:2,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{1:[3]},{5:[1,21],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{5:[2,2],11:[2,2],12:[2,2],13:[2,2],14:[2,2],15:[2,2],16:[2,2],30:[2,2]},{5:[2,3],11:[2,3],12:[2,3],13:[2,3],14:[2,3],15:[2,3],16:[2,3],30:[2,3]},{5:[2,4],11:[2,4],12:[2,4],13:[2,4],14:[2,4],15:[2,4],16:[2,4],30:[2,4]},{5:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[2,5],30:[2,5]},{4:27,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:28,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{10:[1,29]},{10:[1,30]},{10:[1,31]},{10:[1,32]},{10:[1,33]},{10:[1,34]},{10:[1,35]},{10:[1,36]},{10:[1,37]},{10:[1,38]},{10:[1,39]},{10:[1,40]},{1:[2,1]},{4:41,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:42,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:43,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:44,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:45,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{11:[1,46],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{5:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],30:[2,12]},{4:47,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:49,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],19:48,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:49,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],19:50,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:51,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:52,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:53,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:54,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:55,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:56,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:57,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:58,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{4:59,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{5:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[1,24],15:[1,25],16:[1,26],30:[2,7]},{5:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[1,24],15:[1,25],16:[1,26],30:[2,8]},{5:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,26],30:[2,9]},{5:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,26],30:[2,10]},{5:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],30:[2,11]},{5:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[2,6],30:[2,6]},{11:[1,60],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{11:[1,61],30:[1,62]},{11:[2,25],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26],30:[2,25]},{11:[1,63],30:[1,62]},{11:[1,64],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{11:[1,65],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{11:[1,66],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{11:[1,67],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{11:[1,68],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{11:[1,69],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{11:[1,70],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{11:[1,71],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{11:[1,72],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26]},{5:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],30:[2,13]},{5:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],30:[2,14]},{4:73,6:[1,3],7:[1,4],8:[1,5],9:[1,6],10:[1,7],13:[1,8],17:[1,9],18:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20]},{5:[2,15],11:[2,15],12:[2,15],13:[2,15],14:[2,15],15:[2,15],16:[2,15],30:[2,15]},{5:[2,16],11:[2,16],12:[2,16],13:[2,16],14:[2,16],15:[2,16],16:[2,16],30:[2,16]},{5:[2,17],11:[2,17],12:[2,17],13:[2,17],14:[2,17],15:[2,17],16:[2,17],30:[2,17]},{5:[2,18],11:[2,18],12:[2,18],13:[2,18],14:[2,18],15:[2,18],16:[2,18],30:[2,18]},{5:[2,19],11:[2,19],12:[2,19],13:[2,19],14:[2,19],15:[2,19],16:[2,19],30:[2,19]},{5:[2,20],11:[2,20],12:[2,20],13:[2,20],14:[2,20],15:[2,20],16:[2,20],30:[2,20]},{5:[2,21],11:[2,21],12:[2,21],13:[2,21],14:[2,21],15:[2,21],16:[2,21],30:[2,21]},{5:[2,22],11:[2,22],12:[2,22],13:[2,22],14:[2,22],15:[2,22],16:[2,22],30:[2,22]},{5:[2,23],11:[2,23],12:[2,23],13:[2,23],14:[2,23],15:[2,23],16:[2,23],30:[2,23]},{5:[2,24],11:[2,24],12:[2,24],13:[2,24],14:[2,24],15:[2,24],16:[2,24],30:[2,24]},{11:[2,26],12:[1,22],13:[1,23],14:[1,24],15:[1,25],16:[1,26],30:[2,26]}],
defaultActions: {21:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }
            
            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column,
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match.length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 6;
break;
case 2:return 14;
break;
case 3:return 15;
break;
case 4:return 13;
break;
case 5:return 12;
break;
case 6:return 16;
break;
case 7:return 10;
break;
case 8:return 11;
break;
case 9:return 8;
break;
case 10:return 7;
break;
case 11:return 9;
break;
case 12:return 30;
break;
case 13:return 20;
break;
case 14:return 18;
break;
case 15:return 17;
break;
case 16:return 21;
break;
case 17:return 22;
break;
case 18:return 23;
break;
case 19:return 24;
break;
case 20:return 25;
break;
case 21:return 26;
break;
case 22:return 27;
break;
case 23:return 28;
break;
case 24:return 29;
break;
case 25:return 5;
break;
}
};
lexer.rules = [/^\s+/,/^[0-9]+(\.[0-9]+)?\b\b/,/^\*/,/^\//,/^-/,/^\+/,/^\^/,/^\(/,/^\)/,/^pi\b/,/^e\b/,/^i\b/,/^,/,/^max\b/,/^min\b/,/^sqrt\b/,/^arcsin\b/,/^arccos\b/,/^arctan\b/,/^sin\b/,/^cos\b/,/^tan\b/,/^sinh\b/,/^cosh\b/,/^tanh\b/,/^$/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = MathParser;
exports.parse = function () { return MathParser.parse.apply(MathParser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}