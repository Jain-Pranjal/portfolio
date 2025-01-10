import { render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '@/app/page'

// Mock all the imported components
jest.mock('@/components/About', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-about">About Component</div>
  }
})

jest.mock('@/components/Background', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mock-background">{children}</div>
    )
  }
})

jest.mock('@/components/Dock', () => ({
  DockDemo: () => <div data-testid="mock-dock">Dock Component</div>
}))

jest.mock('@/components/Clock', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-clock">Clock Component</div>
  }
})

jest.mock('@/components/FootScroll', () => ({
  FootScroll: () => <div data-testid="mock-footscroll">FootScroll Component</div>
}))

jest.mock('@/components/Projects', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-projects">Projects Component</div>
  }
})

jest.mock('@/components/Experience', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-experience">Experience Component</div>
  }
})

jest.mock('@/components/ui/dialog', () => ({
  Dialog: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DialogTrigger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DialogContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}))

// Mock the SpeechSynthesis API
const mockSpeak = jest.fn()
Object.defineProperty(window, 'speechSynthesis', {
  value: { speak: mockSpeak },
  writable: true
})

describe('Page Component', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.clearAllTimers()
    jest.clearAllMocks()
  })

  it('renders all major components', () => {
    render(<Page />)
    
    expect(screen.getByTestId('mock-background')).toBeInTheDocument()
    expect(screen.getByTestId('mock-about')).toBeInTheDocument()
    expect(screen.getByTestId('mock-projects')).toBeInTheDocument()
    expect(screen.getByTestId('mock-experience')).toBeInTheDocument()
    expect(screen.getByTestId('mock-dock')).toBeInTheDocument()
    expect(screen.getByTestId('mock-clock')).toBeInTheDocument()
  })

  it('renders initial name in English', () => {
    render(<Page />)
    expect(screen.getByText('PRANJAL JAIN')).toBeInTheDocument()
  })

  // it('changes language every 3 seconds', () => {
  //   render(<Page />)

  //   // Initial state
  //   expect(screen.getByText('PRANJAL JAIN')).toBeInTheDocument()

  //   // After 3 seconds
  //   act(() => {
  //     jest.advanceTimersByTime(3000)
  //   })
  //   expect(screen.getByText((content, element) => {
  //     return content.includes('प्रांजल जैन') && element?.closest('h1') !== null;
  //   })).toBeInTheDocument()

  //   // After another 3 seconds
  //   act(() => {
  //     jest.advanceTimersByTime(3000)
  //   })
  //   expect(screen.getByText('プランジャル・ジャイン')).toBeInTheDocument()
  // })

  // it('speaks name when volume button is clicked', () => {
  //   render(<Page />)
    
  //   const volumeButton = screen.getByTestId('volume-button')
  //   fireEvent.click(volumeButton)

  //   expect(mockSpeak).toHaveBeenCalled()
  //   const utterance = mockSpeak.mock.calls[0][0]
  //   expect(utterance.text).toBe('PRANJAL JAIN')
  //   expect(utterance.lang).toBe('en-US')
  // })

  it('opens resume dialog when resume button is clicked', () => {
    render(<Page />)
    
    const resumeButton = screen.getByText('Resume')
    fireEvent.click(resumeButton)

    const iframe = screen.getByTitle('Resume')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', 'https://drive.google.com/file/d/1Db2xJ0J7xbiw-Smf9QrvQw-jblvC0-3f/view?usp=sharing')
  })

  // it('applies random gradient on language change', () => {
  //   render(<Page />)
    
  //   const initialText = screen.getByText('PRANJAL JAIN')
  //   const initialGradient = initialText.parentElement?.className

  //   act(() => {
  //     jest.advanceTimersByTime(3000)
  //   })

  //   const nextText = screen.getByText((content, element) => content.includes('प्रांजल जैन') && element?.closest('h1'))
  //   const nextGradient = nextText.parentElement?.className
    
  //   expect(initialGradient).not.toBe(nextGradient)
  // })

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = jest.spyOn(window, 'clearInterval')
    const { unmount } = render(<Page />)
    
    unmount()
    
    expect(clearIntervalSpy).toHaveBeenCalled()
  })

  // it('updates isOpen state when dialog is triggered', () => {
  //   render(<Page />)
    
  //   const resumeButton = screen.getByText('Resume')
  //   fireEvent.click(resumeButton)
    
  //   expect(screen.getByTitle('Resume')).toBeInTheDocument()
    
  //   // Test dialog close
  //   fireEvent.click(screen.getByText('Resume')) // Click again to close
  //   expect(screen.queryByTitle('Resume')).not.toBeInTheDocument()
  // })

  // it('cycles through all languages correctly', () => {
  //   render(<Page />)
  
  //   // Find the container that holds the changing text
  //   const getTextContainer = () => screen.getByRole('heading')
  
  //   // Check initial language (English)
  //   expect(getTextContainer()).toHaveTextContent('PRANJAL JAIN')
  
  //   // After 3 seconds - Hindi
  //   act(() => {
  //     jest.advanceTimersByTime(3000)
  //   })
  //   expect(screen.getByText((content, element) => content.includes('प्रांजल जैन') && element?.tagName.toLowerCase() === 'h1')).toBeInTheDocument()
  
  //   // After 6 seconds - Japanese
  //   act(() => {
  //     jest.advanceTimersByTime(3000)
  //   })
  //   expect(getTextContainer()).toHaveTextContent(/プランジャル・ジャイン/i)
  
  //   // After 9 seconds - Urdu
  //   act(() => {
  //     jest.advanceTimersByTime(3000)
  //   })
  //   expect(getTextContainer()).toHaveTextContent(/پرانجل جین/i)
  
  //   // After 12 seconds - back to English
  //   act(() => {
  //     jest.advanceTimersByTime(3000)
  //   })
  //   expect(getTextContainer()).toHaveTextContent('PRANJAL JAIN')
  // })
})