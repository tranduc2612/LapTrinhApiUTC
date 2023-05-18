// bai12_TranMinhDuc.cpp : Defines the entry point for the application.
//

#include "framework.h"
#include "bai12_TranMinhDuc.h"

#define MAX_LOADSTRING 100

// Global Variables:
HINSTANCE hInst;                                // current instance
WCHAR szTitle[MAX_LOADSTRING];                  // The title bar text
WCHAR szWindowClass[MAX_LOADSTRING];            // the main window class name
HWND Box_Hinh,Box_Vien,Box_Nen,Btn_Hinh[2], Btn_Nen[5],Btn_Vien[5];
// Forward declarations of functions included in this code module:
ATOM                MyRegisterClass(HINSTANCE hInstance);
BOOL                InitInstance(HINSTANCE, int);
LRESULT CALLBACK    WndProc(HWND, UINT, WPARAM, LPARAM);
INT_PTR CALLBACK    About(HWND, UINT, WPARAM, LPARAM);

int APIENTRY wWinMain(_In_ HINSTANCE hInstance,
                     _In_opt_ HINSTANCE hPrevInstance,
                     _In_ LPWSTR    lpCmdLine,
                     _In_ int       nCmdShow)
{
    UNREFERENCED_PARAMETER(hPrevInstance);
    UNREFERENCED_PARAMETER(lpCmdLine);

    // TODO: Place code here.

    // Initialize global strings
    LoadStringW(hInstance, IDS_APP_TITLE, szTitle, MAX_LOADSTRING);
    LoadStringW(hInstance, IDC_BAI12TRANMINHDUC, szWindowClass, MAX_LOADSTRING);
    MyRegisterClass(hInstance);

    // Perform application initialization:
    if (!InitInstance (hInstance, nCmdShow))
    {
        return FALSE;
    }

    HACCEL hAccelTable = LoadAccelerators(hInstance, MAKEINTRESOURCE(IDC_BAI12TRANMINHDUC));

    MSG msg;

    // Main message loop:
    while (GetMessage(&msg, nullptr, 0, 0))
    {
        if (!TranslateAccelerator(msg.hwnd, hAccelTable, &msg))
        {
            TranslateMessage(&msg);
            DispatchMessage(&msg);
        }
    }

    return (int) msg.wParam;
}



//
//  FUNCTION: MyRegisterClass()
//
//  PURPOSE: Registers the window class.
//
ATOM MyRegisterClass(HINSTANCE hInstance)
{
    WNDCLASSEXW wcex;

    wcex.cbSize = sizeof(WNDCLASSEX);

    wcex.style          = CS_HREDRAW | CS_VREDRAW;
    wcex.lpfnWndProc    = WndProc;
    wcex.cbClsExtra     = 0;
    wcex.cbWndExtra     = 0;
    wcex.hInstance      = hInstance;
    wcex.hIcon          = LoadIcon(hInstance, MAKEINTRESOURCE(IDI_BAI12TRANMINHDUC));
    wcex.hCursor        = LoadCursor(nullptr, IDC_ARROW);
    wcex.hbrBackground  = (HBRUSH)(COLOR_WINDOW+1);
    wcex.lpszMenuName   = MAKEINTRESOURCEW(IDC_BAI12TRANMINHDUC);
    wcex.lpszClassName  = szWindowClass;
    wcex.hIconSm        = LoadIcon(wcex.hInstance, MAKEINTRESOURCE(IDI_SMALL));

    return RegisterClassExW(&wcex);
}

//
//   FUNCTION: InitInstance(HINSTANCE, int)
//
//   PURPOSE: Saves instance handle and creates main window
//
//   COMMENTS:
//
//        In this function, we save the instance handle in a global variable and
//        create and display the main program window.
//
BOOL InitInstance(HINSTANCE hInstance, int nCmdShow)
{
   hInst = hInstance; // Store instance handle in our global variable

   HWND hWnd = CreateWindowW(szWindowClass, TEXT("Bai12_TranMinhDuc"), WS_OVERLAPPEDWINDOW,
      CW_USEDEFAULT, 0, CW_USEDEFAULT, 0, nullptr, nullptr, hInstance, nullptr);

   if (!hWnd)
   {
      return FALSE;
   }

   ShowWindow(hWnd, nCmdShow);
   UpdateWindow(hWnd);

   return TRUE;
}

