<?php

namespace app\core\view;

use app\core\Request;
use app\core\Response;
use app\core\Test;
use app\core\App;
use app\core\exceptions\ForbiddenException;
use app\core\exceptions\NotFoundException;

class SetFileView extends BaseView
{
    private $file = false;
    private $header = false;
    private $content = false;

    protected static string $css = 'text/css';
    protected static string $js = 'application/javascript';
    protected static string $map = 'txt';
    protected static string $jpg = ' image/jpeg';
    protected static string $png = ' image/jpeg';
    protected static string $txt = 'txt';
    protected static string $ttf = 'application/x-font-ttf';
    protected static string $woff = 'application/x-font-woff';
    protected static string $woff2 = 'application/font-woff2';

    public function ViewAbs(): array
    {
        return [];
    }

    protected string $filePath;

    public function __construct(Request $request)
    {
        $path = $request->path;

        $n = strpos($path, '/', 1) + 1;
        $this->filePath = substr($path, $n, strlen($path) - $n);
    }

    public function style()
    {
        $this->file =  App::$rootPath . "/resources/style/css/$this->filePath";
    }

    public function script(Request $request, Response $response)
    {
        $this->file =  App::$rootPath . "/resources/js/$this->filePath";
    }



    public function image(Request $request, Response $response)
    {

        $this->file =  App::$rootPath . "/resources/img/$this->filePath";
    }

    public function lib()
    {
        $this->file =  App::$rootPath . "/resources/lib/$this->filePath";
    }

    public function setFile()
    {
        $file = pathinfo($this->file);
        // Test::show($file);
        $this->header = self::${$file['extension']} ?? false;
        $this->content = file_exists($this->file)  ? file_get_contents($this->file) : false;
    }

    public function __destruct()
    {

        $this->setFile();
        if ($this->header && file_exists($this->file)) {
            header('Content-type:' . $this->header);
            echo $this->content;
            return;
        }
        throw new NotFoundException("Test co loi lien he minh nhe!!! thank ban da ghe tham");
    }
}
