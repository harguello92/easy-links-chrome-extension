import useSearch from './hooks/useSearch';
import Searcher from './components/Searcher';
import Header from './components/Header';
import Card, { CardDescription, CardLink, CardLinks, CardTitle } from './components/Card';
import StatusIndicator from './components/StatusIndicator';
import { useEffect, useState } from 'preact/hooks';
import { getConfig as getPersistedConfig } from './utils/localStorage';
import ConfigViewModel, { ConfigViewModelType } from './models/ConfigViewModel';
import { ConfigItemViewModelType } from './models/ConfigItemViewModel';
import { ToastProvider } from './contexts/ToastContext';
import { Edit2 } from 'lucide-react';

function App() {
  const [config, setConfig] = useState<ConfigViewModelType>();

  const {
    data: filteredConfig,
    onSearch
  } = useSearch<ConfigItemViewModelType>(config?.items, ["name"]);

  useEffect(() => {
    const persistedConfig = getPersistedConfig();
    const config = ConfigViewModel(persistedConfig)
    setConfig(config);
  }, []);

  const onEditLink = (e: Event) => {
    e.stopPropagation();
  }

  return (
    <ToastProvider>
      <div className="w-[400px] bg-gray-50 relative">
        <div id="modal-root" />
        <Header logoUrl={config?.getLogoUrl()} />
        <div className="p-4">
          <div className="mb-4">
            <Searcher onSearch={onSearch} />
          </div>
          <div className="space-y-3 h-[350px] overflow-y-auto">
            {filteredConfig.map((configItem) => (
              <Card
                key={configItem?.getName()}
                className="group"
              >
                <CardTitle>
                  <div className="flex items-center gap-2">
                    {configItem?.getName()}
                    <Edit2
                      className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer hidden group-hover:block"
                      onClick={onEditLink}
                    />
                  </div>
                  <StatusIndicator links={configItem?.getLinks()} />
                </CardTitle>
                {
                  configItem?.getDescription() &&
                  <CardDescription>
                    {configItem.getDescription()}
                  </CardDescription>
                }
                <CardLinks>
                  {configItem?.getLinks().map(({ name, url }) => {
                    return (
                      <CardLink href={url}>{name}</CardLink>
                    )
                  })}
                </CardLinks>
              </Card>
            ))}
            {filteredConfig.length === 0 &&
              <p className="text-center text-gray-500">No results found</p>
            }
          </div>
        </div>
      </div>
    </ToastProvider>
  );
}

export default App;
