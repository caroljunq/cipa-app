const interventions = [
	{
		id: 10,
		group: "crianca",
		type: "fortalecimento",
		text: "Acolher a criança/família/cuidadores em suas necessidades",
		ivc: 100
	},
	{
		id: 11,
		group: "crianca",
		type: "fortalecimento",
		text: "Elogiar o desempenho escolar adequado da criança",
		ivc: 100
	},
	{
		id: 12,
		group: "crianca",
		type: "fortalecimento",
		text: "Estabelecer vínculo e relação de confiança com a criança/família/cuidadores",
		ivc: 100
	},
	{
		id: 13,
		group: "crianca",
		type: "fortalecimento",
		text: "Estimular e reforçar o fortalecimento da rede de apoio formada por amigos e familiares da criança/família/cuidadores",
		ivc: 100
	},
	{
		id: 14,
		group: "crianca",
		type: "fortalecimento",
		text: "Construir com as crianças formas para que possam estabelecer vínculos de confiança com adultos que sejam protetores para elas",
		ivc: 89
	},
	{
		id: 15,
		group: "crianca",
		type: "fortalecimento",
		text: "Elogiar as habilidades de comunicação ",
		ivc: 89
	},
	{
		id: 16,
		group: "crianca",
		type: "fortalecimento",
		text: "Elogiar e apoiar as ações de respostas adequadas às necessidades de saúde",
		ivc: 89
	},
	{
		id: 17,
		group: "crianca",
		type: "fortalecimento",
		text: "Elogiar e estimular o relacionamento próximo e afetivo entre pais/cuidadores e criança ",
		ivc: 89
	},
	{
		id: 18,
		group: "crianca",
		type: "fortalecimento",
		text: "Elogiar e reforçar as atitudes de realizar o cuidado",
		ivc: 89
	},
	{
		id: 19,
		group: "crianca",
		type: "fortalecimento",
		text: "Elogiar o desenvolvimento adequado da criança",
		ivc: 89
	},
	{
		id: 20,
		group: "crianca",
		type: "fortalecimento",
		text: "Estimular e estabelecer conjuntamente mecanismos de defesa apropriados",
		ivc: 89
	},
	{
		id: 21,
		group: "crianca",
		type: "fortalecimento",
		text: "Incentivar a criança/família a planejar o futuro",
		ivc: 89
	},
	{
		id: 22,
		group: "crianca",
		type: "fortalecimento",
		text: "Oferecer feedback à criança/família quanto a seu enfrentamento da situação de violência doméstica",
		ivc: 89
	},
	{
		id: 23,
		group: "crianca",
		type: "fortalecimento",
		text: "Orientar e encorajar vínculos afetivos e de cuidado entre os pais/cuidadores e as crianças",
		ivc: 89
	},
	{
		id: 24,
		group: "crianca",
		type: "fortalecimento",
		text: "Reforçar as habilidades e os pontos positivos identificados pela própria criança/família/cuidadores para o enfrentamento da violência doméstica",
		ivc: 89
	},
	{
		id: 55,
		group: "crianca",
		type: "desgastes",
		text: "Abordar com atenção de maneira não punitiva e com segurança a fim de fortalecer a confiança ",
		ivc: 100
	},
	{
		id: 56,
		group: "crianca",
		type: "desgastes",
		text: "Acolher a criança/família/cuidadores em suas necessidades",
		ivc: 100
	},
	{
		id: 57,
		group: "crianca",
		type: "desgastes",
		text: "Articular com outros profissionais e outros setores a intervenção junto à criança/família/cuidadores e o monitoramento do caso ",
		ivc: 90
	},
	{
		id: 58,
		group: "crianca",
		type: "desgastes",
		text: "Atender a criança em ambiente com privacidade e segurança",
		ivc: 90
	},
	{
		id: 59,
		group: "crianca",
		type: "desgastes",
		text: "Atender de acordo com o protocolo específico com ações de caráter clínico e de proteção à criança ",
		ivc: 90
	},
	{
		id: 60,
		group: "crianca",
		type: "desgastes",
		text: "Atender os pais/cuidadores em separado entre si e da criança no caso da suspeita da violência incorrer sobre eles ",
		ivc: 90
	},
	{
		id: 61,
		group: "crianca",
		type: "desgastes",
		text: "Avaliar a capacidade de compreensão das informações usar linguagem acessível e sem pré-julgamentos e apresentar as informações de maneira gradual e objetiva ",
		ivc: 90
	},
	{
		id: 62,
		group: "crianca",
		type: "desgastes",
		text: "Estabelecer com a criança/família/cuidadores ações para o enfrentamento da violência doméstica",
		ivc: 90
	},
	{
		id: 63,
		group: "crianca",
		type: "desgastes",
		text: "Identificar comportamento agressivos e/ou processo de mascaramento de sentimentos expressos em comportamentos agressivos ",
		ivc: 90
	},
	{
		id: 64,
		group: "crianca",
		type: "desgastes",
		text: "Construir com as crianças formas para que possam estabelecer vínculos de confiança com adultos que sejam protetores para elas",
		ivc: 89
	},
	{
		id: 65,
		group: "crianca",
		type: "desgastes",
		text: "Oferecer feedback à criança/família quanto a seu enfrentamento da situação de violência doméstica",
		ivc: 89
	},
	{
		id: 66,
		group: "crianca",
		type: "desgastes",
		text: "Orientar e encorajar vínculos afetivos e de cuidado entre os pais/cuidadores e as crianças",
		ivc: 89
	},
	{
		id: 67,
		group: "crianca",
		type: "desgastes",
		text: "Ajudar a criança/família a relembrar situações adversas superadas encorajando-as a enfrentar a situação atual ",
		ivc: 80
	},
	{
		id: 68,
		group: "crianca",
		type: "desgastes",
		text: "Auxiliar a criança a compreender que não tem culpa da situação de violência",
		ivc: 80
	},
	{
		id: 69,
		group: "crianca",
		type: "desgastes",
		text: "Avaliar as necessidades e garantir as medidas protetivas imediatas ",
		ivc: 80
	},
	{
		id: 70,
		group: "crianca",
		type: "desgastes",
		text: "Discutir sobre educação sexual/sexualidade ",
		ivc: 80
	},
	{
		id: 71,
		group: "crianca",
		type: "desgastes",
		text: "Encorajar a expressão e a verbalização de percepções sentimentos medos e dificuldades",
		ivc: 80
	},
	{
		id: 72,
		group: "crianca",
		type: "desgastes",
		text: "Estabelecer vínculo com a criança/família/cuidadores",
		ivc: 80
	},
	{
		id: 73,
		group: "crianca",
		type: "desgastes",
		text: "Estimular o uso de recursos espirituais se desejado ",
		ivc: 80
	},
	{
		id: 74,
		group: "crianca",
		type: "desgastes",
		text: "Evitar perguntar direta e frequentemente sobre os detalhes da violência sofrida",
		ivc: 80
	},
	{
		id: 75,
		group: "crianca",
		type: "desgastes",
		text: "Identificar as necessidades da criança em situações de violência ",
		ivc: 80
	},
	{
		id: 76,
		group: "crianca",
		type: "desgastes",
		text: "Investigar a possibilidade de a criança estar sofrendo violência",
		ivc: 80
	},
	{
		id: 77,
		group: "crianca",
		type: "desgastes",
		text: "Monitorar ideação/gestos suicidas",
		ivc: 80
	},
	{
		id: 78,
		group: "crianca",
		type: "desgastes",
		text: "Notificar o caso suspeito ou confirmado de violência",
		ivc: 80
	},
	{
		id: 79,
		group: "crianca",
		type: "desgastes",
		text: "Observar na criança sinais de erotização precoce e/ou atitudes sexuais impróprias para a idade ",
		ivc: 80
	},
	{
		id: 80,
		group: "crianca",
		type: "desgastes",
		text: "Obter dados sobre ansiedade/estresse/humor deprimido/tristeza/depressão",
		ivc: 80
	},
	{
		id: 81,
		group: "crianca",
		type: "desgastes",
		text: "Obter dados sobre apoio emocional",
		ivc: 80
	},
	{
		id: 82,
		group: "crianca",
		type: "desgastes",
		text: "Obter dados sobre comportamento sexual inapropriado",
		ivc: 80
	},
	{
		id: 83,
		group: "crianca",
		type: "desgastes",
		text: "Obter dados sobre desempenho/frequência/convivência escolar",
		ivc: 80
	},
	{
		id: 84,
		group: "crianca",
		type: "desgastes",
		text: "Obter dados sobre higiene corporal e/ou oral",
		ivc: 80
	},
	{
		id: 85,
		group: "crianca",
		type: "desgastes",
		text: "Obter dados sobre recursos para controlar a ansiedade",
		ivc: 80
	},
	{
		id: 86,
		group: "crianca",
		type: "desgastes",
		text: "Obter dados sobre sinais de desconforto",
		ivc: 80
	},
	{
		id: 87,
		group: "crianca",
		type: "desgastes",
		text: "Obter dados sobre uso/abuso/abstinência de álcool e/ou drogas",
		ivc: 80
	},
	{
		id: 88,
		group: "crianca",
		type: "desgastes",
		text: "Orientar sobre sono",
		ivc: 80
	},
	{
		id: 89,
		group: "crianca",
		type: "desgastes",
		text: "Ouvir as preocupações sentimentos e perguntas e oferecer as informações solicitadas pela criança/família/cuidadores",
		ivc: 80
	},
	{
		id: 90,
		group: "crianca",
		type: "desgastes",
		text: "Providenciar ambiente com brinquedos acessíveis e compatíveis com a idade",
		ivc: 80
	},
	{
		id: 91,
		group: "crianca",
		type: "desgastes",
		text: "Reforçar aspectos positivos",
		ivc: 80
	},
	{
		id: 97,
		group: "familia",
		type: "fortalecimento",
		text: "Acolher a criança/família/cuidadores em suas necessidades",
		ivc: 100
	},
	{
		id: 98,
		group: "familia",
		type: "fortalecimento",
		text: "Encorajar as trocas de percepções e sentimentos entre os membros da família",
		ivc: 100
	},
	{
		id: 99,
		group: "familia",
		type: "fortalecimento",
		text: "Enfatizar valores familiares e sociais importantes para uma convivência familiar fortalecida",
		ivc: 100
	},
	{
		id: 100,
		group: "familia",
		type: "fortalecimento",
		text: "Estabelecer vínculo e relação de confiança com a criança/família/cuidadores",
		ivc: 100
	},
	{
		id: 101,
		group: "familia",
		type: "fortalecimento",
		text: "Estimular e reforçar o fortalecimento da rede de apoio formada por amigos e familiares da criança/família/cuidadores ",
		ivc: 100
	},
	{
		id: 102,
		group: "familia",
		type: "fortalecimento",
		text: "Reforçar a importância do diálogo como meio de resolução das situações cotidianas e encorajar os membros da família a identificarem e resolverem os conflitos por meio do diálogo",
		ivc: 100
	},
	{
		id: 103,
		group: "familia",
		type: "fortalecimento",
		text: "Reforçar a participação em atividades sociais e comunitárias",
		ivc: 100
	},
	{
		id: 104,
		group: "familia",
		type: "fortalecimento",
		text: "Apoiar a família/cuidador(a) de maneira que consiga identificar recursos próprios da comunidade e de projetos sociais para enfrentar as dificuldades cotidianas ",
		ivc: 89
	},
	{
		id: 105,
		group: "familia",
		type: "fortalecimento",
		text: "Construir coletivamente estratégias para participação em atividades sociais e comunitárias",
		ivc: 89
	},
	{
		id: 106,
		group: "familia",
		type: "fortalecimento",
		text: "Construir coletivamente formas de a família/cuidadores acessarem os serviços comunitários ",
		ivc: 89
	},
	{
		id: 107,
		group: "familia",
		type: "fortalecimento",
		text: "Elogiar a atitude de analisar as possibilidades e as consequências envolvidas no processo de decisão ",
		ivc: 89
	},
	{
		id: 108,
		group: "familia",
		type: "fortalecimento",
		text: "Elogiar as ações que promovem proteção às crianças ",
		ivc: 89
	},
	{
		id: 109,
		group: "familia",
		type: "fortalecimento",
		text: "Elogiar as habilidades de comunicação",
		ivc: 89
	},
	{
		id: 110,
		group: "familia",
		type: "fortalecimento",
		text: "Elogiar e apoiar as ações de respostas adequadas às necessidades de saúde",
		ivc: 89
	},
	{
		id: 111,
		group: "familia",
		type: "fortalecimento",
		text: "Elogiar e estimular o relacionamento próximo e afetivo entre pais/cuidadores e criança ",
		ivc: 89
	},
	{
		id: 112,
		group: "familia",
		type: "fortalecimento",
		text: "Elogiar e reforçar as atitudes de realizar o cuidado ",
		ivc: 89
	},
	{
		id: 113,
		group: "familia",
		type: "fortalecimento",
		text: "Elogiar e reforçar o papel dos pais/cuidadores como cuidadores e protetores das crianças ",
		ivc: 89
	},
	{
		id: 114,
		group: "familia",
		type: "fortalecimento",
		text: "Elogiar o desenvolvimento adequado da criança ",
		ivc: 89
	},
	{
		id: 115,
		group: "familia",
		type: "fortalecimento",
		text: "Encorajar o diálogo em família para discutir os problemas e as possíveis soluções ",
		ivc: 89
	},
	{
		id: 116,
		group: "familia",
		type: "fortalecimento",
		text: "Ensinar os pais/cuidadores a reconhecerem as conquistas das crianças ",
		ivc: 89
	},
	{
		id: 117,
		group: "familia",
		type: "fortalecimento",
		text: "Estabelecer vínculo com a família/cuidadores e incentivar ações que possam proteger as crianças",
		ivc: 89
	},
	{
		id: 118,
		group: "familia",
		type: "fortalecimento",
		text: "Estimular e estabelecer conjuntamente mecanismos de defesa apropriados ",
		ivc: 89
	},
	{
		id: 119,
		group: "familia",
		type: "fortalecimento",
		text: "Explicar aos pais/cuidadores a importância da recreação e lazer para o desenvolvimento da criança",
		ivc: 89
	},
	{
		id: 120,
		group: "familia",
		type: "fortalecimento",
		text: "Explicar aos pais/cuidadores o ritmo próprio de desenvolvimento de cada criança",
		ivc: 89
	},
	{
		id: 121,
		group: "familia",
		type: "fortalecimento",
		text: "Explicar aos pais/cuidadores que as crianças são sujeitos de direito e que devem ser respeitadas ",
		ivc: 89
	},
	{
		id: 122,
		group: "familia",
		type: "fortalecimento",
		text: "Incentivar a criança/família a planejar o futuro ",
		ivc: 89
	},
	{
		id: 123,
		group: "familia",
		type: "fortalecimento",
		text: " Oferecer feedback à criança/família quanto a seu enfrentamento da situação de violência doméstica ",
		ivc: 89
	},
	{
		id: 124,
		group: "familia",
		type: "fortalecimento",
		text: "Orientar e encorajar vínculos afetivos e de cuidado entre os pais/cuidadores e as crianças ",
		ivc: 89
	},
	{
		id: 125,
		group: "familia",
		type: "fortalecimento",
		text: "Orientar família/cuidadores sobre os cuidados e o desenvolvimento do bebê (ou lactente)",
		ivc: 89
	},
	{
		id: 126,
		group: "familia",
		type: "fortalecimento",
		text: "Orientar os pais/cuidadores sobre a importância de educar sem violência ",
		ivc: 89
	},
	{
		id: 127,
		group: "familia",
		type: "fortalecimento",
		text: "Reforçar as habilidades e os pontos positivos identificados pela própria criança/família/cuidadores para o enfrentamento da violência doméstica",
		ivc: 89
	},
	{
		id: 128,
		group: "familia",
		type: "fortalecimento",
		text: "Elogiar os pais nas atitudes acertadas no processo educacional dos filhos ",
		ivc: 80
	},
	{
		id: 145,
		group: "familia",
		type: "desgastes",
		text: "Abordar com atenção de maneira não punitiva e com segurança a fim de fortalecer a confiança",
		ivc: 100
	},
	{
		id: 146,
		group: "familia",
		type: "desgastes",
		text: "Acolher a criança/família/cuidadores em suas necessidades",
		ivc: 100
	},
	{
		id: 147,
		group: "familia",
		type: "desgastes",
		text: "Enfatizar valores familiares e sociais importantes para uma convivência familiar fortalecida",
		ivc: 100
	},
	{
		id: 148,
		group: "familia",
		type: "desgastes",
		text: "Estimular e reforçar o fortalecimento da rede de apoio formada por amigos e familiares da criança/família/cuidadores",
		ivc: 100
	},
	{
		id: 149,
		group: "familia",
		type: "desgastes",
		text: "Articular com outros profissionais e outros setores a intervenção junto à criança/família/cuidadores e o monitoramento do caso",
		ivc: 90
	},
	{
		id: 150,
		group: "familia",
		type: "desgastes",
		text: "Atender os pais/cuidadores em separado entre si e da criança no caso da suspeita da violência incorrer sobre eles",
		ivc: 90
	},
	{
		id: 151,
		group: "familia",
		type: "desgastes",
		text: "Avaliar a capacidade de compreensão das informações usar linguagem acessível e sem pré-julgamentos e apresentar as informações de maneira gradual e objetiva",
		ivc: 90
	},
	{
		id: 152,
		group: "familia",
		type: "desgastes",
		text: "Estabelecer com a criança/família/cuidadores ações para o enfrentamento da violência doméstica ",
		ivc: 90
	},
	{
		id: 153,
		group: "familia",
		type: "desgastes",
		text: "Estimular a busca de mais conhecimento sobre o Estatuto da Criança e do Adolescente e construir coletivamente estratégias de participação em atividades socioeducativas que discutam sobre o Estatuto da Criança e do Adolescente",
		ivc: 90
	},
	{
		id: 154,
		group: "familia",
		type: "desgastes",
		text: "Identificar comportamento agressivos e/ou processo de mascaramento de sentimentos expressos em comportamentos agressivos ",
		ivc: 90
	},
	{
		id: 155,
		group: "familia",
		type: "desgastes",
		text: "Identificar conflitos/condições familiares geradores de violência ou que possam gerar maior vulnerabilidade a práticas violentas",
		ivc: 90
	},
	{
		id: 156,
		group: "familia",
		type: "desgastes",
		text: "Reconhecer os valores da família/cuidadores de maneira isenta de julgamentos",
		ivc: 90
	},
	{
		id: 157,
		group: "familia",
		type: "desgastes",
		text: "Apoiar a família/cuidador(a) de maneira que consiga identificar recursos próprios da comunidade e de projetos sociais para enfrentar as dificuldades cotidianas ",
		ivc: 89
	},
	{
		id: 158,
		group: "familia",
		type: "desgastes",
		text: "Construir coletivamente estratégias para participação em atividades sociais e comunitárias",
		ivc: 89
	},
	{
		id: 159,
		group: "familia",
		type: "desgastes",
		text: "Construir coletivamente formas de a família/cuidadores acessarem os serviços comunitários ",
		ivc: 89
	},
	{
		id: 160,
		group: "familia",
		type: "desgastes",
		text: "Construir com a escola e com os pais/cuidadores oportunidades para que estes participem das atividades da escola",
		ivc: 89
	},
	{
		id: 161,
		group: "familia",
		type: "desgastes",
		text: "Encorajar o diálogo em família para discutir os problemas e as possíveis soluções ",
		ivc: 89
	},
	{
		id: 162,
		group: "familia",
		type: "desgastes",
		text: "Ensinar os pais/cuidadores a reconhecerem as conquistas das crianças ",
		ivc: 89
	},
	{
		id: 163,
		group: "familia",
		type: "desgastes",
		text: "Estabelecer vínculo com a família/cuidadores e incentivar ações que possam proteger as crianças",
		ivc: 89
	},
	{
		id: 164,
		group: "familia",
		type: "desgastes",
		text: "Explicar aos pais/cuidadores a importância da recreação e lazer para o desenvolvimento da criança",
		ivc: 89
	},
	{
		id: 165,
		group: "familia",
		type: "desgastes",
		text: "Explicar aos pais/cuidadores o ritmo próprio de desenvolvimento de cada criança",
		ivc: 89
	},
	{
		id: 166,
		group: "familia",
		type: "desgastes",
		text: "Explicar aos pais/cuidadores que as crianças são sujeitos de direito e que devem ser respeitadas ",
		ivc: 89
	},
	{
		id: 167,
		group: "familia",
		type: "desgastes",
		text: "Oferecer feedback à criança/família quanto a seu enfrentamento da situação de violência doméstica ",
		ivc: 89
	},
	{
		id: 168,
		group: "familia",
		type: "desgastes",
		text: "Orientar e encorajar vínculos afetivos e de cuidado entre os pais/cuidadores e as crianças ",
		ivc: 89
	},
	{
		id: 169,
		group: "familia",
		type: "desgastes",
		text: "Orientar família/cuidadores sobre os cuidados e o desenvolvimento do bebê (ou lactente)",
		ivc: 89
	},
	{
		id: 170,
		group: "familia",
		type: "desgastes",
		text: "Ajudar a criança/família a relembrar situações adversas superadas encorajando-as a enfrentar a situação atual",
		ivc: 80
	},
	{
		id: 171,
		group: "familia",
		type: "desgastes",
		text: "Atentar para sinais de que os pais não estão afetivamente preparados para receber o novo bebê",
		ivc: 80
	},
	{
		id: 172,
		group: "familia",
		type: "desgastes",
		text: "Avaliar a pertinência de intervenções que possam colocar em risco a proteção à criança",
		ivc: 80
	},
	{
		id: 173,
		group: "familia",
		type: "desgastes",
		text: "Construir com a família/cuidadores ações para apoio e proteção às crianças",
		ivc: 80
	},
	{
		id: 174,
		group: "familia",
		type: "desgastes",
		text: "Construir estratégias conjuntas sobre como educar e se comunicar com as crianças para estabelecer limites sem violência",
		ivc: 80
	},
	{
		id: 175,
		group: "familia",
		type: "desgastes",
		text: "Discutir sobre educação sexual/sexualidade",
		ivc: 80
	},
	{
		id: 176,
		group: "familia",
		type: "desgastes",
		text: "Encorajar os pais/cuidadores a expressarem as dificuldades para lidarem com as crianças",
		ivc: 80
	},
	{
		id: 177,
		group: "familia",
		type: "desgastes",
		text: "Estabelecer vínculo com a criança/família/cuidadores ",
		ivc: 80
	},
	{
		id: 178,
		group: "familia",
		type: "desgastes",
		text: "Estimular o uso de recursos espirituais se desejado",
		ivc: 80
	},
	{
		id: 179,
		group: "familia",
		type: "desgastes",
		text: "Explicar sobre o Estatuto da Criança e do Adolescente e possibilitar formas de acessá-lo ",
		ivc: 80
	},
	{
		id: 180,
		group: "familia",
		type: "desgastes",
		text: "Incentivar a interação social (ampliação de rede de relacionamentos com pessoas significativas e com interesses e metas comuns) de forma gradativa ",
		ivc: 80
	},
	{
		id: 181,
		group: "familia",
		type: "desgastes",
		text: "Investigar contexto sócio familiar da criança e características do grupo social a qual pertence ",
		ivc: 80
	},
	{
		id: 182,
		group: "familia",
		type: "desgastes",
		text: "Observar sinais de descuido intencionais dos pais/cuidadores em relação à criança e/ou despreocupação com o bem estar e desenvolvimento da criança",
		ivc: 80
	},
	{
		id: 183,
		group: "familia",
		type: "desgastes",
		text: "Obter dados sobre capacidade para executar cuidado",
		ivc: 80
	},
	{
		id: 184,
		group: "familia",
		type: "desgastes",
		text: "Obter dados sobre uso/abuso/abstinência de álcool e/ou drogas ",
		ivc: 80
	},
	{
		id: 185,
		group: "familia",
		type: "desgastes",
		text: "Orientar a família/cuidadores sobre como lidar com o comportamento autodestrutivo/agressivo",
		ivc: 80
	},
	{
		id: 186,
		group: "familia",
		type: "desgastes",
		text: "Orientar família/cuidadores sobre higiene ",
		ivc: 80
	},
	{
		id: 187,
		group: "familia",
		type: "desgastes",
		text: "Orientar sobre segurança da criança ",
		ivc: 80
	},
	{
		id: 188,
		group: "familia",
		type: "desgastes",
		text: "Orientar sobre sono ",
		ivc: 80
	},
	{
		id: 189,
		group: "familia",
		type: "desgastes",
		text: "Ouvir as preocupações sentimentos e perguntas e oferecer as informações solicitadas pela criança/família/cuidadores",
		ivc: 80
	},
	{
		id: 190,
		group: "familia",
		type: "desgastes",
		text: "Planejar com os pais/cuidadores formas para construir ligação afetiva e vínculo de confiança com as crianças",
		ivc: 80
	},
	{
		id: 191,
		group: "familia",
		type: "desgastes",
		text: "Planejar em conjunto o abandono/redução do uso de álcool e/ou drogas ",
		ivc: 80
	},
	{
		id: 192,
		group: "familia",
		type: "desgastes",
		text: "Reforçar aspectos positivos ",
		ivc: 80
	},
	{
		id: 193,
		group: "familia",
		type: "desgastes",
		text: "Estimular o comparecimento aos serviços de saúde e garantir que o atendimento seja realizado ",
		ivc: 80
	}
]

export const interventions_list = interventions;