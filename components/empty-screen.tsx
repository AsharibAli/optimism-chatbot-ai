import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'What is Ethereum L2',
    message: 'What is "Ethereum L2 Ecosystem"? '
  },
  {
    heading: 'Explain Optimism Blockchain',
    message: `What is "Optimism L2 Blockchain"?`
  },
  {
    heading: 'Code a Smart Contract',
    message: `Code a "smart contract" for token on optimism L2 Blockchain.`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Optimism AI Chatbot🤖
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Unleash the real power of Web3 & AI with Optimism AI natively for
          Optimism L2 Blockchain and It&apos;s Huge Ecosystem.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
