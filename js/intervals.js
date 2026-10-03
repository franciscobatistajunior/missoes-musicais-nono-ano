/* A grafia é independente da altura usada no áudio. */
(function(root){
'use strict';
const names=['dó','ré','mi','fá','sol','lá','si'], letters=['C','D','E','F','G','A','B'], natural=[0,2,4,5,7,9,11], baseline=[0,2,4,5,7,9,11,12], ordinals=['uníssono','segunda','terça','quarta','quinta','sexta','sétima','oitava'];
function note(letter,alteration,octave){return {letter,alteration,octave};}
function parse(s){const m=/^([CDEFGAB])([#b]?)([3-7])$/.exec(s);if(!m)throw new Error('Grafia inválida: '+s);return note(m[1],m[2]==='#'?1:m[2]==='b'?-1:0,Number(m[3]));}
function valid(n){return !!n&&letters.includes(n.letter)&&Number.isInteger(n.alteration)&&Math.abs(n.alteration)<=1&&Number.isInteger(n.octave)&&n.octave>=3&&n.octave<=7;}
function midi(n){if(!valid(n))throw new Error('Nota inválida');return 12*(n.octave+1)+natural[letters.indexOf(n.letter)]+n.alteration;}
function label(n){return names[letters.indexOf(n.letter)]+(n.alteration===1?'♯':n.alteration===-1?'♭':'')+n.octave;}
function degree(n){return n.octave*7+letters.indexOf(n.letter);}
function analyze(a,b){
 const semitones=midi(b)-midi(a),number=degree(b)-degree(a)+1;
 if(semitones<0||number<1)return {valid:false,direction:'descendente',message:'A seleção está descendente na altura ou na escrita. Reorganize origem e destino para investigar um intervalo simples ascendente.'};
 if(number>8||semitones>12)return {valid:false,message:'Escolha um intervalo simples, do uníssono à oitava.'};
 const delta=semitones-baseline[number-1],perfect=[1,4,5,8].includes(number);
 const quality=perfect?({0:'justa',1:'aumentada','-1':'diminuta'})[delta]:({0:'maior','-1':'menor',1:'aumentada','-2':'diminuta'})[delta];
 if(!quality)return {valid:false,message:'Essa grafia produz uma qualidade dupla, fora do conteúdo desta jornada. Experimente outras notas.'};
 const counted=Array.from({length:number},(_,i)=>names[(letters.indexOf(a.letter)+i)%7]);
 const fullname=number===1?'uníssono '+(quality==='justa'?'justo':quality==='aumentada'?'aumentado':'diminuto'):ordinals[number-1]+' '+quality;
 return {valid:true,number,semitones,quality,name:fullname,counted,direction:semitones===0?'mesma altura':'ascendente'};
}
function fromMidi(v,spelling='sharp'){const sharp=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'],flat=['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];return parse((spelling==='flat'?flat:sharp)[v%12]+(Math.floor(v/12)-1));}
root.Music={names,letters,note,parse,valid,midi,label,analyze,fromMidi};if(typeof module!=='undefined')module.exports=root.Music;
})(typeof window!=='undefined'?window:globalThis);
