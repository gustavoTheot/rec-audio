
import { useEffect, useState } from 'react'
import {
  AudioView,
  Container,
  Header,
  Inform,
  ListZero,
  Main,
  PlayList,
  Status
} from './style'
import { Download, DownloadSimple, FloppyDisk, ListPlus, Microphone, Pause } from 'phosphor-react'

export function App() {
  const [isRecording, setIsRecording] = useState<boolean>(false)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>()
  const [mediaList, setMediaList] = useState<string[]>([])
  const [recCount, setRecCount] = useState(0)

  useEffect(() => {
    if (mediaRecorder) {
      mediaRecorder.addEventListener('dataavailable', (e) => {
        const uri = URL.createObjectURL(e.data)
        setAudioUrl(uri)
      })

      mediaRecorder.addEventListener('stop', () => {
        setMediaRecorder(null)
        setIsRecording(false)
      })
    }
  }, [mediaRecorder, isRecording])

  async function rec() {
    if (!isRecording && navigator.mediaDevices) {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      })
  
      const mediaRecorder = new MediaRecorder(stream)
      setMediaRecorder(mediaRecorder)
  
      mediaRecorder.start()
      setIsRecording(true)
    }
  }
  

  async function stop() {
    if (isRecording) {
      mediaRecorder?.stop()
    }
  }

  function addToList() {
    if (audioUrl && recCount <= 5) {
      setMediaList([...mediaList, audioUrl])
      setAudioUrl(null)
      setRecCount(recCount+1)
    }

    if (recCount >= 5) {
      alert('Não é possível salvar mais de 5 gravações')
    }
  }

  return (
    <Container>
      <Header>
        {isRecording === false ? (
          <>
            <button onClick={rec} title="Gravar audio">
              <Microphone
                size={24}
                color="#ecf0f1"
                alt="botão vermelho de play para poder gravar o audio"
              />
            </button>
          </>
        ) : (
          <button onClick={stop} title="Para gravação">
            <Pause
              size={24}
              color="#ecf0f1"
              alt="botão para poder para a gravação"
            />
          </button>
        )}

        {audioUrl !== null && (
          <button onClick={addToList} title="Salvar gravação">
            <FloppyDisk
              size={24}
              color="#ecf0f1"
              alt="botão para poder salvar a gravação"
            />
          </button>
        )}
      </Header>

      <Main>
        {audioUrl && (
          <AudioView>
            <video src={audioUrl} controls></video>
            <a
              href={audioUrl}
              download={'audio.mp3'}
              title="Downlaod sem salvar"
            >
              <DownloadSimple
                size={32}
                color="#ecf0f1"
                alt="Botão para fazer downlaod antes de precisar adicionar a gravação na lista"
              />
            </a>
          </AudioView>
        )}

        {recCount > 0 ? (
          <PlayList>
            <Status>
              <span>List</span>

              <span>{recCount} de 5</span>
            </Status>

            <ul>
              {mediaList.map((item, index) => (
                <li key={index}>
                  <audio src={item} controls></audio>
                  <a
                    href={item}
                    download={`audio${index + 1}.mp3`}
                    title="Download audio"
                  >
                    <Download
                      size={24}
                      color="#ecf0f1"
                      alt="Botão para fazer o download do audio da gravação desejado, na lista de gravações"
                    />{' '}
                    Audio {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </PlayList>
        ) : (
          <ListZero>
            <Inform>
              <span>Sua lista de gração está vazia</span>
              <p>Grave um audio e adicione a lista.</p>
            </Inform>

            <ListPlus
              size={32}
              color="#424949"
              alt="Imagem que notifica que não possui nenhum audio na lista de gravações"
            />
          </ListZero>
        )}
      </Main>
    </Container>
  )
}
