const diagnostics = [
	{
		id: 1,
		group: "crianca",
		type: "fortalecimento",
		text: "Apoio Social Eficaz",
		ivc: 100
	},
	{
		id: 2,
		group: "crianca",
		type: "fortalecimento",
		text: "Desempenho Escolar Adequado",
		ivc: 100
	},
	{
		id: 3,
		group: "crianca",
		type: "fortalecimento",
		text: "Desenvolvimento Infantil Eficaz",
		ivc: 100
	},
	{
		id: 4,
		group: "crianca",
		type: "fortalecimento",
		text: "Ligação Afetiva na Relação Cuidador-Criança Eficaz",
		ivc: 100
	},
	{
		id: 5,
		group: "crianca",
		type: "fortalecimento",
		text: "Apoio Familiar Positivo",
		ivc: 88
	},
	{
		id: 6,
		group: "crianca",
		type: "fortalecimento",
		text: "Capacidade para Participar no Planejamento do Cuidado Eficaz",
		ivc: 88
	},
	{
		id: 7,
		group: "crianca",
		type: "fortalecimento",
		text: "Comunicação Eficaz",
		ivc: 88
	},
	{
		id: 8,
		group: "crianca",
		type: "fortalecimento",
		text: "Continuidade do Cuidado Eficaz",
		ivc: 88
	},
	{
		id: 9,
		group: "crianca",
		type: "fortalecimento",
		text: "Socialização Eficaz",
		ivc: 88
	},
	{
		id: 25,
		group: "crianca",
		type: "desgastes",
		text: "Abandono da Criança/Abandono da Criança Eliminado ",
		ivc: 100
	},
	{
		id: 26,
		group: "crianca",
		type: "desgastes",
		text: "Comportamento de Isolamento (ou Retraimento Introversão)/Comportamento de Isolamento (ou Retraimento Introversão) Diminuído/Comportamento de Isolamento (ou Retraimento Introversão) Eliminado",
		ivc: 100
	},
	{
		id: 27,
		group: "crianca",
		type: "desgastes",
		text: "Comportamento Violento/Comportamento Violento Diminuído/Comportamento Violento Eliminado",
		ivc: 100
	},
	{
		id: 28,
		group: "crianca",
		type: "desgastes",
		text: "Desenvolvimento Infantil Prejudicado/Desenvolvimento Infantil Melhorado/Desenvolvimento Infantil Eficaz",
		ivc: 100
	},
	{
		id: 29,
		group: "crianca",
		type: "desgastes",
		text: "Vítima de Abuso Infantil/Abuso Infantil Eliminado",
		ivc: 100
		 
	},
	{
		id: 30,
		group: "crianca",
		type: "desgastes",
		text: "Apoio Familiar Prejudicado/Apoio Familiar Melhorado/Apoio Familiar Positivo ",
		ivc: 86
		 
	},
	{
		id: 31,
		group: "crianca",
		type: "desgastes",
		text: "Apoio Social Prejudicado/Apoio Social Eficaz",
		ivc: 86
	},
	{
		id: 32,
		group: "crianca",
		type: "desgastes",
		text: "Atividade Lúdica Insatisfatória/Atividade Lúdica Melhorada/Atividade Lúdica Satisfatória",
		ivc: 86
	},
	{
		id: 33,
		group: "crianca",
		type: "desgastes",
		text: "Barreira na Comunicação/Barreira na Comunicação Reduzida/Barreira na Comunicação Eliminada",
		ivc: 86
	},
	{
		id: 34,
		group: "crianca",
		type: "desgastes",
		text: "Comportamento Autodestrutivo/Comportamento Autodestrutivo Diminuído/Comportamento Autodestrutivo Eliminado",
		ivc: 86
	},
	{
		id: 35,
		group: "crianca",
		type: "desgastes",
		text: "Comportamento Sexual Inapropriado/Comportamento Sexual Inapropriado Reduzido/Comportamento Sexual Inapropriado Eliminado",
		ivc: 86
	},
	{
		id: 36,
		group: "crianca",
		type: "desgastes",
		text: "Enfrentamento Prejudicado/Enfrentamento Melhorado/Enfrentamento Eficaz",
		ivc: 86
	},
	{
		id: 37,
		group: "crianca",
		type: "desgastes",
		text: "Medo de Abandono/Medo de Abandono Reduzido/Medo de Abandono Eliminado",
		ivc: 86
	},
	{
		id: 38,
		group: "crianca",
		type: "desgastes",
		text: "Medo/Medo Reduzido/Medo Eliminado",
		ivc: 86
	},
	{
		id: 39,
		group: "crianca",
		type: "desgastes",
		text: "Privação do Sono/Privação do Sono Reduzida/Privação do Sono Eliminada ",
		ivc: 86
	},
	{
		id: 40,
		group: "crianca",
		type: "desgastes",
		text: "Rede Social Insuficiente/Rede Social Aumentada/Rede Social Suficiente",
		ivc: 86
	},
	{
		id: 41,
		group: "crianca",
		type: "desgastes",
		text: "Risco de Dificuldade com Enfrentamento/Risco de Dificuldade com Enfrentamento Reduzido/Risco de Dificuldade com Enfrentamento Eliminado",
		ivc: 86
	},
	{
		id: 42,
		group: "crianca",
		type: "desgastes",
		text: "Risco de Ser Vítima de Abuso Infantil/Risco de Ser Vítima de Abuso Infantil Reduzido/Risco de Ser Vítima de Abuso Infantil Eliminado",
		ivc: 86
	},
	{
		id: 43,
		group: "crianca",
		type: "desgastes",
		text: "Risco de Ser Vítima de Negligência Infantil/Risco de Ser Vítima de Negligência Infantil Reduzido/Risco de Ser Vítima de Negligência Infantil Eliminado",
		ivc: 86
	},
	{
		id: 44,
		group: "crianca",
		type: "desgastes",
		text: "Risco de Sono Prejudicado/Risco de Sono Prejudicado Reduzido/Risco de Sono Prejudicado Eliminado",
		ivc: 86
	},
	{
		id: 45,
		group: "crianca",
		type: "desgastes",
		text: "Risco de Violência Doméstica/Risco de Violência Doméstica Reduzido/Risco de Violência Doméstica Eliminado",
		ivc: 86
	},
	{
		id: 46,
		group: "crianca",
		type: "desgastes",
		text: "Sinais de Ansiedade/Sinais Ansiedade Reduzidos/Sinais de Ansiedade Eliminados",
		ivc: 86
	},
	{
		id: 47,
		group: "crianca",
		type: "desgastes",
		text: "Sinais de Depressão/Sinais de Depressão Diminuídos/Sinais de Depressão Eliminados",
		ivc: 86
	},
	{
		id: 48,
		group: "crianca",
		type: "desgastes",
		text: "Socialização Prejudicada/Socialização Melhorada/Socialização Eficaz",
		ivc: 86
	},
	{
		id: 49,
		group: "crianca",
		type: "desgastes",
		text: "Tristeza Crônica/Tristeza Crônica Reduzida/Tristeza Crônica Eliminada",
		ivc: 86
	},
	{
		id: 50,
		group: "crianca",
		type: "desgastes",
		text: "Vergonha/Vergonha Reduzida",
		ivc: 86
	},
	{
		id: 51,
		group: "crianca",
		type: "desgastes",
		text: "Violência contra outras Pessoas no Domicílio/Violência contra outras Pessoas no Domicílio Eliminada",
		ivc: 86
	},
	{
		id: 52,
		group: "crianca",
		type: "desgastes",
		text: "Vítima de Agressão Sexual (ou Estupro)/Vítima Protegida contra Novos Episódios de Agressão Sexual (ou Estupro)",
		ivc: 86
	},
	{
		id: 53,
		group: "crianca",
		type: "desgastes",
		text: "Vítima de Negligência Infantil/Negligência Infantil Eliminada",
		ivc: 86
	},
	{
		id: 54,
		group: "crianca",
		type: "desgastes",
		text: "Desempenho Escolar Prejudicado/Desempenho Escolar Melhorado/Desempenho Escolar Adequado",
		ivc: 86
	},
	{
		id: 92,
		group: "familia",
		type: "fortalecimento",
		text: "Apoio Social Eficaz",
		ivc: 100
	},
	{
		id: 93,
		group: "familia",
		type: "fortalecimento",
		text: "Cuidador(a) Capaz de Executar o Cuidado",
		ivc: 100
	},
	{
		id: 94,
		group: "familia",
		type: "fortalecimento",
		text: "Enfrentamento Familiar Eficaz",
		ivc: 88
	},
	{
		id: 95,
		group: "familia",
		type: "fortalecimento",
		text: "Família/Cuidador(a) Capaz de Participar do Planejamento do Cuidado",
		ivc: 88
	},
	{
		id: 96,
		group: "familia",
		type: "fortalecimento",
		text: "Prontidão para Tomada de Decisão",
		ivc: 88
	},
	{
		id: 129,
		group: "familia",
		type: "desgastes",
		text: "Conhecimento sobre Educação Sem Violência Insatisfatório/Conhecimento sobre Educação Sem Violência Melhorado/Conhecimento sobre Educação Sem Violência Satisfatório",
		ivc: 100
	},
	{
		id: 130,
		group: "familia",
		type: "desgastes",
		text: "Sinais de Estresse dos Pais e Cuidadores Presentes/Sinais de Estresse dos Pais e Cuidadores Reduzidos/Sinais de Estresse dos Pais e Cuidadores Eliminados",
		ivc: 100
	},
	{
		id: 131,
		group: "familia",
		type: "desgastes",
		text: "Apoio Social Prejudicado/Apoio Social Melhorado/Apoio Social Eficaz",
		ivc: 86
	},
	{
		id: 132,
		group: "familia",
		type: "desgastes",
		text: "Atitude Familiar Conflituosa/Atitude Familiar Conflituosa Reduzida./Atitude Familiar Conflituosa Eliminada",
		ivc: 86
	},
	{
		id: 133,
		group: "familia",
		type: "desgastes",
		text: "Capacidade do(a) Cuidador(a) para Executar o Cuidado Prejudicada/Capacidade do(a) Cuidador(a) para Executar o Cuidado Melhorada/Capacidade do(a) Cuidador(a) para Executar o Cuidado Adequada",
		ivc: 86
	},
	{
		id: 134,
		group: "familia",
		type: "desgastes",
		text: "Capacidade para Participar no Planejamento do Cuidado Prejudicada/Capacidade para Participar no Planejamento do Cuidado Melhorada",
		ivc: 86
	},
	{
		id: 135,
		group: "familia",
		type: "desgastes",
		text: "Comunicação Prejudicada/Comunicação Melhorada/Comunicação Eficaz",
		ivc: 86
	},
	{
		id: 136,
		group: "familia",
		type: "desgastes",
		text: "Conhecimento sobre o Estatuto da Criança e do Adolescente Insatisfatório/Conhecimento sobre o Estatuto da Criança e do Adolescente Melhorado/Conhecimento sobre o Estatuto da Criança e do Adolescente Satisfatório",
		ivc: 86
	},
	{
		id: 137,
		group: "familia",
		type: "desgastes",
		text: "Conhecimento sobre Prevenção de Queda Insatisfatório/Conhecimento sobre Prevenção de Queda Melhorado/Conhecimento sobre Prevenção de Queda Satisfatório",
		ivc: 86
	},
	{
		id: 138,
		group: "familia",
		type: "desgastes",
		text: "Conhecimento sobre Serviços Comunitários Insatisfatório/Conhecimento sobre Serviços Comunitários Melhorado/Conhecimento sobre Serviços Comunitários Satisfatório",
		ivc: 86
	},
	{
		id: 139,
		group: "familia",
		type: "desgastes",
		text: "Dependência de Álcool/Dependência de Álcool Reduzida/Dependência de Drogas Controlada",
		ivc: 86
	},
	{
		id: 140,
		group: "familia",
		type: "desgastes",
		text: "Dependência de Drogas/Dependência de Drogas Reduzida/Dependência de Drogas Controlada",
		ivc: 86
	},
	{
		id: 141,
		group: "familia",
		type: "desgastes",
		text: "Enfrentamento Familiar Prejudicado/Enfrentamento Familiar Melhorado/Enfrentamento Familiar Eficaz",
		ivc: 86
	},
	{
		id: 142,
		group: "familia",
		type: "desgastes",
		text: "Rede Social Insuficiente/Rede Social Aumentada/Rede Social Suficiente",
		ivc: 86
	},
	{
		id: 143,
		group: "familia",
		type: "desgastes",
		text: "Sinais de Depressão Presentes/Sinais de Depressão Diminuídos/Sinais de Depressão Eliminados",
		ivc: 86
	},
	{
		id: 144,
		group: "familia",
		type: "desgastes",
		text: "Violência contra outras Pessoas no Domicílio Presente/Violência contra outras Pessoas no Domicílio Eliminada",
		ivc: 86
	}
]

export const diagnostics_list = diagnostics;