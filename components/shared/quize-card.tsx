import { Button } from "@/components/ui/button"

interface Question {
  id: number
  question: string
  options: string[]
}

interface QuizeCardProps extends Question {
  onAnswer: (answer: string) => void
  selectedOption: string | null
}

export const QuizeCard = ({ question, options, id, onAnswer, selectedOption }: QuizeCardProps) => {
  return (
    <div className="mx-auto max-w-[375px]">
      <div className="bg-background quize-mask border-b-2 border-dashed w-full py-5 px-10">
        <div className="text-muted-foreground text-sm mb-2">Вопрос {id}</div>
        <h6>{question}</h6>
      </div>
      <div>
        {options.map((option, index) => (
          <Button
            key={index}
            className={`text-center mb-[2px] py-5 w-full text-foreground ${
              selectedOption === option ? "bg-primary text-primary-foreground" : "bg-background"
            }`}
            onClick={() => onAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  )
}

