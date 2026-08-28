print("================================")
print("             UX Na Lente")
print("      Gerenciador de Fotos")
print("================================")


fotos = [
    {
        "nome": "foto_01",
        "categoria": "viagem",
        "local": "Praia",
        "evento": "ferias",
        "pasta": ""
    },
    {
        "nome": "foto_02",
        "categoria": "faculdade",
        "local": "FIAP",
        "evento": "aula",
        "pasta": ""
    },
    {
        "nome": "foto_03",
        "categoria": "familia",
        "local": "Casa",
        "evento": "aniversario",
        "pasta": ""
    }
]


def listar_fotos():
    print("\nFotos disponíveis:")

    numero = 1

    for foto in fotos:
        print(numero, "-", foto["nome"])
        numero = numero + 1


def selecionar_foto():
    listar_fotos()

    escolha = input("\nEscolha uma foto: ")

    opcoes_validas = []

    numero = 1

    while numero <= len(fotos):
        opcoes_validas.append(str(numero))
        numero = numero + 1

    while escolha not in opcoes_validas:
        print("Opção inválida.")
        escolha = input("Escolha uma foto: ")

    escolha = int(escolha)

    foto = fotos[escolha - 1]

    return foto


def mostrar_foto(foto):
    print("\n================================")
    print("       INFORMAÇÕES DA FOTO")
    print("================================")
    print("Nome:", foto["nome"])
    print("Categoria:", foto["categoria"])
    print("Local:", foto["local"])
    print("Evento:", foto["evento"])

    if foto["pasta"] != "":
        print("Pasta atual:", foto["pasta"])
    else:
        print("Pasta atual: Não organizada")


def recomendar_pasta(foto):
    if foto["evento"] == "aniversario":
        return "Eventos/Aniversários"

    elif foto["categoria"] == "viagem":
        return "Viagens"

    elif foto["categoria"] == "faculdade":
        return "Faculdade"

    elif foto["categoria"] == "familia":
        return "Família"

    else:
        return "Outros"


def organizar_foto(foto, pasta):
    foto["pasta"] = pasta

    print("\nFoto organizada com sucesso!")
    print("Foto:", foto["nome"])
    print("Pasta:", pasta)


def escolher_pasta():
    print("\nEscolha uma pasta:")
    print("1 - Viagens")
    print("2 - Faculdade")
    print("3 - Família")
    print("4 - Eventos/Aniversários")
    print("5 - Outros")

    escolha = int(input("\nDigite o número da pasta: "))

    while escolha < 1 or escolha > 5:
        print("Opção inválida.")
        escolha = int(input("Digite o número da pasta: "))

    if escolha == 1:
        return "Viagens"

    elif escolha == 2:
        return "Faculdade"

    elif escolha == 3:
        return "Família"

    elif escolha == 4:
        return "Eventos/Aniversários"

    else:
        return "Outros"


def organizar_foto_selecionada():
    foto = selecionar_foto()

    mostrar_foto(foto)

    pasta = recomendar_pasta(foto)

    print("\n================================")
    print("      RECOMENDAÇÃO DA CÂMERA")
    print("================================")
    print("Pasta recomendada:", pasta)

    resposta = input("\nDeseja aceitar essa recomendação? (s/n): ")

    while resposta != "s" and resposta != "n":
        print("Resposta inválida.")
        resposta = input("Digite s para sim ou n para não: ")

    if resposta == "s":
        organizar_foto(foto, pasta)

    else:
        print("\nVocê escolheu não aceitar a recomendação.")

        pasta_nova = escolher_pasta()

        organizar_foto(foto, pasta_nova)


def cadastrar_foto():
    print("\n================================")
    print("         CADASTRAR FOTO")
    print("================================")

    nome = input("Nome da foto: ")
    categoria = input("Categoria: ")
    local = input("Local: ")
    evento = input("Evento: ")

    nova_foto = {
        "nome": nome,
        "categoria": categoria,
        "local": local,
        "evento": evento,
        "pasta": ""
    }

    fotos.append(nova_foto)

    print("\nFoto cadastrada com sucesso!")


def fotos_organizadas():
    print("\n================================")
    print("       FOTOS ORGANIZADAS")
    print("================================")

    encontrou = False

    for foto in fotos:
        if foto["pasta"] != "":
            print(foto["nome"], "→", foto["pasta"])
            encontrou = True

    if encontrou == False:
        print("Nenhuma foto foi organizada ainda.")

def escolher_opcao():
    opcao = input("Escolha uma opção: ")

    while opcao != "1" and opcao != "2" and opcao != "3" and opcao != "4" and opcao != "5":
        print("Opção inválida.")
        opcao = input("Escolha uma opção: ")

    return int(opcao)


def menu():
    opcao = 0

    while opcao != 5:
        print("\n================================")
        print("             UX Na Lente")
        print("================================")
        print("1 - Cadastrar foto")
        print("2 - Listar fotos")
        print("3 - Organizar uma foto")
        print("4 - Ver fotos organizadas")
        print("5 - Sair")
        print("================================")

        opcao = escolher_opcao()

        if opcao == 1:
            cadastrar_foto()

        elif opcao == 2:
            listar_fotos()

        elif opcao == 3:
            organizar_foto_selecionada()

        elif opcao == 4:
            fotos_organizadas()

        elif opcao == 5:
            print("\nEncerrando a JOVI...")

        else:
            print("\nOpção inválida.")


menu()