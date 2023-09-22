PennController.ResetPrefix(null);

Sequence("Participante", "Intrucoes", randomize("Experimento"), SendResults(), "Final");

Header(

        defaultText
         .css("font-size", "1.2em")
         .print()
        , 
      
        defaultTextInput
         .css("font-size", "1.2em")
         .print()
        ,
      
        defaultTextButtom
         .css("font-size", "1.2em")
         .print()
         .center()
         .wait()
        ,
  
)

newtrial("Participante",

        newText("<p>Bem-Vindos</p>")
        ,
        newText("<p>Neste experimento, você vai ouvir um frase e depois deve escolher a melhoropção da interpretação para ela.</p>")
        ,
        newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo</p>")
        ,
        newTextImput("Nome")
        ,
        newText("<p>Agora selecione sua ESCOLARIDADE na caixa abaixo e aperte o botão 'Iniciar' para começar</p>")
        ,
         
        NewDropDown("Escolaridade", "Selecione sua escolaridade")
        .add("Médio completo", "Superior em Curso", "Superior completo", "Pós--Graduação")
        .css("font-size", "1.2em")
        .print()
        .log()
        , 

        newButton("Iniciar")
        ,

  newVar("NOME")
     .global()
     .set( getTextInput("Nome") )
  
)

.log("NOME"  , getVar("NOME") )

newTrial("Instrucoes",
        
   newText("<p>INSTRUÇÕES</p>")
   ,
   newText("<p>Ouça a frase com atenção e depois clique em cima de uma sentenças, <strong>A</strong> ou <strong>B</strong>, que você considerar a melhor interpretação.</p>")
   ,

   newButton("Iniciar")
      .log()
           
)

Template("tabela_scrippt_auditivo.csv", 
         
     varible => newTrial( "Experimento",

        newAudio("AudioExperimento", row.AudioExperimento)
           .play()
        ,
                         
        newImage("alto_falante_icone.png")
           .size( 90 , 90 )
           .print()
        ,
       
        newButton("Próximo")
           .log()
           .remove()
        ,
                          
        getImage("alto_falante_icone.png")
           .remove()
       ,
                         
        
        newText("A",row.SentencaA)
        ,
        newText("B",row.SentencaB)
        ,
                         
        newCanvas( 1400 , 700 )
           .add( 150 , 100 , getText("A") )
           .add( 150 , 100 , getText("B") )
           .print() 
        ,
                         
        newSelector()
           .add( getText("A") , getText("B") )
           .keys("A","B")
           .log()
           .wait()
    )
         
    .log("Group", row.Group)
    .log("Item", row.Item)
);

newTrial( "Final" ,
   newText("<p> O experimento foi concluído. Obrigada pela participacao!</p>")
      .css( "font-size","1.2em)
      .print()
      .wait()
    ,
    newText("<p> Você receberá um e-mail com a sua declaração de participacao.</p>")
       .css( "font-size","1.2em)
      .print()
      .wait()        
)

.setOption("countsForProgressBar",false);           

.setOption("countsForProgressBar",false);