//
//  FUNCTION: WndProc(HWND, UINT, WPARAM, LPARAM)
//
//  PURPOSE: Processes messages for the main window.
//
//  WM_COMMAND  - process the application menu
//  WM_PAINT    - Paint the main window
//  WM_DESTROY  - post a quit message and return
//
//
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    HDC hdc, hdc_1, hdc_2;
    static HBRUSH hbrush;
    static HPEN pen;
    static int Box_Hinh_Size_x_Left=30, Box_Hinh_Size_x_Right = 180, Box_Size_y_Top = 10, Box_Size_y_Bottom=85;
    static int Box_Nen_Size_x_Right = 280, Box_Nen_Size_x_Left = 215;
    static int Box_Vien_Size_x_Left = 500,Box_Vien_Size_x_Right = 280;
    static int xLeft, yTop,xRight,yBottom, Hinh;
    COLORREF color[5] = { RGB(255,0,0),RGB(0,255,0),RGB(0,0,255),RGB(255,255,0),RGB(0,255,255) };

    switch (message)
    {
    case WM_CREATE:
        Box_Hinh = CreateWindow(TEXT("button"), TEXT("Chọn hình"), WS_CHILD | WS_VISIBLE | BS_GROUPBOX, Box_Hinh_Size_x_Left, Box_Size_y_Top, Box_Hinh_Size_x_Right, Box_Size_y_Bottom, hWnd, NULL, NULL, NULL);
        Box_Nen = CreateWindow(TEXT("button"), TEXT("Chọn màu nền"), WS_CHILD | WS_VISIBLE | BS_GROUPBOX, Box_Nen_Size_x_Left, Box_Size_y_Top, Box_Nen_Size_x_Right, Box_Size_y_Bottom, hWnd, NULL, NULL, NULL);
        Box_Vien = CreateWindow(TEXT("button"), TEXT("Chọn đường viền"), WS_CHILD | WS_VISIBLE | BS_GROUPBOX, Box_Vien_Size_x_Left, Box_Size_y_Top, Box_Vien_Size_x_Right, Box_Size_y_Bottom, hWnd, NULL, NULL, NULL);
        for (int i = 0; i < 2; i++) {
            Btn_Hinh[i] = CreateWindow(TEXT("button"), TEXT(""), WS_CHILD | WS_VISIBLE | BS_PUSHBUTTON, Box_Hinh_Size_x_Left + 5 + Box_Hinh_Size_x_Right * i / 2, Box_Size_y_Top + 20, Box_Hinh_Size_x_Right / 2 - 10, Box_Size_y_Bottom - 30, hWnd, (HMENU)(i+1), NULL, NULL);
        }

        for (int i = 0; i < 5; i++)
        {
            Btn_Nen[i] = CreateWindow(TEXT("button"), TEXT(""), WS_CHILD | WS_VISIBLE | BS_PUSHBUTTON, Box_Nen_Size_x_Left + 5 + Box_Nen_Size_x_Right * i / 5, Box_Size_y_Top + 20, Box_Nen_Size_x_Right / 5 - 10, Box_Size_y_Bottom - 30, hWnd, (HMENU)(i+3), NULL, NULL);
            Btn_Vien[i] = CreateWindow(TEXT("button"), TEXT(""), WS_CHILD | WS_VISIBLE | BS_PUSHBUTTON, Box_Vien_Size_x_Left + 5 + Box_Vien_Size_x_Right * i / 5, Box_Size_y_Top + 20, Box_Vien_Size_x_Right / 5 - 10, Box_Size_y_Bottom - 30, hWnd, (HMENU)(i+8), NULL, NULL);
        }
        break;
    case WM_LBUTTONDOWN:
        xLeft = LOWORD(lParam);
        yTop = HIWORD(lParam);
        break;
    case WM_LBUTTONUP:
        xRight = LOWORD(lParam);
        yBottom = HIWORD(lParam);
        hdc = GetDC(hWnd);
        SelectObject(hdc, hbrush);
        SelectObject(hdc, pen);

        if (Hinh == 1) {
            Rectangle(hdc, xLeft, yTop, xRight, yBottom);
        }
        else {
            Ellipse(hdc, xLeft, yTop, xRight, yBottom);
        }
        ReleaseDC(hWnd, hdc);
        break;
    case WM_COMMAND:
        {
            int wmId = LOWORD(wParam);
            // Parse the menu selections:
            switch (wmId)
            {
            case 1:
            case 2:
                Hinh = wmId;
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                hbrush = CreateSolidBrush(color[wmId-3]);
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                pen = CreatePen(PS_SOLID, 8, color[wmId - 8]);
                break;
            case IDM_ABOUT:
                DialogBox(hInst, MAKEINTRESOURCE(IDD_ABOUTBOX), hWnd, About);
                break;
            case IDM_EXIT:
                DestroyWindow(hWnd);
                break;
            default:
                return DefWindowProc(hWnd, message, wParam, lParam);
            }
        }
        break;
    case WM_PAINT:
        {
            PAINTSTRUCT ps;
            HBRUSH brush;
            hdc = BeginPaint(Btn_Hinh[0], &ps);
            Rectangle(hdc, 10, 10, 70, 40);
            hdc = BeginPaint(Btn_Hinh[1], &ps);
            Ellipse(hdc, 10, 10, 70, 40);
            EndPaint(Btn_Hinh[1], &ps);
            EndPaint(Btn_Hinh[0], &ps);

            for (int i = 0; i < 5; i++) {
                brush = CreateSolidBrush(color[i]);

                hdc_1 = BeginPaint(Btn_Nen[i], &ps);
                SelectObject(hdc_1, brush);
                Rectangle(hdc_1, 2, 2, 45, 53);

                hdc_2 = BeginPaint(Btn_Vien[i], &ps);
                SelectObject(hdc_2, brush);
                Rectangle(hdc_2, 2, 2, 45, 53);

                EndPaint(Btn_Vien[i], &ps);
                EndPaint(Btn_Nen[i], &ps);

            }
            EndPaint(hWnd, &ps);
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}

// Message handler for about box.
INT_PTR CALLBACK About(HWND hDlg, UINT message, WPARAM wParam, LPARAM lParam)
{
    UNREFERENCED_PARAMETER(lParam);
    switch (message)
    {
    case WM_INITDIALOG:
        return (INT_PTR)TRUE;

    case WM_COMMAND:
        if (LOWORD(wParam) == IDOK || LOWORD(wParam) == IDCANCEL)
        {
            EndDialog(hDlg, LOWORD(wParam));
            return (INT_PTR)TRUE;
        }
        break;
    }
    return (INT_PTR)FALSE;
}
